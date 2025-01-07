# ClampBeta

A utility component for truncating text content with configurable line limits and optional gradient fading. Perfect for handling variable-length content while maintaining clean layouts.

## Features

- Single and multi-line text truncation
- Configurable line count (1-6 lines)
- Optional gradient fade effect
- Expandable content support
- Polymorphic component (can render as any HTML element)
- Dark mode compatible gradients

## Usage

```tsx
// Basic single-line truncation
<ClampBeta lines={1}>
  Single line of text that will be truncated with an ellipsis...
</ClampBeta>

// Multi-line truncation
<ClampBeta lines={3}>
  Multiple lines of text that will be truncated after three lines...
</ClampBeta>

// With gradient fade
<ClampBeta lines={2} gradient>
  Text that fades out at the bottom instead of a hard cutoff...
</ClampBeta>

// Expandable content
<ClampBeta lines={3} expandable onExpand={() => setExpanded(true)}>
  Content that can be expanded to show more text...
</ClampBeta>
```

## Props

| Prop         | Type                         | Default  | Description                               |
| ------------ | ---------------------------- | -------- | ----------------------------------------- |
| `lines`      | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `3`      | Number of lines to show before truncating |
| `gradient`   | `boolean`                    | `false`  | Show gradient fade at truncation point    |
| `expandable` | `boolean`                    | `false`  | Add expand button for full content        |
| `onExpand`   | `() => void`                 | -        | Callback when expand button is clicked    |
| `as`         | `ElementType`                | `'div'`  | HTML element to render as                 |
| `children`   | `ReactNode`                  | Required | Content to clamp                          |

## Examples

### Product Description

```tsx
<ClampBeta lines={2} gradient>
  {product.description}
</ClampBeta>
```

### Article Preview

```tsx
<article>
  <h2>{article.title}</h2>
  <ClampBeta lines={3} expandable onExpand={() => router.push(`/article/${article.slug}`)}>
    {article.excerpt}
  </ClampBeta>
</article>
```

### Comment Thread

```tsx
<ClampBeta lines={4} gradient expandable onExpand={() => setShowFullComment(true)}>
  {comment.content}
</ClampBeta>
```

## Best Practices

1. **Line Count Selection**

   - Use `lines={1}` for titles and headings
   - Use `lines={2-3}` for descriptions and previews
   - Use `lines={4-6}` for longer content previews
   - Consider mobile viewport when choosing line count

2. **Gradient Usage**

   - Use gradient for longer content previews
   - Avoid gradient on single-line clamps
   - Ensure gradient matches background color
   - Test gradient visibility in both themes

3. **Expandable Content**
   - Provide clear expansion affordance
   - Consider the expanded state UX
   - Handle state management consistently
   - Implement smooth transitions

## Accessibility Considerations

1. **Screen Readers**

   - Full content remains in DOM for screen readers
   - Use ARIA labels when needed
   - Ensure expand button is keyboard accessible
   - Provide context for truncated content

2. **Visual Indicators**
   - Make truncation obvious to users
   - Ensure sufficient contrast for gradient
   - Consider focus states for expandable content
   - Test with different font sizes

## System Integration

1. **With Card Components**

```tsx
<Card>
  <CardHeader>
    <ClampBeta lines={1}>{title}</ClampBeta>
  </CardHeader>
  <CardBody>
    <ClampBeta lines={3} gradient>
      {description}
    </ClampBeta>
  </CardBody>
</Card>
```

2. **With List Items**

```tsx
<List>
  {items.map((item) => (
    <ListItem key={item.id}>
      <ClampBeta lines={2}>{item.content}</ClampBeta>
    </ListItem>
  ))}
</List>
```

3. **With Grid Layout**

```tsx
<GridBeta cols={3}>
  {products.map((product) => (
    <GridItem key={product.id}>
      <ProductImage src={product.image} />
      <ClampBeta lines={2}>{product.name}</ClampBeta>
      <ClampBeta lines={3} gradient>
        {product.description}
      </ClampBeta>
    </GridItem>
  ))}
</GridBeta>
```

## Common Use Cases

1. **Product Cards**

   - Title: `lines={1}`
   - Description: `lines={2}` with gradient
   - Features list: `lines={3}` expandable

2. **Blog Previews**

   - Excerpt: `lines={3}` with gradient
   - Consider expandable with link to full post
   - Match line count to design hierarchy

3. **User Comments**

   - Preview: `lines={4}` with gradient
   - Expandable for full content
   - Consider nested comments

4. **List Items**
   - Title: `lines={1}`
   - Description: `lines={2}`
   - Consistent across list items

## Performance Notes

1. **Content Updates**

   - Recalculates on content change
   - Efficient DOM updates
   - Smooth expand/collapse transitions
   - Minimal layout shifts

2. **Large Lists**
   - Virtual scrolling compatible
   - Efficient re-renders
   - Memory usage optimization
   - Browser paint performance

## Troubleshooting

1. **Layout Issues**

   - Check parent container width
   - Verify font size inheritance
   - Test with dynamic content
   - Check line-height calculations

2. **Gradient Problems**

   - Verify background color matching
   - Check dark mode compatibility
   - Test with different content lengths
   - Verify gradient visibility

3. **Expansion Behavior**
   - Verify state management
   - Check transition smoothness
   - Test keyboard interaction
   - Verify mobile behavior
