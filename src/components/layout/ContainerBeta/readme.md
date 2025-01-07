# ContainerBeta

A foundational layout component that provides consistent max-width constraints and spacing. Essential for maintaining readable content widths and consistent page margins across your application.

## Features

- Predefined size presets
- Responsive padding
- Configurable spacing (top/bottom)
- Individual spacing control
- Polymorphic component (can render as any HTML element)
- Fluid responsive behavior

## Usage

```tsx
// Basic usage
<ContainerBeta>
  <Content />
</ContainerBeta>

// With size and spacing
<ContainerBeta size="xl" spacing="large">
  <Content />
</ContainerBeta>

// With individual spacing control
<ContainerBeta
  spacingTop="large"
  spacingBottom="small"
>
  <Content />
</ContainerBeta>
```

## Props

| Prop            | Type                                                                                   | Default    | Description               |
| --------------- | -------------------------------------------------------------------------------------- | ---------- | ------------------------- |
| `size`          | `'small' \| 'medium' \| 'large' \| 'xl' \| '2xl' \| '3xl' \| 'full'`                   | `'3xl'`    | Maximum width constraint  |
| `spacing`       | `'none' \| 'tiny' \| 'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge' \| 'huge'` | `'medium'` | Vertical padding          |
| `spacingTop`    | Same as `spacing`                                                                      | -          | Override top spacing      |
| `spacingBottom` | Same as `spacing`                                                                      | -          | Override bottom spacing   |
| `as`            | `ElementType`                                                                          | `'div'`    | HTML element to render as |
| `children`      | `ReactNode`                                                                            | Required   | Content to contain        |

## Size Presets

- `small`: 640px
- `medium`: 768px
- `large`: 1024px
- `xl`: 1280px
- `2xl`: 1536px
- `3xl`: 1920px
- `full`: 100%

## Examples

### Page Layout

```tsx
<ContainerBeta size="xl" spacing="large">
  <h1>Page Title</h1>
  <p>Content that maintains a readable width...</p>
</ContainerBeta>
```

### Nested Containers

```tsx
<ContainerBeta size="2xl" spacing="huge">
  <Header />
  <ContainerBeta size="large" spacing="medium">
    <article>
      <h2>Article Title</h2>
      <p>Narrower content width for better readability...</p>
    </article>
  </ContainerBeta>
</ContainerBeta>
```

### Hero Section

```tsx
<ContainerBeta
  size="full"
  spacingTop="huge"
  spacingBottom="large"
  className="from-primary to-secondary bg-gradient-to-r"
>
  <ContainerBeta size="xl">
    <HeroContent />
  </ContainerBeta>
</ContainerBeta>
```

## Best Practices

1. **Size Selection**

   - Use `large` for article content
   - Use `xl` for marketing pages
   - Use `2xl` for wide layouts
   - Use `full` for edge-to-edge sections

2. **Spacing Usage**

   - Use consistent spacing within sections
   - Consider content hierarchy
   - Adjust for mobile viewports
   - Use individual spacing for hero sections

3. **Nesting Patterns**
   - Nest containers for refined control
   - Maintain logical width progression
   - Consider performance impact
   - Keep nesting shallow

## Accessibility Considerations

1. **Content Width**

   - Maintain readable line lengths
   - Consider zoom behavior
   - Test with screen magnification
   - Verify mobile readability

2. **Spacing Impact**
   - Ensure sufficient content separation
   - Consider cognitive load
   - Test with different font sizes
   - Verify focus management

## System Integration

1. **With Section Component**

```tsx
<Section theme="dark">
  <ContainerBeta size="xl" spacing="large">
    <Content />
  </ContainerBeta>
</Section>
```

2. **With Grid System**

```tsx
<ContainerBeta size="2xl">
  <GridBeta cols={12}>
    <GridItem colSpan={8}>
      <MainContent />
    </GridItem>
    <GridItem colSpan={4}>
      <Sidebar />
    </GridItem>
  </GridBeta>
</ContainerBeta>
```

3. **With Stack Layout**

```tsx
<ContainerBeta size="large">
  <Stack gap="large">
    <Header />
    <MainContent />
    <Footer />
  </Stack>
</ContainerBeta>
```

## Common Use Cases

1. **Article Pages**

   - Use `large` size for readability
   - Consistent vertical spacing
   - Consider related content width
   - Maintain hierarchy

2. **Landing Pages**

   - Mix container sizes for variety
   - Full-width hero sections
   - Nested containers for features
   - Responsive spacing

3. **Documentation**

   - Consistent reading width
   - Clear section separation
   - Sidebar considerations
   - Code block handling

4. **Forms**
   - Appropriate form width
   - Clear section spacing
   - Mobile input considerations
   - Error message placement

## Performance Notes

1. **Layout Impact**

   - Minimal DOM depth
   - Efficient margin collapse
   - Predictable reflows
   - CSS containment

2. **Responsive Behavior**
   - Smart padding calculation
   - Minimal media queries
   - Smooth transitions
   - Layout shift prevention

## Troubleshooting

1. **Width Issues**

   - Check parent constraints
   - Verify size props
   - Test overflow behavior
   - Check padding calculation

2. **Spacing Problems**

   - Verify spacing props
   - Check margin collapse
   - Test nested spacing
   - Verify mobile spacing

3. **Responsive Issues**
   - Check viewport behavior
   - Test padding responsiveness
   - Verify breakpoint behavior
   - Check content reflow

## Related Components

- `SectionBeta`: For themed containers
- `CenterBeta`: For centered content
- `GridBeta`: For grid layouts
- `StackBeta`: For vertical layouts
