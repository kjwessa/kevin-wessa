# AboutIntro Block

A full-width introduction block with rich text content and a grid of items, designed for the About page.

## Features

- Two-column layout (responsive)
- Rich text content with heading support
- Description text
- CTA button with icon
- 3x3 grid of items with semi-transparent backgrounds

## Implementation Details

- Uses `BlockWrapperBeta` for consistent spacing
- Uses `BlockContainerBeta` for width constraints
- Primary-500 background color
- Inverted text colors for light text on dark background
- Responsive layout that stacks on mobile
- Grid items with 10% white background opacity

## Usage

```tsx
<AboutIntro
  mainText={richTextContent}
  description="Description text here"
  cta={{
    text: 'Call to action',
    link: '/some-page',
  }}
  gridItems={[
    { title: 'Item 1', icon: 'icon1' },
    // ... 8 more items
  ]}
/>
```

## Dependencies

- BlockWrapperBeta
- BlockContainerBeta
- RichText component
- Next.js Link
- Tailwind CSS for styling

## Customization

The block uses Tailwind's typography plugin and custom colors:

- prose-xl and prose-lg for text sizing
- prose-invert for light text
- primary-500 for background
- base-50 for text and borders
- white/10 for semi-transparent overlays

## Grid Items

Currently displays titles only. Icon implementation pending:

- 3x3 grid layout
- Rounded corners (16px)
- Semi-transparent white background
- Centered content
