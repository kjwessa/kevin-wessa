# StackBeta

A layout component that creates consistent vertical spacing between elements. Perfect for forms, content sections, and any vertically stacked content where consistent spacing is needed.

## Features

- Vertical spacing control
- Responsive gaps
- Alignment options
- Recursive spacing
- Split support
- Divider options
- Responsive behavior
- Theme integration

## Usage

```tsx
// Basic usage
<StackBeta>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StackBeta>

// With custom spacing
<StackBeta gap="large">
  <Content />
</StackBeta>

// With alignment
<StackBeta align="center">
  <Content />
</StackBeta>
```

## Props

| Prop       | Type                                                   | Default    | Description                |
| ---------- | ------------------------------------------------------ | ---------- | -------------------------- |
| `gap`      | `'none' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'` | Space between items        |
| `align`    | `'start' \| 'center' \| 'end'`                         | `'start'`  | Horizontal alignment       |
| `split`    | `boolean`                                              | `false`    | Add dividers between items |
| `as`       | `ElementType`                                          | `'div'`    | HTML element to render as  |
| `children` | `ReactNode`                                            | Required   | Stack items                |

## Examples

### Form Layout

```tsx
<StackBeta gap="large">
  <FormField>
    <Label>Name</Label>
    <Input type="text" />
  </FormField>
  <FormField>
    <Label>Email</Label>
    <Input type="email" />
  </FormField>
  <Button type="submit">Submit</Button>
</StackBeta>
```

### Content Section

```tsx
<StackBeta gap="xlarge" align="center">
  <h1>Welcome</h1>
  <p>Introduction text</p>
  <Button>Call to Action</Button>
</StackBeta>
```

### List with Dividers

```tsx
<StackBeta gap="medium" split>
  {items.map((item) => (
    <ListItem key={item.id}>{item.content}</ListItem>
  ))}
</StackBeta>
```

## Best Practices

1. **Spacing Selection**

   - Use consistent gaps
   - Consider content type
   - Plan hierarchy
   - Test responsiveness

2. **Alignment Usage**

   - Choose appropriate alignment
   - Consider content width
   - Test different viewports
   - Maintain consistency

3. **Content Structure**
   - Group related items
   - Consider hierarchy
   - Plan responsiveness
   - Test edge cases

## Accessibility Considerations

1. **Content Flow**

   - Logical order
   - Keyboard navigation
   - Focus management
   - Screen reader flow

2. **Visual Structure**
   - Clear hierarchy
   - Consistent spacing
   - Visual relationships
   - Content grouping

## System Integration

1. **With Container**

```tsx
<ContainerBeta>
  <StackBeta gap="large">
    <Content />
  </StackBeta>
</ContainerBeta>
```

2. **With Section**

```tsx
<SectionBeta>
  <StackBeta gap="xlarge">
    <Content />
  </StackBeta>
</SectionBeta>
```

3. **With Flow**

```tsx
<StackBeta gap="large">
  <FlowBeta>
    <Content />
  </FlowBeta>
  <FlowBeta>
    <Content />
  </FlowBeta>
</StackBeta>
```

## Common Use Cases

1. **Form Layouts**

   - Input groups
   - Form sections
   - Settings panels
   - Registration forms

2. **Content Sections**

   - Article content
   - Card content
   - Product details
   - Profile information

3. **List Layouts**

   - Menu items
   - Navigation lists
   - Settings options
   - Feature lists

4. **Interactive Elements**
   - Button groups
   - Action panels
   - Control groups
   - Tool panels

## Performance Notes

1. **Layout Efficiency**

   - Minimal DOM impact
   - Efficient updates
   - Style calculations
   - Paint performance

2. **Style Management**
   - CSS variables
   - Class efficiency
   - Style inheritance
   - Transition handling

## Troubleshooting

1. **Spacing Issues**

   - Check gap values
   - Verify inheritance
   - Test nesting
   - Monitor changes

2. **Alignment Problems**

   - Check content width
   - Verify alignment
   - Test responsiveness
   - Monitor shifts

3. **Divider Issues**
   - Check visibility
   - Verify spacing
   - Test contrast
   - Monitor states

## Related Components

- `FlowBeta`: Content flow
- `DividerBeta`: Line separators
- `ContainerBeta`: Width constraints
- `GridBeta`: Grid layouts

## Theme Integration

1. **Space Scale**

```typescript
const spaceScale = {
  none: '0',
  small: 'var(--space-2)',
  medium: 'var(--space-4)',
  large: 'var(--space-6)',
  xlarge: 'var(--space-8)',
}
```

2. **Divider Theme**

```typescript
const dividerTheme = {
  color: 'var(--color-border)',
  style: 'solid',
  width: '1px',
}
```

## Advanced Features

1. **Recursive Spacing**

   - Nested stacks
   - Space distribution
   - Margin collapse
   - Gap inheritance

2. **Responsive Behavior**
   - Breakpoint gaps
   - Adaptive alignment
   - Dynamic spacing
   - Content reflow
