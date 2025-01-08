# Omnia Design System

A systematic approach to building consistent, maintainable web applications with an emphasis on typography, theming, and component architecture.

## Core Principles

1. **Predictable Patterns**: Every component and style follows consistent patterns
2. **Theme-First**: Dark/light themes with inversion capabilities
3. **Typography-Driven**: Comprehensive type system with fluid scaling
4. **Separation of Concerns**: Clear distinction between layout and theming

## Layout Architecture

### Section Component

Sections handle **only**:

- Theme context (`light`, `dark`, `invert`)
- Background variations
- Visual context

## Typography System

Our type system uses fluid typography with clamp() for responsive scaling without breakpoints.

### Type Scale

Each category includes three sizes (`large`, `medium`, `small`) with specific properties:

- Font family assignments
- Fluid size scaling
- Line height
- Letter spacing
- Text transform (for labels)

### Usage Example

## Usage Guidelines

### Theme Context

1. Use `data-theme` attributes for theme switching
2. Use `data-theme-invert` for local theme inversion
3. Theme values cascade predictably

### Spacing

1. Use Container for layout spacing
2. Components should not affect external spacing
3. Use semantic spacing values

### Typography

1. Use semantic type classes
2. Respect the type hierarchy
3. Maintain fluid responsiveness

## Best Practices

1. **Component Creation**

   - One component = one responsibility
   - Consistent prop patterns
   - Self-contained styles

2. **Theme Usage**

   - Use CSS variables for theme values
   - Respect dark/light modes
   - Consider contrast ratios

3. **Layout Structure**

   ```tsx
   <Section theme="dark">
     <Container size="lg" spacing="medium">
       <Component />
     </Container>
   </Section>
   ```

4. **Typography Implementation**
   - Use semantic class names
   - Maintain the type scale
   - Consider readability

## Documentation Standards

When documenting components:

1. **Props Interface**

   ```tsx
   interface Props {
     variant: 'default' | 'bordered' | 'ghost'
     size: 'sm' | 'md' | 'lg'
     // Document each prop
   }
   ```

2. **Usage Examples**

   ```tsx
   // Basic usage
   <Component variant="default" size="md" />

   // With theme context
   <Section theme="dark">
     <Component variant="ghost" />
   </Section>
   ```

3. **Style Patterns**
   - Document CSS custom properties
   - Explain theme interactions
   - Note spacing considerations

## Migration Guide

When moving components between projects:

1. Maintain the same directory structure
2. Copy global styles
3. Ensure theme context
4. Verify typography classes
5. Check spacing patterns
