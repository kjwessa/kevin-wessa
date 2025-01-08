# DeckBeta

A layout component for creating stacked card interfaces with configurable offsets and hover interactions. Perfect for creating depth and visual interest in card-based interfaces.

## Features

- Configurable offset spacing
- Interactive hover effects
- Customizable stack direction
- Limit control for visible items
- Automatic height calculation
- Smooth transitions

## Usage

```tsx
// Basic usage
<DeckBeta>
  <Card>First</Card>
  <Card>Second</Card>
  <Card>Third</Card>
</DeckBeta>

// With offset and hover
<DeckBeta offset="loose" hover>
  {cards.map(card => (
    <Card key={card.id}>{card.content}</Card>
  ))}
</DeckBeta>

// With direction and limit
<DeckBeta direction="horizontal" limit={3}>
  {items.map(item => (
    <Item key={item.id}>{item.content}</Item>
  ))}
</DeckBeta>
```

## Props

| Prop        | Type                             | Default      | Description                     |
| ----------- | -------------------------------- | ------------ | ------------------------------- |
| `offset`    | `'tight' \| 'normal' \| 'loose'` | `'normal'`   | Space between stacked items     |
| `limit`     | `number`                         | `undefined`  | Maximum number of visible items |
| `hover`     | `boolean`                        | `false`      | Enable hover interaction        |
| `direction` | `'vertical' \| 'horizontal'`     | `'vertical'` | Stack direction                 |
| `as`        | `ElementType`                    | `'div'`      | HTML element to render as       |
| `children`  | `ReactNode`                      | Required     | Items to stack                  |

## Examples

### Photo Gallery

```tsx
<DeckBeta offset="loose" hover>
  {photos.map((photo) => (
    <AspectBoxBeta key={photo.id} ratio="wide">
      <img src={photo.url} alt={photo.alt} />
    </AspectBoxBeta>
  ))}
</DeckBeta>
```

### Document Stack

```tsx
<DeckBeta offset="tight" limit={5} hover>
  {documents.map((doc) => (
    <Card key={doc.id} className="bg-card shadow-lg">
      <h3>{doc.title}</h3>
      <p>{doc.excerpt}</p>
    </Card>
  ))}
</DeckBeta>
```

### Timeline

```tsx
<DeckBeta direction="horizontal" offset="normal" className="overflow-x-auto">
  {events.map((event) => (
    <TimelineCard key={event.id}>
      <time>{event.date}</time>
      <h4>{event.title}</h4>
    </TimelineCard>
  ))}
</DeckBeta>
```

## Best Practices

1. **Offset Selection**

   - Use `tight` for subtle depth
   - Use `normal` for balanced stacks
   - Use `loose` for dramatic effect
   - Consider content visibility

2. **Hover Interaction**

   - Enable for interactive content
   - Consider touch devices
   - Provide visual feedback
   - Maintain accessibility

3. **Stack Direction**
   - Use `vertical` for traditional stacks
   - Use `horizontal` for timelines
   - Consider overflow behavior
   - Test responsive layouts

## Accessibility Considerations

1. **Keyboard Navigation**

   - Ensure focusable items
   - Maintain tab order
   - Provide keyboard interactions
   - Consider focus indicators

2. **Screen Readers**
   - Use semantic markup
   - Provide context for stacked items
   - Consider aria-hidden for decorative items
   - Test with screen readers

## System Integration

1. **With Card Components**

```tsx
<DeckBeta offset="normal" hover>
  {items.map((item) => (
    <Card key={item.id} variant="interactive">
      <CardContent>{item.content}</CardContent>
    </Card>
  ))}
</DeckBeta>
```

2. **With Container**

```tsx
<ContainerBeta size="large">
  <DeckBeta offset="loose">
    <FeaturedContent />
    <RelatedContent />
  </DeckBeta>
</ContainerBeta>
```

3. **With AspectBox**

```tsx
<DeckBeta offset="normal" hover>
  {images.map((image) => (
    <AspectBoxBeta key={image.id} ratio="square">
      <img src={image.url} alt={image.alt} />
    </AspectBoxBeta>
  ))}
</DeckBeta>
```

## Common Use Cases

1. **Photo Galleries**

   - Use with AspectBox
   - Enable hover interaction
   - Consider loading strategy
   - Implement lazy loading

2. **Document Previews**

   - Limit visible items
   - Show metadata preview
   - Enable quick actions
   - Consider stack order

3. **Timeline Views**

   - Use horizontal direction
   - Handle overflow
   - Consider date markers
   - Implement scrolling

4. **Featured Content**
   - Highlight important items
   - Use loose offset
   - Consider z-index
   - Implement transitions

## Performance Notes

1. **DOM Management**

   - Limit visible items
   - Use efficient transitions
   - Consider memory usage
   - Implement cleanup

2. **Animation Performance**
   - Use transform properties
   - Avoid layout thrashing
   - Consider will-change
   - Monitor frame rate

## Troubleshooting

1. **Layout Issues**

   - Check parent container
   - Verify item dimensions
   - Test overflow handling
   - Check z-index stacking

2. **Animation Problems**

   - Verify transition properties
   - Check transform origin
   - Test browser compatibility
   - Monitor performance

3. **Responsive Behavior**
   - Test different viewports
   - Check mobile interaction
   - Verify offset scaling
   - Test touch behavior

## Related Components

- `CardBeta`: For card content
- `AspectBoxBeta`: For media content
- `StackBeta`: For vertical stacking
- `GridBeta`: For grid layouts
