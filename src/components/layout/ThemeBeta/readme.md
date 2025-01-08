# ThemeBeta

A foundational component that provides theme context and inheritance. It manages theme state and propagation throughout the component tree, allowing for consistent and flexible theming across sections and content. It also handles background colors and text contrast.

## Features

- Theme context management
- Light/dark mode support
- Theme inheritance
- Theme inversion
- Background colors
- Text contrast
- Nested theme support
- Zero runtime overhead
- Semantic theme attributes

## Usage

```tsx
// Basic usage with theme
<ThemeBeta theme="dark">
  <Container>
    <h1>Dark Theme Content</h1>
  </Container>
</ThemeBeta>

// With background color
<ThemeBeta theme="dark" background="primary">
  <Container>
    <h1>Dark Primary Background</h1>
  </Container>
</ThemeBeta>

// Theme inheritance with background
<ThemeBeta theme="dark" background="accent">
  <Container>
    <h1>Dark Accent Background</h1>
  </Container>
  <ThemeBeta theme="light" background="secondary">
    <Container>
      <h1>Light Secondary Background</h1>
    </Container>
  </ThemeBeta>
</ThemeBeta>

// Theme inversion with background
<ThemeBeta theme="dark" background="primary">
  <Container>
    <h1>Dark Primary Background</h1>
  </Container>
  <ThemeBeta theme="invert" background="secondary">
    <Container>
      <h1>Light Secondary Background (Inverted)</h1>
    </Container>
  </ThemeBeta>
</ThemeBeta>
```

## Props

| Prop       | Type                                              | Default   | Description                                 |
| ---------- | ------------------------------------------------- | --------- | ------------------------------------------- |
| theme      | 'light' \| 'dark' \| 'inherit' \| 'invert'        | 'inherit' | The theme mode to apply                     |
| background | 'default' \| 'primary' \| 'secondary' \| 'accent' | 'default' | The background color scheme                 |
| as         | ElementType                                       | 'div'     | Element type to render as                   |
| children   | React.ReactNode                                   | -         | Content to be rendered within theme context |
| className  | string                                            | -         | Additional CSS classes                      |

## Best Practices

1. **Theme Hierarchy**

   - Use `ThemeBeta` at the highest appropriate level
   - Leverage theme inheritance for consistency
   - Use theme inversion sparingly
   - Consider content contrast

2. **Background Usage**

   - Choose semantic background colors
   - Ensure text contrast meets WCAG standards
   - Use consistent background patterns
   - Consider visual hierarchy

3. **Component Structure**

   - Wrap related sections together
   - Keep theme changes logical
   - Maintain semantic structure
   - Consider component boundaries

4. **Theme Usage**
   - Follow brand guidelines
   - Consider accessibility
   - Test color combinations
   - Plan dark mode carefully

## Accessibility Considerations

1. **Color Contrast**

   - Maintain WCAG compliance for all background/text combinations
   - Test all theme combinations
   - Verify text legibility
   - Check interactive elements

2. **Theme Switching**
   - Smooth transitions
   - No content flashing
   - Clear visual changes
   - Consistent behavior

## System Integration

1. **Basic Layout**

```tsx
<ThemeBeta theme="dark" background="primary">
  <Container>
    <Content />
  </Container>
</ThemeBeta>
```

2. **With Layout**

```tsx
<ThemeBeta theme="dark" background="primary">
  <LayoutBeta>
    <Container>
      <Content />
    </Container>
  </LayoutBeta>
</ThemeBeta>
```

3. **With Components**

```tsx
<ThemeBeta theme="dark" background="accent">
  <Card>
    <CardContent>
      <Text>Dark theme with accent background</Text>
    </CardContent>
  </Card>
</ThemeBeta>
```

## Common Use Cases

1. **Page Themes**

   - Full page theming
   - Section backgrounds
   - Content areas
   - Hero sections

2. **Content Blocks**

   - Feature sections with themed backgrounds
   - Call to actions with accent colors
   - Testimonials with contrast
   - Statistics with emphasis

3. **Theme Variations**
   - Brand sections with primary colors
   - Accent blocks for emphasis
   - Highlight areas with secondary colors
   - Focus sections with contrast

## Performance Notes

1. **Theme Management**

   - CSS-only solution
   - No JavaScript overhead
   - Efficient updates
   - Clean DOM structure

2. **Style Application**
   - Uses data attributes
   - Minimal CSS
   - No runtime calculations
   - Predictable inheritance

## Troubleshooting

1. **Theme Issues**

   - Check theme prop values
   - Verify inheritance chain
   - Test theme combinations
   - Monitor transitions

2. **Background Problems**

   - Verify color contrast
   - Check semantic usage
   - Test combinations
   - Monitor performance

3. **Integration Issues**
   - Verify component structure
   - Check theme context
   - Test child components
   - Monitor inheritance

## Related Components

- `ContainerBeta`: Content containment
- `LayoutBeta`: Layout structure
- `CardBeta`: Themed card components
- `ButtonBeta`: Interactive elements

## Theme Integration

1. **Theme Variables**

```css
:root {
  /* Light theme */
  --theme-bg: var(--color-white);
  --theme-fg: var(--color-black);

  /* Background colors */
  --bg-default: var(--color-background);
  --bg-primary: var(--color-card);
  --bg-secondary: var(--color-muted);
  --bg-accent: var(--color-accent);

  /* Dark theme */
  [data-theme='dark'] {
    --theme-bg: var(--color-black);
    --theme-fg: var(--color-white);
  }

  /* Theme inversion */
  [data-theme-invert] {
    --theme-bg: var(--theme-fg);
    --theme-fg: var(--theme-bg);
  }
}
```

2. **Usage with CSS**

```css
.themed-element {
  background-color: var(--theme-bg);
  color: var(--theme-fg);
}

.themed-background {
  background-color: var(--bg-primary);
  color: var(--color-card-foreground);
}
```
