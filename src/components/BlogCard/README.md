# BlogCard Component

A reusable card component for displaying blog post previews. Used in the footer and blog listing pages.

## Props

- `category`: string - The category of the blog post
- `title`: string - The title of the blog post
- `description`: string - A brief description or excerpt of the blog post
- `href`: string - The link to the full blog post

## Usage

```tsx
import { BlogCard } from '@/components/BlogCard'

export function MyComponent() {
  return (
    <BlogCard
      category="Category"
      title="A SIDE HUSTLE HELPS YOU PRIORITIZE"
      description="Nothing reveals what truly matters like having no time to waste. The real value isn't the extra money, it's the brutal clarity."
      href="/blog/side-hustle"
    />
  )
}
```

## Styling

The component uses Tailwind CSS for styling and maintains consistent typography and spacing with the rest of the application. The card features:

- Semi-transparent dark background
- Red accent color for titles
- Consistent spacing and typography
- Hover states for interactive elements
