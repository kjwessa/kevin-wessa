# Media

A versatile media component that handles both images and videos with a unified interface. Built with Next.js Image optimization and accessibility in mind.

## Features

- Unified media handling
- Image optimization
- Video support
- Responsive sizing
- Lazy loading
- Priority loading
- Custom containers
- Accessibility support

## Usage

```tsx
// Basic image usage
<Media
  resource={mediaResource}
  alt="Description of the image"
/>

// With priority loading
<Media
  resource={heroImage}
  priority
  alt="Hero section image"
/>

// Video media
<Media
  resource={videoResource}
  videoClassName="custom-video"
/>

// With custom container
<Media
  resource={mediaResource}
  htmlElement="section"
  className="media-container"
/>
```

## Props

| Prop             | Type                                                | Default | Description             |
| ---------------- | --------------------------------------------------- | ------- | ----------------------- |
| `resource`       | `MediaType \| string \| number`                     | -       | Payload media resource  |
| `src`            | `StaticImageData`                                   | -       | Static media source     |
| `alt`            | `string`                                            | -       | Alt text for images     |
| `className`      | `string`                                            | -       | Container class         |
| `imgClassName`   | `string`                                            | -       | Image element class     |
| `videoClassName` | `string`                                            | -       | Video element class     |
| `htmlElement`    | `ElementType \| null`                               | `'div'` | Container element type  |
| `fill`           | `boolean`                                           | `false` | Next.js Image fill mode |
| `priority`       | `boolean`                                           | `false` | Priority loading        |
| `size`           | `string`                                            | -       | Next.js Image size      |
| `onClick`        | `() => void`                                        | -       | Click handler           |
| `onLoad`         | `() => void`                                        | -       | Load completion handler |
| `ref`            | `Ref<HTMLImageElement \| HTMLVideoElement \| null>` | -       | Element reference       |

## Examples

### Hero Image

```tsx
<Media
  resource={heroImage}
  priority
  fill
  className="hero-container"
  imgClassName="hero-image"
  alt="Hero section background"
/>
```

### Video Player

```tsx
<Media
  resource={videoResource}
  videoClassName="video-player"
  htmlElement="section"
  className="video-container"
/>
```

### Gallery Image

```tsx
<Media
  resource={galleryImage}
  size="(max-width: 768px) 100vw, 50vw"
  className="gallery-item"
  onClick={openLightbox}
/>
```

## Best Practices

1. **Usage**

   - Descriptive alt text
   - Appropriate sizing
   - Lazy loading
   - Priority loading

2. **Accessibility**

   - Alt text
   - ARIA labels
   - Focus states
   - Keyboard control

3. **Performance**
   - Image optimization
   - Lazy loading
   - Proper sizing
   - Format selection

## Accessibility

1. **Images**

   - Alt text
   - Role attributes
   - ARIA labels
   - Empty alt for decorative

2. **Videos**

   - Captions
   - Controls
   - Transcripts
   - Audio descriptions

3. **Interaction**
   - Keyboard control
   - Focus management
   - Screen readers
   - Media controls

## Customization

1. **Container Styles**

```tsx
<Media htmlElement="article" className="custom-container" imgClassName="custom-image" />
```

2. **Video Player**

```tsx
<Media resource={video} videoClassName="custom-player" className="player-wrapper" />
```

## Common Use Cases

1. **Images**

   - Hero sections
   - Galleries
   - Thumbnails
   - Backgrounds

2. **Videos**

   - Product demos
   - Background videos
   - Media players
   - Tutorials

3. **Mixed Media**
   - Article content
   - Product displays
   - Media galleries
   - Rich content

## States

1. **Loading State**

```tsx
<Media resource={image} onLoad={() => setLoading(false)} className={loading ? 'loading' : ''} />
```

2. **Error State**

```tsx
<Media resource={image} onError={() => setError(true)} className={error ? 'error' : ''} />
```

## Integration

1. **With Payload CMS**

```tsx
<Media resource={payload.media} size="(max-width: 768px) 100vw, 33vw" alt={payload.alt} />
```

2. **With Next.js**

```tsx
<Media src={require('./image.jpg')} priority={isHero} fill={isBackground} />
```

## Animation

1. **Fade In**

```css
.media-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

2. **Loading Skeleton**

```css
.media-loading {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.6;
  }
}
```

## Theme Integration

1. **Variables**

```css
.media {
  --media-radius: var(--radius-md);
  --media-shadow: var(--shadow-sm);
  --media-border: var(--border-width);
  --media-aspect: 16 / 9;
}
```

2. **Dark Mode**

```css
.dark .media {
  --media-bg: var(--color-gray-900);
  --media-border-color: var(--color-gray-800);
}
```

## Responsive Configuration

```tsx
<Media
  resource={image}
  size={{
    base: '100vw',
    md: '50vw',
    lg: '33vw',
  }}
  className="responsive-media"
/>
```

## Error Handling

```tsx
<Media
  resource={image}
  onError={(e) => {
    e.currentTarget.src = '/fallback.jpg'
    console.error('Media load failed')
  }}
  alt="With fallback handling"
/>
```
