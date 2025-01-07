# SectionBeta

A foundational layout component that provides consistent section styling and spacing. It manages theme inheritance, background colors, and vertical spacing while supporting various layouts.

## Features

- Theme inheritance and management
- Background color control
- Vertical spacing system
- Independent top/bottom spacing
- Responsive padding
- Semantic structure

## Usage

```tsx
// Basic usage with spacing
<SectionBeta spacing="large">
  <Container>
    <h2>Section Title</h2>
  </Container>
</SectionBeta>

// With independent top/bottom spacing
<SectionBeta spacingTop="large" spacingBottom="small">
  <Container>
    <h2>Asymmetric Spacing</h2>
  </Container>
</SectionBeta>

// Full configuration
<SectionBeta
  theme="dark"
  background="primary"
  spacing="xlarge"
>
  <Container>
    <h2>Complete Example</h2>
  </Container>
</SectionBeta>
```

## Props

| Prop            | Type                                                                                   | Default     | Description               |
| --------------- | -------------------------------------------------------------------------------------- | ----------- | ------------------------- |
| `theme`         | `'light' \| 'dark' \| 'inherit' \| 'invert'`                                           | `'inherit'` | Theme mode                |
| `background`    | `'default' \| 'primary' \| 'secondary' \| 'accent'`                                    | `'default'` | Background color scheme   |
| `spacing`       | `'none' \| 'tiny' \| 'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge' \| 'huge'` | `'medium'`  | Vertical padding (both)   |
| `spacingTop`    | `'none' \| 'tiny' \| 'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge' \| 'huge'` | -           | Top padding only          |
| `spacingBottom` | `'none' \| 'tiny' \| 'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge' \| 'huge'` | -           | Bottom padding only       |
| `as`            | `ElementType`                                                                          | `'section'` | HTML element to render as |
| `children`      | `ReactNode`                                                                            | Required    | Section content           |
| `className`     | `string`                                                                               | -           | Additional CSS classes    |

## Examples

### Basic Section with Spacing

```tsx
<SectionBeta spacing="large">
  <Container>
    <h2>Section Title</h2>
    <p>Section content goes here</p>
  </Container>
</SectionBeta>
```

### Asymmetric Spacing

```tsx
<SectionBeta spacingTop="xlarge" spacingBottom="medium" theme="dark">
  <Container>
    <h2>Hero Section</h2>
    <p>With more space above than below</p>
  </Container>
</SectionBeta>
```

### Complex Layout

```tsx
<SectionBeta theme="dark" background="primary" spacing="huge">
  <Container>
    <GridBeta cols={2}>
      <div>
        <h2>Left Content</h2>
        <p>With maximum spacing</p>
      </div>
      <div>
        <h2>Right Content</h2>
        <p>Aligned with left</p>
      </div>
    </GridBeta>
  </Container>
</SectionBeta>
```

## Best Practices

1. **Theme Usage**

   - Match brand guidelines
   - Consider hierarchy
   - Plan contrast
   - Test accessibility

2. **Spacing Selection**

   - Use consistent spacing
   - Consider content
   - Plan hierarchy
   - Test responsiveness

3. **Background Usage**
   - Choose appropriate styles
   - Consider performance
   - Test contrast
   - Plan responsiveness

## Accessibility Considerations

1. **Color Contrast**

   - Test theme colors
   - Verify text contrast
   - Check interactive elements
   - Monitor patterns

2. **Content Structure**
   - Use semantic HTML
   - Proper headings
   - ARIA landmarks
   - Focus management

## System Integration

1. **With Container**

```tsx
<SectionBeta theme="primary">
  <ContainerBeta>
    <Content />
  </ContainerBeta>
</SectionBeta>
```

2. **With Grid**

```tsx
<SectionBeta theme="secondary">
  <ContainerBeta>
    <GridBeta cols={12}>
      <Content />
    </GridBeta>
  </ContainerBeta>
</SectionBeta>
```

3. **With Flow**

```tsx
<SectionBeta theme="accent">
  <ContainerBeta>
    <FlowBeta>
      <Content />
    </FlowBeta>
  </ContainerBeta>
</SectionBeta>
```

## Common Use Cases

1. **Content Sections**

   - Hero sections
   - Feature blocks
   - About sections
   - Contact areas

2. **Theme Sections**

   - Call to actions
   - Testimonials
   - Statistics
   - Team sections

3. **Background Variants**

   - Pattern sections
   - Gradient blocks
   - Image backgrounds
   - Video sections

4. **Layout Patterns**
   - Full width
   - Contained
   - Split content
   - Overlapping elements

## Performance Notes

1. **Background Handling**

   - Image optimization
   - Pattern efficiency
   - Gradient performance
   - Paint optimization

2. **Theme Management**
   - CSS variables
   - Style efficiency
   - Class management
   - Transition performance

## Troubleshooting

1. **Theme Issues**

   - Check color values
   - Verify inheritance
   - Test contrast
   - Monitor transitions

2. **Layout Problems**

   - Check spacing
   - Verify alignment
   - Test responsiveness
   - Monitor overflow

3. **Background Issues**
   - Check image loading
   - Verify patterns
   - Test gradients
   - Monitor performance

## Related Components

- `ContainerBeta`: Width constraints
- `GridBeta`: Grid layouts
- `FlowBeta`: Vertical rhythm
- `BackgroundBeta`: Background patterns

## Theme Integration

1. **Theme Variables**

```typescript
const sectionTheme = {
  default: {
    background: 'var(--color-background)',
    text: 'var(--color-text)',
  },
  primary: {
    background: 'var(--color-primary)',
    text: 'var(--color-primary-contrast)',
  },
  secondary: {
    background: 'var(--color-secondary)',
    text: 'var(--color-secondary-contrast)',
  },
  accent: {
    background: 'var(--color-accent)',
    text: 'var(--color-accent-contrast)',
  },
}
```

2. **Background Patterns**

```typescript
const backgroundPatterns = {
  none: 'none',
  pattern: 'url(/patterns/section-pattern.svg)',
  gradient: 'linear-gradient(...)',
  image: 'var(--background-image)',
}
```

## Advanced Features

1. **Pattern System**

   - Custom patterns
   - Dynamic generation
   - Responsive patterns
   - Theme integration

2. **Background Effects**
   - Parallax scrolling
   - Animated gradients
   - Interactive patterns
   - Video backgrounds
