# Text

A versatile text component that provides consistent typography with various styles and sizes. Built with accessibility and responsive design in mind.

## Features

- Multiple variants
- Responsive sizes
- Semantic HTML
- Color variants
- Weight options
- Line clamping
- Truncation
- Rich text support

## Usage

```tsx
// Basic usage
<Text>Regular text content</Text>

// With variant
<Text variant="lead">
  Lead paragraph text
</Text>

// With size
<Text size="lg">
  Larger text content
</Text>

// With weight
<Text weight="bold">
  Bold text content
</Text>

// With color
<Text color="muted">
  Muted text content
</Text>
```

## Props

| Prop        | Type                                             | Default     | Description               |
| ----------- | ------------------------------------------------ | ----------- | ------------------------- |
| `variant`   | `'default' \| 'lead' \| 'small' \| 'muted'`      | `'default'` | Text style variant        |
| `size`      | `'xs' \| 'sm' \| 'base' \| 'lg' \| 'xl'`         | `'base'`    | Text size                 |
| `weight`    | `'normal' \| 'medium' \| 'semibold' \| 'bold'`   | `'normal'`  | Font weight               |
| `color`     | `'default' \| 'muted' \| 'accent' \| 'inverted'` | `'default'` | Text color                |
| `align`     | `'left' \| 'center' \| 'right' \| 'justify'`     | `'left'`    | Text alignment            |
| `truncate`  | `boolean \| number`                              | `false`     | Enable truncation         |
| `className` | `string`                                         | -           | Additional CSS classes    |
| `as`        | `ElementType`                                    | `'p'`       | HTML element to render as |

## Examples

### Lead Text

```tsx
<Text variant="lead" size="lg">
  This is a lead paragraph that introduces the main content of the section.
</Text>
```

### Muted Small Text

```tsx
<Text variant="small" color="muted">
  Additional information in smaller text
</Text>
```

### Truncated Text

```tsx
<Text truncate={2}>
  This is a long piece of text that will be truncated after two lines using text-overflow ellipsis.
</Text>
```

## Best Practices

1. **Usage**

   - Semantic HTML
   - Consistent styles
   - Clear hierarchy
   - Proper spacing

2. **Accessibility**

   - Color contrast
   - Font sizes
   - Line height
   - Text spacing

3. **Responsive**
   - Fluid sizes
   - Line lengths
   - Mobile first
   - Breakpoints

## Accessibility

1. **Readability**

   - Sufficient contrast
   - Adequate sizing
   - Line spacing
   - Word spacing

2. **Semantics**

   - Proper markup
   - Heading levels
   - Content flow
   - ARIA roles

3. **Adaptability**
   - Zoom support
   - Font scaling
   - High contrast
   - Screen readers

## Customization

1. **Custom Styles**

```tsx
<Text className="custom-text" style={{ textIndent: '2em' }}>
  Custom styled text
</Text>
```

2. **Rich Text**

```tsx
<Text
  dangerouslySetInnerHTML={{
    __html: richTextContent,
  }}
/>
```

## Common Use Cases

1. **Content Types**

   - Paragraphs
   - Descriptions
   - Captions
   - Labels

2. **UI Elements**

   - Card content
   - List items
   - Form help
   - Notifications

3. **Documentation**
   - Articles
   - Guides
   - References
   - Notes

## States

1. **Interactive Text**

```tsx
<Text className="hover:text-primary" as="button">
  Clickable text
</Text>
```

2. **Loading State**

```tsx
<Text isLoading>
  <Skeleton />
</Text>
```

## Integration

1. **With Markdown**

```tsx
<Text as="div" className="prose">
  <ReactMarkdown>{markdownContent}</ReactMarkdown>
</Text>
```

2. **With Rich Text**

```tsx
<Text as="div" className="rich-text">
  <RichTextRenderer content={richTextContent} />
</Text>
```

## Animation

1. **Fade In**

```css
.text-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

2. **Highlight**

```css
.text-highlight {
  animation: highlight 1s ease-out;
}

@keyframes highlight {
  0% {
    background-color: var(--color-highlight);
  }
  100% {
    background-color: transparent;
  }
}
```

## Theme Integration

1. **Variables**

```css
.text {
  --text-font: var(--font-sans);
  --text-color: var(--color-gray-900);
  --text-muted: var(--color-gray-500);
  --text-accent: var(--color-primary);
}
```

2. **Dark Mode**

```css
.dark .text {
  --text-color: var(--color-gray-100);
  --text-muted: var(--color-gray-400);
  --text-accent: var(--color-primary-light);
}
```

## Typography Scale

```css
.text-scale {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;

  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

## Responsive Behavior

```tsx
<Text
  size={{
    base: 'sm',
    md: 'base',
    lg: 'lg',
  }}
  className="md:max-w-[65ch]"
>
  Responsive text that adapts to screen size
</Text>
```
