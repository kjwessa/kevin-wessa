# AspectBoxBeta

A flexible component for maintaining aspect ratios and controlling how content fits within its bounds. Perfect for images, videos, and other media content that needs to maintain specific proportions.

## Features

- Predefined aspect ratios (square, video, portrait, etc.)
- Custom ratio support using numbers or fractions
- Object-fit control for content
- Position control for content alignment
- Lazy loading support for images
- Polymorphic component (can render as any HTML element)

## Usage

```tsx
// Basic usage with predefined ratio
<AspectBoxBeta ratio="square">
  <img src="/image.jpg" alt="Square image" />
</AspectBoxBeta>

// Custom aspect ratio using number
<AspectBoxBeta ratio={16/9}>
  <video src="/video.mp4" />
</AspectBoxBeta>

// Custom aspect ratio using string fraction
<AspectBoxBeta ratio="4/3">
  <img src="/image.jpg" alt="4:3 image" />
</AspectBoxBeta>

// With object-fit and position control
<AspectBoxBeta
  ratio="video"
  fit="cover"
  position="center"
>
  <img src="/hero.jpg" alt="Hero image" />
</AspectBoxBeta>
```

## Props

| Prop       | Type                                                                                                                 | Default    | Description                               |
| ---------- | -------------------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------- |
| `ratio`    | `'square' \| 'video' \| 'portrait' \| 'wide' \| 'ultrawide' \| 'golden' \| 'auto' \| number \| string`               | `'square'` | The aspect ratio to maintain              |
| `fit`      | `'contain' \| 'cover' \| 'fill' \| 'none'`                                                                           | `'cover'`  | How the content should fit within the box |
| `position` | `'center' \| 'top' \| 'bottom' \| 'left' \| 'right' \| 'left-top' \| 'right-top' \| 'left-bottom' \| 'right-bottom'` | `'center'` | Content position within the box           |
| `loading`  | `'eager' \| 'lazy'`                                                                                                  | `'lazy'`   | Loading strategy for images               |
| `as`       | `ElementType`                                                                                                        | `'div'`    | HTML element to render as                 |
| `children` | `ReactNode`                                                                                                          | Required   | Content to maintain aspect ratio for      |

## Predefined Ratios

- `square`: 1:1
- `video`: 16:9
- `portrait`: 3:4
- `wide`: 2:1
- `ultrawide`: 21:9
- `golden`: 1.618:1 (Golden ratio)
- `auto`: Natural aspect ratio of content

## Examples

### Image Gallery

```tsx
<div className="grid grid-cols-3 gap-4">
  {images.map((image) => (
    <AspectBoxBeta key={image.id} ratio="square" fit="cover" position="center">
      <img src={image.url} alt={image.alt} className="rounded-lg" />
    </AspectBoxBeta>
  ))}
</div>
```

### Video Player

```tsx
<AspectBoxBeta ratio="video" fit="contain" className="bg-black">
  <video src="/video.mp4" controls className="h-full w-full" />
</AspectBoxBeta>
```

### Hero Section

```tsx
<AspectBoxBeta ratio="wide" fit="cover" position="center" className="w-full">
  <img src="/hero.jpg" alt="Hero image" className="object-cover" />
  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
    <h1 className="text-4xl text-white">Hero Title</h1>
  </div>
</AspectBoxBeta>
```

## Best Practices

1. **Image Loading**

   - Use `loading="lazy"` for images below the fold
   - Use `loading="eager"` for critical above-the-fold images

2. **Positioning**

   - Use `position="center"` for general purpose images
   - Use specific positions for portrait/landscape images that need focal point control

3. **Object Fit**

   - Use `fit="cover"` for background images and photos
   - Use `fit="contain"` for logos and icons
   - Use `fit="fill"` when the image should stretch

4. **Custom Ratios**
   - Use numeric ratios for precise control: `ratio={1.85}`
   - Use string fractions for readability: `ratio="16/9"`

## Implementation Notes

