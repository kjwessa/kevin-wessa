# GridBeta

A powerful and flexible grid system component that provides precise control over layout using CSS Grid. Built on mathematical principles to ensure consistent spacing and alignment across your application.

## Features

- Mathematical grid system
- Responsive column control
- Configurable gutters
- Auto-grid support
- Nested grid capability
- Precise spacing control
- Breakpoint-specific layouts
- Grid area support

## Usage

```tsx
// Basic usage
<GridBeta cols={12}>
  <GridItemBeta colSpan={6}>Half width</GridItemBeta>
  <GridItemBeta colSpan={6}>Half width</GridItemBeta>
</GridBeta>

// With responsive columns
<GridBeta cols={{ sm: 4, md: 8, lg: 12 }}>
  <GridItemBeta colSpan={{ sm: 2, md: 4, lg: 6 }}>
    Responsive content
  </GridItemBeta>
</GridBeta>

// With auto-grid
<GridBeta autoGrid={{ min: '250px', max: '1fr' }}>
  <Card />
  <Card />
  <Card />
</GridBeta>
```

## Props

| Prop       | Type                                                   | Default    | Description               |
| ---------- | ------------------------------------------------------ | ---------- | ------------------------- |
| `cols`     | `number \| ResponsiveObject<number>`                   | `12`       | Number of grid columns    |
| `gap`      | `'none' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'` | Space between grid items  |
| `autoGrid` | `{ min: string, max: string }`                         | -          | Auto-grid configuration   |
| `as`       | `ElementType`                                          | `'div'`    | HTML element to render as |
| `children` | `ReactNode`                                            | Required   | Grid items                |

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

### Complex Layout

```tsx
<GridBeta cols={12} gap="large">
  <GridItemBeta colSpan={12}>
    <Header />
  </GridItemBeta>
  <GridItemBeta colSpan={8}>
    <MainContent />
  </GridItemBeta>
  <GridItemBeta colSpan={4}>
    <Sidebar />
  </GridItemBeta>
  <GridItemBeta colSpan={12}>
    <Footer />
  </GridItemBeta>
</GridBeta>
```

### Auto-Grid Gallery

```tsx
<GridBeta
  autoGrid={{
    min: '200px',
    max: '1fr',
  }}
  gap="small"
>
  {images.map((image) => (
    <AspectBoxBeta key={image.id} ratio="square">
      <img src={image.url} alt={image.alt} />
    </AspectBoxBeta>
  ))}
</GridBeta>
```

### Nested Grids

```tsx
<GridBeta cols={12}>
  <GridItemBeta colSpan={8}>
    <GridBeta cols={8} gap="small">
      <GridItemBeta colSpan={4}>Nested content</GridItemBeta>
      <GridItemBeta colSpan={4}>Nested content</GridItemBeta>
    </GridBeta>
  </GridItemBeta>
  <GridItemBeta colSpan={4}>
    <Sidebar />
  </GridItemBeta>
</GridBeta>
```

## Best Practices

1. **Column Selection**

   - Use 12 columns for flexibility
   - Consider content needs
   - Plan for responsiveness
   - Maintain proportions

2. **Gap Management**

   - Match gaps to content
   - Consider hierarchy
   - Maintain rhythm
   - Use consistent spacing

3. **Auto-Grid Usage**
   - Set appropriate minimums
   - Consider content width
   - Test edge cases
   - Plan for reflow

## Accessibility Considerations

1. **Content Order**

   - Maintain logical flow
   - Consider source order
   - Test keyboard navigation
   - Preserve semantics

2. **Responsive Design**
   - Test all breakpoints
   - Verify reflow behavior
   - Check mobile usability
   - Consider zoom states

## System Integration

1. **With Container**

```tsx
<ContainerBeta>
  <GridBeta cols={12}>
    <GridItemBeta colSpan={6}>
      <Content />
    </GridItemBeta>
  </GridBeta>
</ContainerBeta>
```

2. **With Section**

```tsx
<SectionBeta>
  <GridBeta cols={{ sm: 4, md: 8, lg: 12 }}>
    <GridItemBeta colSpan={{ sm: 4, md: 4, lg: 6 }}>
      <Content />
    </GridItemBeta>
  </GridBeta>
</SectionBeta>
```

3. **With Flow**

```tsx
<GridBeta cols={12}>
  <GridItemBeta colSpan={8}>
    <FlowBeta>
      <Content />
    </FlowBeta>
  </GridItemBeta>
</GridBeta>
```

## Common Use Cases

1. **Page Layouts**

   - Main content structure
   - Sidebar arrangements
   - Complex layouts
   - Responsive designs

2. **Component Layouts**

   - Card grids
   - Feature sections
   - Form layouts
   - Media galleries

3. **Content Distribution**

   - Article layouts
   - Product displays
   - Portfolio grids
   - Dashboard layouts

4. **Responsive Patterns**
   - Mobile-first layouts
   - Adaptive content
   - Breakpoint adjustments
   - Content reflow

## Performance Notes

1. **Layout Efficiency**

   - CSS Grid optimization
   - Minimal calculations
   - Efficient reflows
   - Paint performance

2. **Responsive Handling**
   - Smart breakpoints
   - Minimal style duplication
   - Layout shift prevention
   - Smooth transitions

## Troubleshooting

1. **Layout Issues**

   - Check column math
   - Verify gap values
   - Test breakpoints
   - Validate nesting

2. **Responsive Problems**

   - Check breakpoint values
   - Verify content reflow
   - Test edge cases
   - Monitor layout shifts

3. **Integration Issues**
   - Check container context
   - Verify grid items
   - Test nested grids
   - Validate spacing

## Related Components

- `GridItemBeta`: Grid items
- `ContainerBeta`: Width constraints
- `SectionBeta`: Themed sections

## Mathematical Integration

1. **Grid Math**

   - Column calculations
   - Gap computations
   - Breakpoint math
   - Proportion management

2. **Spacing System**
   - Mathematical rhythm
   - Consistent ratios
   - Predictable scaling
   - Grid alignment

## Advanced Features

1. **Grid Areas**

   - Named template areas
   - Complex layouts
   - Responsive areas
   - Layout patterns

2. **Auto-Flow**
   - Dense packing
   - Row/column flow
   - Gap handling
   - Item placement
