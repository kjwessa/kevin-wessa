# CalloutText Block

A centered text block with optional attribution, designed for highlighting important quotes or statements.

## Features

- Large, centered rich text content
- Optional attribution with decorative star element
- Consistent spacing using BlockWrapperBeta
- Responsive layout with BlockContainerBeta

## Implementation Details

- Uses `BlockWrapperBeta` for consistent vertical spacing
- Uses `BlockContainerBeta` for width constraints
- Rich text content with typography styles
- Attribution section with star icon using SVG
- Text colors using base-500 for attribution
- Primary-500 color for star icon

## Usage

```tsx
<CalloutText text={richTextContent} attribution="Optional Attribution" />
```

## Dependencies

- BlockWrapperBeta
- BlockContainerBeta
- RichText component
- Tailwind CSS for styling

## Customization

The block uses Tailwind's typography plugin for rich text styling and can be customized through:

- prose-xl class for text size
- text-base-500 for attribution color
- text-primary-500 for star icon color