- The component uses CSS Grid for positioning when `fit` is applied
- Custom ratios are implemented using the `aspect-ratio` CSS property
- Predefined ratios use Tailwind's aspect ratio utilities
- Position and fit controls use Tailwind's object-fit and object-position utilities

## Accessibility Considerations

1. **Images**

   - Always provide meaningful `alt` text for images
   - Use empty `alt=""` for decorative images
   - Consider adding `aria-hidden="true"` for purely decorative background images

2. **Videos**

   - Include captions and transcripts
   - Ensure video controls are keyboard accessible
   - Add `aria-label` for video content when needed

3. **Loading States**

   - Consider adding placeholder content during image load
   - Use skeleton loaders that maintain the aspect ratio
   - Avoid layout shift by maintaining aspect ratio during load

4. **Color Contrast**
   - Ensure sufficient contrast for text overlays
   - Test overlay readability across different background images
   - Consider using backdrop filters for better text legibility

## System Integration

1. **Theme Integration**

   ```tsx
   // Using with system colors
   <AspectBoxBeta className="bg-muted">
     <img src="/image.jpg" alt="Themed image" />
   </AspectBoxBeta>
   ```

2. **Layout Composition**

   ```tsx
   // With Section and Container
   <Section>
     <Container>
       <AspectBoxBeta ratio="wide">
         <img src="/hero.jpg" alt="Hero" />
       </AspectBoxBeta>
     </Container>
   </Section>
   ```

3. **Grid System**
   ```tsx
   // Using with GridBeta
   <GridBeta cols={12}>
     <GridItem colSpan={6}>
       <AspectBoxBeta ratio="square">
         <img src="/image.jpg" alt="Grid image" />
       </AspectBoxBeta>
     </GridItem>
   </GridBeta>
   ```

## Common Use Cases & Recommendations

1. **Hero Sections**

   - Use `ratio="wide"` or `ratio="ultrawide"` for hero images
   - Consider `position="center"` or `position="top"` based on image content
   - Implement progressive loading for large hero images

2. **Product Images**

   ```tsx
   // Product gallery with zoom capability
   <AspectBoxBeta
     ratio="square"
     fit="contain"
     className="bg-background hover:cursor-zoom-in"
     onClick={handleZoom}
   >
     <img src="/product.jpg" alt="Product" />
   </AspectBoxBeta>
   ```

3. **Background Patterns**

   ```tsx
   // Repeating pattern background
   <AspectBoxBeta ratio="square" className="[&>img]:repeat-pattern">
     <img src="/pattern.svg" alt="" aria-hidden="true" className="opacity-10" />
   </AspectBoxBeta>
   ```

4. **Video Backgrounds**
   ```tsx
   // Full-width video background
   <AspectBoxBeta ratio="wide" fit="cover" position="center">
     <video autoPlay muted loop playsInline aria-hidden="true" className="object-cover">
       <source src="/background.mp4" type="video/mp4" />
     </video>
     <div className="from-background/80 absolute inset-0 bg-gradient-to-t" />
   </AspectBoxBeta>
   ```

## Performance Optimization

1. **Image Loading**

   - Use appropriate image sizes
   - Implement responsive images with `srcset`
   - Consider using next/image for Next.js projects

2. **Memory Management**

   - Avoid loading too many high-res images at once
   - Implement virtualization for long lists
   - Use progressive loading for galleries

3. **Animation Considerations**
   - Use `will-change` sparingly
   - Prefer transform animations over dimension changes
   - Consider reduced motion preferences

## Troubleshooting

1. **Layout Shift**

   - Always specify aspect ratio for images when known
   - Use skeleton loaders during image load
   - Set explicit width/height on image elements

2. **Image Quality**

   - Use appropriate `fit` mode for content type
   - Consider higher resolution images for `contain` mode
   - Test across different device pixel ratios

3. **Browser Support**
   - Verify aspect-ratio support
   - Test object-fit behavior in older browsers
   - Check custom ratio parsing across browsers
