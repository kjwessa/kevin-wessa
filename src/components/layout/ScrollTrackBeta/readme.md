# ScrollTrackBeta

A horizontal scrolling component that creates a smooth, responsive scrollable experience. Perfect for image galleries, product showcases, and horizontal scrolling content.

## Features

- Smooth horizontal scrolling
- Touch/swipe support
- Snap points
- Responsive behavior
- Overflow indicators
- Navigation controls
- Keyboard support
- Accessibility focus

## Usage

```tsx
// Basic usage
<ScrollTrackBeta>
  {items.map(item => (
    <Card key={item.id}>
      {item.content}
    </Card>
  ))}
</ScrollTrackBeta>

// With snap points
<ScrollTrackBeta snap="start">
  <Content />
</ScrollTrackBeta>

// With spacing
<ScrollTrackBeta gap="large">
  <Content />
</ScrollTrackBeta>
```

## Props

| Prop       | Type                                                   | Default       | Description               |
| ---------- | ------------------------------------------------------ | ------------- | ------------------------- |
| `snap`     | `'none' \| 'start' \| 'center' \| 'proximity'`         | `'proximity'` | Snap alignment            |
| `gap`      | `'none' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'`    | Space between items       |
| `as`       | `ElementType`                                          | `'div'`       | HTML element to render as |
| `children` | `ReactNode`                                            | Required      | Track items               |

## Examples

### Image Gallery

```tsx
<ScrollTrackBeta snap="center" gap="small">
  {images.map((image) => (
    <AspectBoxBeta key={image.id} ratio="square">
      <img src={image.url} alt={image.alt} loading="lazy" />
    </AspectBoxBeta>
  ))}
</ScrollTrackBeta>
```

### Product Showcase

```tsx
<ScrollTrackBeta snap="start" gap="large">
  {products.map((product) => (
    <Card key={product.id}>
      <ProductImage src={product.image} />
      <ProductInfo>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </ProductInfo>
    </Card>
  ))}
</ScrollTrackBeta>
```

### Navigation Menu

```tsx
<ScrollTrackBeta snap="start" gap="medium">
  {navItems.map((item) => (
    <NavButton key={item.id} href={item.href} active={item.active}>
      {item.label}
    </NavButton>
  ))}
</ScrollTrackBeta>
```

## Best Practices

1. **Content Strategy**

   - Plan item widths
   - Consider viewport
   - Optimize images
   - Test scrolling

2. **Snap Behavior**

   - Choose appropriate points
   - Consider content type
   - Test interaction
   - Plan transitions

3. **Spacing Usage**
   - Match content density
   - Consider overflow
   - Test responsiveness
   - Maintain rhythm

## Accessibility Considerations

1. **Keyboard Navigation**

   - Arrow key support
   - Focus management
   - Tab order
   - Visual indicators

2. **Screen Readers**
   - ARIA labels
   - Role descriptions
   - State announcements
   - Content structure

## System Integration

1. **With Container**

```tsx
<ContainerBeta>
  <ScrollTrackBeta snap="start">
    <Content />
  </ScrollTrackBeta>
</ContainerBeta>
```

2. **With Section**

```tsx
<SectionBeta>
  <ScrollTrackBeta gap="large">
    <Content />
  </ScrollTrackBeta>
</SectionBeta>
```

3. **With AspectBox**

```tsx
<ScrollTrackBeta snap="center">
  {items.map((item) => (
    <AspectBoxBeta key={item.id} ratio={item.ratio}>
      <Content />
    </AspectBoxBeta>
  ))}
</ScrollTrackBeta>
```

## Common Use Cases

1. **Media Galleries**

   - Image carousels
   - Video showcases
   - Portfolio displays
   - Product galleries

2. **Navigation**

   - Tab systems
   - Menu items
   - Category lists
   - Breadcrumbs

3. **Content Showcases**

   - Featured items
   - Related content
   - Testimonials
   - Team members

4. **Interactive Elements**
   - Story viewers
   - Timeline displays
   - Progress indicators
   - Step wizards

## Performance Notes

1. **Scroll Optimization**

   - Smooth scrolling
   - Touch handling
   - Momentum scrolling
   - Paint performance

2. **Content Loading**
   - Lazy loading
   - Progressive loading
   - Resource management
   - Cache strategy

## Troubleshooting

1. **Scroll Issues**

   - Check snap points
   - Verify touch events
   - Test momentum
   - Monitor performance

2. **Layout Problems**

   - Check item widths
   - Verify spacing
   - Test overflow
   - Monitor shifts

3. **Interaction Issues**
   - Test keyboard
   - Verify focus
   - Check touch
   - Monitor events

## Related Components

- `CarouselBeta`: Advanced carousel
- `AspectBoxBeta`: Media containers
- `ContainerBeta`: Width constraints
- `ScrollArea`: Scroll container

## Touch Integration

1. **Gesture Handling**

```tsx
<ScrollTrackBeta
  onSwipe={(direction) => handleSwipe(direction)}
  onDrag={(offset) => handleDrag(offset)}
>
  <Content />
</ScrollTrackBeta>
```

2. **Touch Feedback**

```tsx
<ScrollTrackBeta onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
  <Content />
</ScrollTrackBeta>
```
