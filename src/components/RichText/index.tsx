import React, { ReactElement, HTMLAttributes } from 'react'

import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  JSXConvertersFunction,
  RichText as RichTextWithoutBlocks,
} from '@payloadcms/richtext-lexical/react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utilities/cn'
import typographyPresets from './presets'

type NodeTypes = DefaultNodeTypes

const richTextVariants = cva('', {
  variants: {
    enableGutter: {
      true: 'container',
      false: 'max-w-none',
    },
    preset: {
      default: '',
      blogPost: '',
      compact: '',
    },
  },
  defaultVariants: {
    enableGutter: true,
    preset: 'default',
  },
})

type Props = VariantProps<typeof richTextVariants> & {
  data?: SerializedEditorState
  className?: string
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

type HTMLElementProps = HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode
}

function applyPresetClassesToChildren(
  children: React.ReactNode,
  presetClasses: Record<string, string>,
): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child

    const element = child as ReactElement<HTMLElementProps>
    // Get the element type as string (e.g., 'p', 'h1', etc.)
    const elementType = typeof element.type === 'string' ? element.type : ''

    // Find matching preset class based on element type
    let presetClass = ''
    if (elementType === 'p') presetClass = presetClasses.paragraph
    else if (elementType === 'blockquote') presetClass = presetClasses.quote
    else if (elementType === 'a') presetClass = presetClasses.link
    else if (elementType === 'ul' || elementType === 'ol') presetClass = presetClasses.list
    else if (elementType === 'li') presetClass = presetClasses.listItem
    else if (/^h[1-6]$/.test(elementType)) presetClass = presetClasses[elementType]

    // Recursively apply to children
    const newChildren = element.props.children
      ? applyPresetClassesToChildren(element.props.children, presetClasses)
      : element.props.children

    // If we have a preset class for this element type, clone and add the class
    if (presetClass) {
      return React.cloneElement<HTMLElementProps>(element, {
        className: cn(element.props.className, presetClass),
        children: newChildren,
      })
    }

    // If no preset class but has children, just clone with new children
    if (newChildren !== element.props.children) {
      return React.cloneElement<HTMLElementProps>(element, { children: newChildren })
    }

    // Otherwise return unchanged
    return element
  })
}

export function RichText(props: Props) {
  const { className, enableGutter = true, preset = 'default', data, children, ...rest } = props

  const presetClasses = typographyPresets[preset as keyof typeof typographyPresets]

  const customConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => {
    return {
      ...defaultConverters,
      paragraph: ({ node, nodesToJSX }) => (
        <p className={presetClasses.paragraph}>{nodesToJSX({ nodes: node.children })}</p>
      ),
      heading: ({ node, nodesToJSX }) => {
        const Tag = node.tag as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
        const headingClass = presetClasses[node.tag as keyof typeof presetClasses]
        return <Tag className={headingClass}>{nodesToJSX({ nodes: node.children })}</Tag>
      },
      list: ({ node, nodesToJSX }) => {
        const Tag = node.tag as 'ul' | 'ol'
        return <Tag className={presetClasses.list}>{nodesToJSX({ nodes: node.children })}</Tag>
      },
      listitem: ({ node, nodesToJSX }) => (
        <li className={presetClasses.listItem}>{nodesToJSX({ nodes: node.children })}</li>
      ),
      quote: ({ node, nodesToJSX }) => (
        <blockquote className={presetClasses.quote}>
          {nodesToJSX({ nodes: node.children })}
        </blockquote>
      ),
      link: ({ node, nodesToJSX }) => (
        <a href={node.fields?.url} className={presetClasses.link}>
          {nodesToJSX({ nodes: node.children })}
        </a>
      ),
    }
  }

  return (
    <div className={cn(richTextVariants({ enableGutter, preset }), className)} {...rest}>
      {data ? (
        <RichTextWithoutBlocks data={data} converters={customConverters} />
      ) : (
        applyPresetClassesToChildren(children, presetClasses)
      )}
    </div>
  )
}
