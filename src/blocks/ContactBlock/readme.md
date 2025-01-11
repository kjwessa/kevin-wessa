# Contact Block

A block component that combines a title with a form in a card layout. Designed for contact sections and form-based interactions.

## Features

- Card-based layout with responsive grid
- Configurable title text
- Integration with Form Builder plugin
- Two-column layout on desktop, stacked on mobile
- Themed background and text colors

## Props

| Prop        | Type           | Required | Description                                   |
| ----------- | -------------- | -------- | --------------------------------------------- |
| `title`     | string         | Yes      | The main heading text for the contact section |
| `form`      | Form           | Yes      | A form object from the Form Builder plugin    |
| `blockType` | 'contactBlock' | Yes      | Identifies this as a Contact Block            |

## Example Usage

```tsx
<ContactBlock
  blockType="contactBlock"
  title="IF YOU'RE A COOL HUMAN, I'D LOVE TO HEAR FROM YOU."
  form={selectedForm}
/>
```

## CMS Configuration

The block allows content editors to:

1. Set a custom title (with default provided)
2. Select a form from available forms in the CMS
3. Maintain consistent styling while customizing content

## Styling

- Uses card background and foreground colors from theme
- Responsive padding and grid layout
- Primary color for title text
- Rounded corners for card container
