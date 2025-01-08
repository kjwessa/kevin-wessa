# Gutter

A utility component for managing consistent spacing between elements. Provides a standardized way to add horizontal or vertical space based on the design system's spacing scale.

## Features

- Consistent spacing
- Horizontal and vertical modes
- Responsive spacing
- Mathematical spacing scale
- Zero runtime overhead
- Theme integration

## Usage

```tsx
// Basic usage
<Gutter size="medium" />

// With direction
<Gutter size="large" direction="horizontal" />

// Responsive size
<Gutter size={{ sm: 'small', md: 'medium', lg: 'large' }} />
```

## Props

| Prop        | Type                                         | Default      | Description                 |
| ----------- | -------------------------------------------- | ------------ | --------------------------- |
| `size`      | `SpaceScale \| ResponsiveObject<SpaceScale>` | `'medium'`   | Space size from theme scale |
| `direction` | `'vertical' \| 'horizontal'`                 | `'vertical'` | Direction of spacing        |
| `as`        | `ElementType`                                | `'div'`      | HTML element to render as   |

### SpaceScale Type

```typescript
type SpaceScale = 'none' | 'small' | 'medium' | 'large' | 'xlarge'
```

### ResponsiveObject Type

```typescript
type ResponsiveObject<T> = {
  sm?: T
  md?: T
  lg?: T
  xl?: T
  '2xl'?: T
}
```

## Examples

### Content Spacing

```tsx
<FlowBeta>
  <Section>Content</Section>
  <Gutter size="large" />
  <Section>Content</Section>
</FlowBeta>
```

### Horizontal Spacing

```tsx
<div style={{ display: 'flex' }}>
  <div>Left</div>
  <Gutter size="medium" direction="horizontal" />
  <div>Right</div>
</div>
```

### Responsive Spacing

```tsx
<FlowBeta>
  <Content />
  <Gutter size={{ sm: 'small', md: 'medium', lg: 'large' }} />
  <Content />
</FlowBeta>
```

## Best Practices

1. **Spacing Selection**

   - Use consistent sizes
   - Match content hierarchy
   - Consider rhythm
   - Follow scale

2. **Direction Usage**

   - Choose appropriate axis
   - Consider layout flow
   - Maintain consistency
   - Plan responsively

3. **Implementation**
   - Use with layout components
   - Consider context
   - Plan for nesting
   - Test responsiveness

## Accessibility Considerations

1. **Visual Spacing**

   - Maintain readability
   - Consider zoom states
   - Test different viewports
   - Verify contrast

2. **Content Flow**
   - Preserve semantics
   - Consider reading order
   - Test screen readers
   - Maintain hierarchy

## System Integration

1. **With Flow**

```tsx
<FlowBeta>
  <Content />
  <Gutter size="large" />
  <Content />
</FlowBeta>
```

2. **With Grid**

```tsx
<GridBeta cols={2}>
  <GridItemBeta>
    <Content />
    <Gutter size="medium" />
    <Content />
  </GridItemBeta>
</GridBeta>
```

3. **With Stack**

```tsx
<StackBeta>
  <Content />
  <Gutter size="small" />
  <Content />
</StackBeta>
```

## Common Use Cases

1. **Section Spacing**

   - Between components
   - Content blocks
   - Form groups
   - Layout sections

2. **Component Spacing**

   - Button groups
   - Form fields
   - List items
   - Card content

3. **Layout Spacing**

   - Grid gaps
   - Column spacing
   - Row separation
   - Content blocks

4. **Responsive Spacing**
   - Mobile adjustments
   - Tablet layouts
   - Desktop optimization
   - Viewport adaptation

## Performance Notes

1. **Runtime Impact**

   - Zero JavaScript
   - CSS-only solution
   - No calculations
   - Efficient updates

2. **Style Management**
   - Theme variables
   - Minimal CSS
   - Efficient classes
   - Clean output

## Troubleshooting

1. **Spacing Issues**

   - Check size prop
   - Verify direction
   - Test breakpoints
   - Check context

2. **Layout Problems**

   - Verify parent layout
   - Check display mode
   - Test nesting
   - Validate flow

3. **Responsive Issues**
   - Check breakpoints
   - Test viewports
   - Verify sizes
   - Monitor shifts

## Related Components

- `FlowBeta`: Vertical rhythm
- `StackBeta`: Vertical stacking
- `GridBeta`: Grid layouts
- `ClusterBeta`: Horizontal groups

## Mathematical Integration

1. **Spacing Scale**

   - Mathematical progression
   - Consistent ratios
   - Theme alignment
   - Visual rhythm

2. **Responsive Math**
   - Breakpoint calculations
   - Proportion maintenance
   - Scale adjustments
   - Viewport math

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

2. **Usage with Theme**

```tsx
<Gutter size={theme.spacing.large} />
```
