# FlowBeta

A sophisticated layout component that manages vertical spacing between elements with intelligent rules for different content types. Perfect for long-form content and maintaining consistent vertical rhythm.

## Features

- Smart spacing between elements
- Custom spacing rules per element type
- Text alignment control
- First/last child spacing removal
- Polymorphic component (can render as any HTML element)
- Content-aware spacing

## Usage

```tsx
// Basic usage
<FlowBeta>
  <h2>Heading</h2>
  <p>Paragraph with automatic spacing...</p>
  <ul>
    <li>List item</li>
  </ul>
</FlowBeta>

// With custom spacing
<FlowBeta spacing="large">
  <Content />
</FlowBeta>

// With text alignment
<FlowBeta textAlign="center">
  <Content />
</FlowBeta>
```

## Props

| Prop        | Type                                         | Default    | Description                |
| ----------- | -------------------------------------------- | ---------- | -------------------------- |
| `spacing`   | `'small' \| 'medium' \| 'large' \| 'custom'` | `'custom'` | Space between elements     |
| `textAlign` | `'left' \| 'center' \| 'right'`              | `'left'`   | Text alignment within flow |
| `as`        | `ElementType`                                | `'div'`    | HTML element to render as  |
| `children`  | `ReactNode`                                  | Required   | Content to flow            |

## Custom Spacing Rules

When using `spacing="custom"`, the following rules apply:

```css
[&>*+*]:mt-6        /* Default spacing */
[&>h2]:mt-24        /* Large space before h2 */
[&>h3]:mt-8         /* Medium space before h3 */
[&>h4]:mt-8         /* Medium space before h4 */
[&>blockquote]:mt-8 /* Medium space before blockquotes */
[&>ul]:mt-6         /* Standard space before lists */
[&>ol]:mt-6         /* Standard space before lists */
[&>pre]:mt-8        /* Medium space before code blocks */
[&>figure]:mt-8     /* Medium space before figures */
[&>table]:mt-8      /* Medium space before tables */
```

## Examples

### Article Content

```tsx
<FlowBeta>
  <h1>Article Title</h1>
  <p>Introduction paragraph...</p>
  <h2>First Section</h2>
  <p>Section content...</p>
  <blockquote>Important quote...</blockquote>
  <p>More content...</p>
</FlowBeta>
```

### Rich Text Content

```tsx
<FlowBeta spacing="custom">
  <RichText content={content} />
</FlowBeta>
```

### Form Layout

```tsx
<FlowBeta spacing="medium">
  <FormField>
    <Label>Name</Label>
    <Input />
  </FormField>
  <FormField>
    <Label>Email</Label>
    <Input />
  </FormField>
  <Button>Submit</Button>
</FlowBeta>
```

## Best Practices

1. **Spacing Selection**

   - Use `custom` for long-form content
   - Use `medium` for form layouts
   - Use `large` for major sections
   - Consider content hierarchy

2. **Content Structure**

   - Use semantic HTML elements
   - Maintain heading hierarchy
   - Group related content
   - Consider reading flow

3. **Alignment Usage**
   - Default to `left` for readability
   - Use `center` sparingly
   - Consider language direction
   - Maintain consistency

## Accessibility Considerations

1. **Content Structure**

   - Use proper heading levels
   - Maintain logical flow
   - Consider screen readers
   - Preserve semantic meaning

2. **Visual Rhythm**
   - Ensure readable spacing
   - Consider line height
   - Maintain visual hierarchy
   - Test with zoom levels

## System Integration

1. **With Container**

```tsx
<ContainerBeta size="large">
  <FlowBeta>
    <h1>Page Title</h1>
    <p>Content that maintains proper spacing...</p>
  </FlowBeta>
</ContainerBeta>
```

2. **With Rich Text Editor**

```tsx
<FlowBeta spacing="custom">
  <Editor>
    <EditorContent />
  </Editor>
</FlowBeta>
```

3. **With Card Layout**

```tsx
<Card>
  <FlowBeta spacing="medium">
    <CardTitle>Title</CardTitle>
    <CardDescription>Description...</CardDescription>
    <CardContent>Content...</CardContent>
  </FlowBeta>
</Card>
```

## Common Use Cases

1. **Blog Posts**

   - Long-form content
   - Mixed content types
   - Proper heading spacing
   - Consistent rhythm

2. **Documentation**

   - Technical content
   - Code blocks
   - Nested lists
   - Section spacing

3. **Forms**

   - Field groups
   - Validation messages
   - Action buttons
   - Section breaks

4. **Marketing Content**
   - Feature lists
   - Testimonials
   - Call-to-actions
   - Mixed media

## Performance Notes

1. **DOM Structure**

   - Efficient class application
   - Minimal wrapper elements
   - Smart selector usage
   - Optimized reflows

2. **Style Management**
   - Efficient CSS rules
   - Reduced specificity
   - Predictable spacing
   - Layout stability

## Troubleshooting

1. **Spacing Issues**

   - Check element types
   - Verify custom rules
   - Test nested flows
   - Check margin collapse

2. **Alignment Problems**

   - Check parent context
   - Verify text alignment
   - Test mixed content
   - Check responsive behavior

3. **Content Flow**
   - Verify semantic structure
   - Check heading levels
   - Test content nesting
   - Verify spacing rules

## Related Components

- `StackBeta`: For controlled spacing
- `ContainerBeta`: For width constraints
- `DividerBeta`: For section breaks
- `SpacerBeta`: For manual spacing

## Typography Integration

1. **Vertical Rhythm**

   - Match line height
   - Consider font sizes
   - Maintain scale ratios
   - Use relative units

2. **Content Types**
   - Handle headings properly
   - Style inline elements
   - Manage list spacing
   - Consider block quotes

```

```
