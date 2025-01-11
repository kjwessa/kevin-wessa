# FAQ Block

A block component that displays frequently asked questions in an accordion layout. Automatically fetches and displays all FAQs from the CMS.

## Features

- Automatic FAQ fetching from CMS
- Accordion-based display for Q&A content
- Configurable section title
- Loading state handling
- Responsive layout with centered content
- Maximum width container for better readability

## Props

| Prop        | Type       | Required | Description                     |
| ----------- | ---------- | -------- | ------------------------------- |
| `title`     | string     | Yes      | The section heading text        |
| `blockType` | 'faqBlock' | Yes      | Identifies this as an FAQ Block |

## Example Usage

```tsx
<FAQBlock blockType="faqBlock" title="Frequently Asked Questions" />
```

## CMS Configuration

The block allows content editors to:

1. Set a custom section title (with default provided)
2. FAQs are automatically pulled from the FAQ collection
3. No manual FAQ selection needed - displays all published FAQs

## Styling

- Centered title with display-small size
- Maximum width container (48rem/3xl) for content
- Vertical spacing between title and accordion
- Uses Accordion component for interactive Q&A display
