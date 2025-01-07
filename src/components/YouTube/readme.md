# YouTube Component

A React component for embedding YouTube videos with responsive behavior and consistent styling.

## Features

- Responsive video container with 16:9 aspect ratio
- Automatic iframe embedding
- Shadow effect for visual depth
- Consistent spacing with margin controls
- TypeScript support
- Accessibility-friendly with title attribute

## Usage

```tsx
import { YouTube } from '@/components'

// Basic usage
;<YouTube id="dQw4w9WgXcQ" title="Never Gonna Give You Up" />
```

## Props

| Prop    | Type     | Required | Description                          |
| ------- | -------- | -------- | ------------------------------------ |
| `id`    | `string` | Yes      | YouTube video ID                     |
| `title` | `string` | Yes      | Accessible title for the video frame |

## Examples

### Basic Implementation

```tsx
<YouTube id="dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" />
```

### Within Content Section

```tsx
<Section>
  <Container>
    <YouTube id="dQw4w9WgXcQ" title="Featured Video" />
  </Container>
</Section>
```

## Best Practices

1. **Accessibility**

   - Always provide meaningful titles
   - Consider autoplay implications
   - Ensure keyboard navigation support

2. **Performance**

   - Load videos only when needed
   - Consider lazy loading for multiple videos
   - Use appropriate video quality settings

3. **User Experience**
   - Place videos in appropriate context
   - Consider mobile viewing experience
   - Maintain consistent spacing

## Technical Details

### Styling

The component uses Tailwind CSS classes for:

- Responsive container (`pt-[56.25%]`)
- Shadow effects (`shadow-[0_0_150px_rgba(0,0,0,0.13)]`)
- Margin control (`mb-8 mt-8`)
- Absolute positioning for iframe
- Full-width and height coverage

### Iframe Configuration

```tsx
<iframe
  src={`https://www.youtube.com/embed/${id}`}
  title={title}
  frameBorder="0"
  allow="autoplay;"
  allowFullScreen
/>
```

## Integration Examples

### With Rich Text Content

```tsx
<RichText>
  <h2>Featured Video</h2>
  <p>Check out our latest tutorial:</p>
  <YouTube id="tutorial123" title="How to Get Started" />
</RichText>
```

### In Grid Layout

```tsx
<GridBeta>
  <GridItemBeta>
    <YouTube id="video1" title="First Video" />
  </GridItemBeta>
  <GridItemBeta>
    <YouTube id="video2" title="Second Video" />
  </GridItemBeta>
</GridBeta>
```

## Common Use Cases

1. **Content Enhancement**

   - Tutorial videos
   - Product demonstrations
   - Testimonials
   - Event recordings

2. **Marketing**

   - Promotional videos
   - Brand stories
   - Campaign content
   - Customer testimonials

3. **Education**
   - Course content
   - How-to guides
   - Explanatory videos
   - Webinar recordings

## Troubleshooting

### Common Issues

1. **Video Not Loading**

   - Verify the video ID is correct
   - Check if video is public or unlisted
   - Ensure proper internet connectivity

2. **Responsive Issues**

   - Container should not have conflicting styles
   - Maintain parent element width
   - Check for CSS conflicts

3. **Performance**
   - Consider using `loading="lazy"`
   - Optimize surrounding content
   - Monitor network requests

## Security Considerations

1. **Content Security Policy (CSP)**

   - Allow YouTube domain in frame-src
   - Configure appropriate security headers
   - Monitor for suspicious activity

2. **User Privacy**
   - Consider GDPR implications
   - Implement cookie consent if needed
   - Respect user privacy preferences

## Future Enhancements

Potential improvements to consider:

1. **Additional Features**

   - Custom player controls
   - Playlist support
   - Start time parameter
   - Custom thumbnails

2. **Performance Optimizations**

   - Lazy loading implementation
   - Placeholder images
   - Loading states

3. **Analytics Integration**
   - View tracking
   - Engagement metrics
   - Performance monitoring
