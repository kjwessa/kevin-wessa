# RichText

A flexible rich text component that renders content from Payload CMS's Lexical editor or children with typography presets. Built with customizable typography styles and block support.

## Features

- Payload CMS Lexical editor integration
- Multiple typography presets (default, blogPost, compact)
- Custom block support (Media, Code)
- Responsive container options
- Customizable typography styles
- Nested content support
- Automatic class application

## Usage

```tsx
// Basic usage with Payload CMS data
<RichText
  data={payloadRichTextData}
  preset="default"
  enableGutter={true}
/>

// Using with children
<RichText preset="blogPost">
  <h1>Title</h1>
  <p>Content paragraph</p>
  <ul>
    <li>List item</li>
  </ul>
</RichText>

// Compact preset with custom className
<RichText
  preset="compact"
  className="custom-content"
  enableGutter={false}
>
  <h2>Compact Title</h2>
  <p>Compact content</p>
</RichText>
```

## Props

| Prop           | Type                                   | Default     | Description                        |
| -------------- | -------------------------------------- | ----------- | ---------------------------------- |
| `data`         | `SerializedEditorState`                | -           | Payload CMS Lexical editor data    |
| `preset`       | `'default' \| 'blogPost' \| 'compact'` | `'default'` | Typography preset to use           |
| `enableGutter` | `boolean`                              | `true`      | Enable container class for gutters |
| `className`    | `string`                               | -           | Additional CSS classes             |
| `children`     | `React.ReactNode`                      | -           | Child elements to apply presets to |

## Typography Presets

### Default Preset

```tsx
{
  paragraph: 'text-body-large mt-6',
  h1: 'text-headline-large mt-24',
  h2: 'text-headline-medium mt-24',
  h3: 'text-headline-small mt-8',
  h4: 'text-title-large mt-8',
  h5: 'text-title-medium mt-8',
  h6: 'text-title-small mt-8',
  list: 'list-disc list-inside text-body-medium mt-6',
  listItem: 'mb-2',
  quote: 'border-l-4 pl-4 italic mt-8',
  link: 'underline hover:text-brand-gold',
}
```

### Blog Post Preset

Identical to default preset, optimized for blog content.

### Compact Preset

```tsx
{
  paragraph: 'text-body-small mt-4',
  h1: 'text-title-large mt-12',
  h2: 'text-title-medium mt-12',
  h3: 'text-title-small mt-6',
  h4: 'text-body-large mt-6',
  h5: 'text-body-medium mt-6',
  h6: 'text-body-small mt-6',
  list: 'list-disc list-inside text-body-small mt-4',
  listItem: 'mb-1',
  quote: 'border-l-2 pl-3 italic mt-6',
  link: 'underline hover:text-brand-gold',
}
```

## Examples

### Blog Post Content

```tsx
<RichText data={blogPostContent} preset="blogPost" className="blog-content" />
```

### Compact Documentation

```tsx
<RichText preset="compact" enableGutter={false}>
  <h2>Quick Start</h2>
  <p>Follow these steps to get started:</p>
  <ol>
    <li>Install dependencies</li>
    <li>Configure settings</li>
    <li>Start development</li>
  </ol>
</RichText>
```

### Custom Block Integration

```tsx
<RichText data={contentWithBlocks}>{/* Automatically handles MediaBlock and CodeBlock */}</RichText>
```

## Best Practices

1. **Usage**

   - Choose appropriate preset for content type
   - Use enableGutter for proper spacing
   - Maintain consistent typography scale
   - Consider responsive behavior

2. **Performance**

   - Avoid deep nesting of elements
   - Use appropriate heading levels
   - Consider content reflow
   - Optimize media blocks

3. **Accessibility**
   - Maintain heading hierarchy
   - Use semantic HTML
   - Ensure proper link contrast
   - Provide alt text for media

## Customization

### Custom Container

```tsx
<RichText className="custom-container" enableGutter={false} style={{ maxWidth: '65ch' }}>
  {content}
</RichText>
```

### Custom Typography

```tsx
<RichText className="prose prose-lg" preset="default" style={{ '--custom-spacing': '2rem' }}>
  {content}
</RichText>
```

## Integration

### With Payload CMS

```tsx
import { RichText } from '@/components/RichText'
import type { Page } from '@/payload-types'

export function PageContent({ content }: { content: Page['content'] }) {
  return <RichText data={content} preset="default" className="page-content" />
}
```

### With Custom Blocks

```tsx
<RichText data={content}>
  {/* MediaBlock and CodeBlock are automatically handled */}
  {/* Additional blocks can be added through Payload CMS */}
</RichText>
```

## Theme Integration

### Variables

```css
.rich-text {
  --content-width: 65ch;
  --heading-color: var(--color-heading);
  --text-color: var(--color-text);
  --link-color: var(--color-link);
}
```

### Dark Mode

```css
.dark .rich-text {
  --heading-color: var(--color-heading-dark);
  --text-color: var(--color-text-dark);
  --link-color: var(--color-link-dark);
}
```

## Common Use Cases

1. **Content Pages**

   - Blog posts
   - Documentation
   - Articles
   - Product descriptions

2. **Dynamic Content**

   - CMS-driven pages
   - User-generated content
   - Marketing materials
   - Legal documents

3. **Interactive Content**
   - Tutorials
   - Guides
   - FAQs
   - Documentation

## Error Handling

```tsx
<RichText
  data={content}
  onError={(error) => {
    console.error('Rich text rendering error:', error)
    // Handle fallback content
  }}
/>
```

## Responsive Behavior

```tsx
<RichText className="md:prose-lg lg:prose-xl" enableGutter={true}>
  {responsiveContent}
</RichText>
```
