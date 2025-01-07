# GridItemBeta

A companion component to GridBeta that provides precise control over grid item placement and behavior. Enables fine-grained control over column spans, starting positions, and alignment within the grid system.

## Features

- Column span control
- Starting position control
- Row span support
- Alignment options
- Polymorphic component (can render as any HTML element)
- Breakout support

## Usage

```tsx
// Basic usage
<GridBeta cols={12}>
  <GridItemBeta colSpan={6}>
    Half width content
  </GridItemBeta>
</GridBeta>

// With position control
<GridBeta cols={12}>
  <GridItemBeta colStart={2} colSpan={10}>
    Offset content
  </GridItemBeta>
</GridBeta>

// With row control
<GridBeta cols={12}>
  <GridItemBeta colSpan={6} rowSpan={2}>
    Tall content
  </GridItemBeta>
</GridBeta>
```

## Props

| Prop       | Type                                                          | Default  | Description                |
| ---------- | ------------------------------------------------------------- | -------- | -------------------------- |
| `colSpan`  | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12` | -        | Number of columns to span  |
| `colStart` | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12` | -        | Starting column            |
| `rowSpan`  | `number`                                                      | -        | Number of rows to span     |
| `rowStart` | `number`                                                      | -        | Starting row               |
| `align`    | `'start' \| 'center' \| 'end' \| 'stretch'`                   | -        | Vertical alignment in cell |
| `as`       | `ElementType`                                                 | `'div'`  | HTML element to render as  |
| `children` | `ReactNode`                                                   | Required | Content to render          |

## Examples

### Complex Layout

```tsx
<GridBeta cols={12}>
  <GridItemBeta colSpan={8}>
    <MainContent />
  </GridItemBeta>
  <GridItemBeta colSpan={4} align="start">
    <Sidebar />
  </GridItemBeta>
  <GridItemBeta colSpan={12}>
    <FullWidth />
  </GridItemBeta>
</GridBeta>
```

### Offset Pattern

```tsx
<GridBeta cols={12}>
  <GridItemBeta colStart={2} colSpan={10}>
    <Content />
  </GridItemBeta>
  <GridItemBeta colStart={3} colSpan={8}>
    <NarrowerContent />
  </GridItemBeta>
</GridBeta>
```

### Grid Areas

```tsx
<GridBeta cols={12}>
  <GridItemBeta colSpan={12} rowSpan={2}>
    <Header />
  </GridItemBeta>
  <GridItemBeta colSpan={8}>
    <MainContent />
  </GridItemBeta>
  <GridItemBeta colSpan={4} rowSpan={2}>
    <Sidebar />
  </GridItemBeta>
  <GridItemBeta colSpan={8}>
    <RelatedContent />
  </GridItemBeta>
</GridBeta>
```

## Best Practices

1. **Column Spans**

   - Use logical divisions
   - Consider content width
   - Plan for responsiveness
   - Maintain proportions

2. **Positioning**

   - Use meaningful offsets
   - Consider reading order
   - Plan for reflow
   - Maintain hierarchy

3. **Row Control**
   - Use sparingly
   - Consider content height
   - Plan for variable content
   - Test edge cases

## Accessibility Considerations

1. **Content Order**

   - Maintain logical flow
   - Consider source order
   - Test keyboard navigation
   - Preserve semantics

2. **Visual Alignment**
   - Ensure clear relationships
   - Test with zoom levels
   - Consider text resize
   - Verify contrast

## System Integration

1. **With AspectBox**

```tsx
<GridItemBeta colSpan={6}>
  <AspectBoxBeta ratio="wide">
    <img src="/image.jpg" alt="Wide image" />
  </AspectBoxBeta>
</GridItemBeta>
```

2. **With Flow**

```tsx
<GridItemBeta colSpan={8}>
  <FlowBeta>
    <h2>Section Title</h2>
    <p>Content...</p>
  </FlowBeta>
</GridItemBeta>
```

3. **With Card**

```tsx
<GridItemBeta colSpan={4}>
  <Card>
    <CardContent>Card content...</CardContent>
  </Card>
</GridItemBeta>
```

## Common Use Cases

1. **Content Layout**

   - Main content areas
   - Sidebars
   - Full-width sections
   - Nested grids

2. **Media Placement**

   - Image galleries
   - Video embeds
   - Background elements
   - Hero sections

3. **Form Layout**

   - Input groups
   - Field alignment
   - Button placement
   - Validation messages

4. **Component Layout**
   - Card grids
   - Feature sections
   - Testimonial grids
   - Portfolio layouts

## Performance Notes

1. **Layout Impact**

   - Efficient span calculation
   - Minimal style generation
   - Optimized reflows
   - Paint performance

2. **Responsive Behavior**
   - Smart breakpoint handling
   - Minimal style duplication
   - Layout shift prevention
   - Smooth transitions

## Troubleshooting

1. **Span Issues**

   - Verify column count
   - Check span values
   - Test breakpoints
   - Verify calculations

2. **Alignment Problems**

   - Check grid context
   - Verify align props
   - Test content height
   - Check nested items

3. **Position Issues**
   - Verify start positions
   - Check overlaps
   - Test row spans
   - Verify grid lines

## Related Components

- `GridBeta`: Parent grid system
- `ContainerBeta`: Width constraints
- `AspectBoxBeta`: Media containers

## Mathematical Integration

1. **Column Math**

   - Respects grid variables
   - Maintains proportions
   - Calculates gutters
   - Aligns to grid

2. **Positioning**
   - Grid-line alignment
   - Gutter compensation
   - Margin calculations
   - Offset handling
