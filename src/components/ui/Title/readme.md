# Title

A heading component that provides consistent typography for section titles and headings. Built with accessibility and semantic HTML in mind.

## Features

- Multiple levels
- Semantic HTML
- Color variants
- Size options
- Alignment
- Responsive
- Decorative elements
- Rich text support

## Usage

```tsx
// Basic usage
<Title>Page Title</Title>

// With level
<Title level={2}>
  Section Title
</Title>

// With color
<Title color="primary">
  Colored Title
</Title>

// With size
<Title size="lg">
  Large Title
</Title>

// With alignment
<Title align="center">
  Centered Title
</Title>
```

## Props

| Prop        | Type                                               | Default     | Description            |
| ----------- | -------------------------------------------------- | ----------- | ---------------------- |
| `level`     | `1 \| 2 \| 3 \| 4 \| 5 \| 6`                       | `1`         | Heading level          |
| `size`      | `'sm' \| 'base' \| 'lg' \| 'xl' \| '2xl' \| '3xl'` | `'xl'`      | Title size             |
| `color`     | `'default' \| 'primary' \| 'muted' \| 'inverted'`  | `'default'` | Title color            |
| `align`     | `'left' \| 'center' \| 'right'`                    | `'left'`    | Text alignment         |
| `weight`    | `'normal' \| 'medium' \| 'semibold' \| 'bold'`     | `'bold'`    | Font weight            |
| `className` | `string`                                           | -           | Additional CSS classes |
| `as`        | `ElementType`                                      | -           | Override HTML element  |

## Examples

### Section Title

```tsx
<Title level={2} size="2xl" color="primary">
  Featured Products
</Title>
```

### Decorative Title

```tsx
<Title className="with-decoration" align="center">
  <span className="decoration" />
  Our Services
  <span className="decoration" />
</Title>
```

### Responsive Title

```tsx
<Title
  size={{
    base: 'lg',
    md: 'xl',
    lg: '2xl',
  }}
>
  Responsive Title
</Title>
```

## Best Practices

1. **Usage**

   - Semantic levels
   - Clear hierarchy
   - Consistent styling
   - Proper spacing

2. **Accessibility**

   - Heading structure
   - Color contrast
   - Font sizing
   - Screen readers

3. **Responsive**
   - Mobile first
   - Fluid sizing
   - Line height
   - Word breaks

## Accessibility

1. **Semantics**

   - Proper heading levels
   - Sequential order
   - ARIA landmarks
   - Document outline

2. **Visual**

   - Contrast ratios
   - Font scaling
   - Line spacing
   - Word spacing

3. **Screen Readers**
   - Heading navigation
   - Level announcement
   - Content structure
   - Skip links

## Customization

1. **With Decoration**

```tsx
<Title className="decorated-title">
  <span className="title-decoration left" />
  Special Title
  <span className="title-decoration right" />
</Title>
```

2. **With Icon**

```tsx
<Title className="flex items-center gap-2">
  <Icon className="title-icon" />
  <span>Title with Icon</span>
</Title>
```

## Common Use Cases

1. **Page Structure**

   - Page titles
   - Section headers
   - Content dividers
   - Group labels

2. **UI Elements**

   - Card headers
   - Modal titles
   - Panel headers
   - Form sections

3. **Content Types**
   - Article titles
   - Blog posts
   - Documentation
   - Marketing

## States

1. **Interactive Title**

```tsx
<Title as="button" className="hover:text-primary">
  Clickable Title
</Title>
```

2. **Animated Title**

```tsx
<Title className="animate-in">Fade In Title</Title>
```

## Integration

1. **With Layout**

```tsx
<Section>
  <Container>
    <Title level={2}>Section Title</Title>
    <Text>Section content</Text>
  </Container>
</Section>
```

2. **With Rich Text**

```tsx
<Title
  dangerouslySetInnerHTML={{
    __html: richTextTitle,
  }}
/>
```

## Animation

1. **Fade In**

```css
.title-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

2. **Highlight**

```css
.title-highlight {
  animation: highlightText 1s ease-out;
}

@keyframes highlightText {
  0% {
    background-size: 0% 100%;
  }
  100% {
    background-size: 100% 100%;
  }
}
```

## Theme Integration

1. **Variables**

```css
.title {
  --title-font: var(--font-heading);
  --title-color: var(--color-gray-900);
  --title-primary: var(--color-primary);
  --title-muted: var(--color-gray-600);
}
```

2. **Dark Mode**

```css
.dark .title {
  --title-color: var(--color-gray-50);
  --title-primary: var(--color-primary-light);
  --title-muted: var(--color-gray-400);
}
```

## Typography Scale

```css
.title-scale {
  --title-sm: clamp(1.25rem, 4vw, 1.5rem);
  --title-base: clamp(1.5rem, 5vw, 2rem);
  --title-lg: clamp(2rem, 6vw, 2.5rem);
  --title-xl: clamp(2.5rem, 7vw, 3rem);
  --title-2xl: clamp(3rem, 8vw, 4rem);
  --title-3xl: clamp(4rem, 10vw, 5rem);
}
```

## Responsive Behavior

```tsx
<Title
  level={1}
  size={{
    base: 'lg',
    md: 'xl',
    lg: '2xl',
  }}
  align={{
    base: 'left',
    md: 'center',
  }}
  className="mx-auto md:max-w-[20ch]"
>
  Fully Responsive Title with Dynamic Properties
</Title>
```

## Changelog

### January 2024

- **Breaking**: Removed `font` variant from Title component. Font families are now controlled exclusively through the size variants (e.g., `title-large`, `headline-large`, etc.) which have their font families defined in CSS variables.

## Questions/Problems

### Font Inheritance

- Font family variables don't inherit naturally like other text properties (size, line-height, letter-spacing)
- Requires `[&]` selector for proper application
- Moving `font-secondary` to the base class in `cva` works as a workaround
- Still investigating why font-family behaves differently from other text properties in Tailwind 4

## Changelog

### [0.1.1] - 2024-01-12

#### Changed

- Moved `[&]:font-secondary` from individual size variants to base class in `cva`
- Simplified font handling while maintaining proper inheritance
- Font family is now consistently applied across all variants

### [0.1.0] - Initial Version

- Basic Title component implementation
- Support for various text sizes and styles
- Configurable element types (h1-h6, p)
- Customizable weight, leading, tracking, and text wrapping
