# FourCards Block

A full-width block that displays four cards in a row, each with a large number, title, and description. This block is designed for displaying sequential or related content in a visually appealing way.

## Features

- Four equal-width cards (420px each)
- Large number display (01-04)
- Title and description for each card
- Consistent spacing and layout
- Red background (`#B43435`)
- Light beige text (`#F5E2CA`)
- Vertical borders between cards

## Fields

### Cards Array

- Required
- Exactly 4 cards
- Each card contains:
  - `number`: Text field for the large number display (e.g., "01")
  - `title`: Text field for the card's heading
  - `description`: Textarea field for the card's content

## Example Usage

```tsx
<FourCards
  cards={[
    {
      number: '01',
      title: 'Tempus',
      description:
        'Vitae leo vitae id vel dictum tincidunt felis nunc. In scelerisque pellentesque sem.',
    },
    {
      number: '02',
      title: 'Maecenas',
      description:
        'Mattis interdum nullam viverra etiam gravida ornare aliquet. Pulvinar nibh a scelerisque.',
    },
    {
      number: '03',
      title: 'Tempor',
      description:
        'Viverra augue mi cras nam id semper. Enim consectetur in pharetra ut fames. Nibh.',
    },
    {
      number: '04',
      title: 'Convallis sit',
      description:
        'Donec nulla odio vitae turpis pellentesque porttitor erat. Curabitur quis leo id sagittis.',
    },
  ]}
/>
```

## Styling

- Background color: `#B43435`
- Text color: `#F5E2CA`
- Card width: 420px
- Vertical borders: 1px solid `#F5E2CA`
- Spacing:
  - Horizontal padding: 32px (px-8)
  - Vertical padding: 43px
  - Gap between title and description: 24px
  - Number margin bottom: 321px

## Responsive Behavior

- Desktop: Four cards in a row with vertical borders
- Mobile: Stacks vertically
- Maintains consistent spacing across breakpoints

## Best Practices

1. Use consistent number formatting (e.g., "01" instead of "1")
2. Keep titles concise for better visual balance
3. Maintain similar description lengths across cards
4. Use for sequential or related content that benefits from equal visual weight
