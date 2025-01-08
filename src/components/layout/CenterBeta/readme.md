# CenterBeta

A versatile centering component that provides fine-grained control over content width, text alignment, and spacing. Perfect for creating balanced, readable layouts with proper typographic measure.

## Features

- Multiple measure presets for optimal reading lengths
- Configurable gutters and spacing
- Text alignment control
- Intrinsic width support
- Polymorphic component (can render as any HTML element)
- Shorthand components for common patterns

## Usage

```tsx
// Basic usage
<CenterBeta>
  <p>Centered content with default settings</p>
</CenterBeta>

// With measure control
<CenterBeta measure="character">
  <article>Long-form content at optimal reading length</article>
</CenterBeta>

// With text alignment
<CenterBeta measure="content" align="center">
  <h1>Centered Headline</h1>
</CenterBeta>

// With gutters and spacing
<CenterBeta gutters="medium" spacing="large">
  <section>Padded content</section>
</CenterBeta>
```

## Props

| Prop        | Type                                                       | Default  | Description                                |
| ----------- | ---------------------------------------------------------- | -------- | ------------------------------------------ |
| `measure`   | `'none' \| 'content' \| 'character' \| 'narrow' \| 'wide'` | `'none'` | Controls the maximum width                 |
| `align`     | `'left' \| 'center' \| 'right'`                            | `'left'` | Text alignment within the centered box     |
| `gutters`   | `'none' \| 'small' \| 'medium' \| 'large'`                 | `'none'` | Horizontal padding on either side          |
| `spacing`   | `'none' \| 'small' \| 'medium' \| 'large' \| 'xlarge'`     | `'none'` | Vertical spacing                           |
| `andText`   | `boolean`                                                  | `false`  | Also center the text within                |
| `intrinsic` | `boolean`                                                  | `false`  | Use intrinsic sizing instead of full width |
| `as`        | `ElementType`                                              | `'div'`  | HTML element to render as                  |
| `children`  | `ReactNode`                                                | Required | Content to center                          |

## Measure Presets

- `none`: Full width of parent
- `content`: Width of content (intrinsic sizing)
- `character`: Optimal reading length (60-65 characters)
- `narrow`: Compact reading length (45 characters)
- `wide`: Extended reading length (75 characters)

## Examples

### Article Layout

```tsx
<CenterBeta measure="character" gutters="medium">
  <h1>Article Title</h1>
  <p>Article content at the perfect reading length...</p>
</CenterBeta>
```

### Card Component

```tsx
<CenterBeta measure="content" align="center" className="bg-card rounded-lg p-6 shadow-md">
  <img src="/icon.svg" alt="Feature icon" className="h-12 w-12" />
  <h3 className="mt-4">Feature Title</h3>
  <p className="text-muted-foreground mt-2">Feature description...</p>
</CenterBeta>
```

### Section Header

```tsx
<CenterBeta measure="narrow" align="center" spacing="large" className="max-w-[65ch]">
  <h2 className="text-3xl font-bold">Section Title</h2>
  <p className="text-muted-foreground">Section description that's easy to read...</p>
</CenterBeta>
```

## Shorthand Components

The component exports two additional components for common patterns:

### TextCenter

```tsx
// Centers content with optimal reading length
<TextCenter>
  <p>Perfectly measured text content...</p>
</TextCenter>
```

### ContentCenter

```tsx
// Centers content based on its intrinsic size
<ContentCenter>
  <div className="bg-muted rounded p-4">
    <p>Content-based width...</p>
  </div>
</ContentCenter>
```

## Best Practices

1. **Measure Selection**

   - Use `character` for long-form text content
   - Use `content` for UI components and cards
   - Use `none` for full-width containers
   - Use `narrow` for focused content
   - Use `wide` for content with supporting elements

2. **Spacing**

   - Use consistent gutters within a section
   - Match spacing to your grid system
   - Consider mobile spacing carefully
   - Use larger spacing for section breaks

3. **Alignment**
   - Default to `left` for most text content
   - Use `center` for headlines and short content
   - Consider reading direction support
   - Maintain consistent alignment within sections

## Accessibility Considerations

1. **Text Width**

   - Keep line lengths readable (45-75 characters)
   - Consider dyslexic users (prefer shorter lines)
   - Maintain sufficient text size
   - Ensure proper contrast

2. **Responsive Behavior**
   - Adjust measures for different viewports
   - Maintain readable text at all sizes
   - Consider touch targets on mobile
   - Test with zoom levels

## System Integration

1. **With Section Component**

```tsx
<Section>
  <CenterBeta measure="character" gutters="medium">
    <h2>Section Title</h2>
    <p>Section content...</p>
  </CenterBeta>
</Section>
```

2. **With Grid System**

```tsx
<GridBeta>
  <GridItem colSpan={8} colStart={3}>
    <CenterBeta measure="character">
      <p>Grid-aligned content...</p>
    </CenterBeta>
  </GridItem>
</GridBeta>
```

3. **With Stack Component**

```tsx
<CenterBeta measure="character">
  <Stack gap={4}>
    <h1>Title</h1>
    <p>Content...</p>
    <button>Action</button>
  </Stack>
</CenterBeta>
```

## Common Use Cases

1. **Article Layout**

   - Use `measure="character"` for body text
   - Consider `gutters` for mobile padding
   - Use consistent vertical spacing

2. **Marketing Pages**

   - Use `measure="content"` for feature sections
   - Center important headlines
   - Maintain visual hierarchy

3. **Forms**

   - Use `measure="narrow"` for focus
   - Keep labels left-aligned
   - Consider mobile input sizing

4. **Cards and UI Components**
   - Use `intrinsic` for natural sizing
   - Consider content-based centering
   - Maintain consistent padding

## Performance Notes

1. **Layout Performance**

   - Avoid unnecessary nesting
   - Use appropriate semantic elements
   - Consider content reflow on resize
   - Monitor layout shifts (CLS)

2. **Responsive Behavior**
   - Use fluid measurements when possible
   - Avoid fixed widths on mobile
   - Test performance across breakpoints

## Troubleshooting

1. **Width Issues**

   - Check parent container constraints
   - Verify measure settings
   - Test intrinsic sizing behavior
   - Check for conflicting styles

2. **Alignment Problems**

   - Verify parent layout context
   - Check flex/grid interactions
   - Test RTL layout support
   - Verify responsive behavior

3. **Spacing Inconsistencies**
   - Check for margin collapse
   - Verify spacing props
   - Test nested components
   - Check mobile layout
