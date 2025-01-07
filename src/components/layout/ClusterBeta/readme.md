# ClusterBeta

A flexible layout component for handling groups of variable-width items with consistent spacing and alignment. Perfect for tags, buttons, navigation items, and other horizontally arranged elements.

## Features

- Automatic wrapping of items
- Configurable gap spacing
- Alignment control (both horizontal and vertical)
- Flexible item sizing
- Polymorphic component (can render as any HTML element)
- Responsive behavior

## Usage

```tsx
// Basic usage
<ClusterBeta>
  <Button>Save</Button>
  <Button>Cancel</Button>
  <Button>Delete</Button>
</ClusterBeta>

// With alignment and gap
<ClusterBeta align="center" justify="between" gap="large">
  <Logo />
  <Navigation />
  <UserMenu />
</ClusterBeta>

// Tags or badges
<ClusterBeta gap="small">
  {tags.map(tag => (
    <Badge key={tag}>{tag}</Badge>
  ))}
</ClusterBeta>
```

## Props

| Prop       | Type                                                      | Default    | Description                 |
| ---------- | --------------------------------------------------------- | ---------- | --------------------------- |
| `align`    | `'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch'` | `'center'` | Vertical alignment of items |
| `justify`  | `'start' \| 'center' \| 'end' \| 'between'`               | `'start'`  | Horizontal distribution     |
| `gap`      | `'none' \| 'small' \| 'medium' \| 'large' \| 'xlarge'`    | `'medium'` | Space between items         |
| `as`       | `ElementType`                                             | `'div'`    | HTML element to render as   |
| `children` | `ReactNode`                                               | Required   | Items to arrange in cluster |

## Examples

### Navigation Bar

```tsx
<ClusterBeta align="center" justify="between" gap="large">
  <Logo />
  <ClusterBeta gap="medium">
    <NavLink>Home</NavLink>
    <NavLink>Products</NavLink>
    <NavLink>About</NavLink>
    <NavLink>Contact</NavLink>
  </ClusterBeta>
  <Button>Sign In</Button>
</ClusterBeta>
```

### Tag Cloud

```tsx
<ClusterBeta gap="small" align="center">
  {tags.map((tag) => (
    <Badge key={tag.id} variant={tag.featured ? 'featured' : 'default'}>
      {tag.name}
    </Badge>
  ))}
</ClusterBeta>
```

### Form Actions

```tsx
<ClusterBeta gap="medium" justify="end">
  <Button variant="outline">Cancel</Button>
  <Button variant="default">Save Draft</Button>
  <Button variant="primary">Publish</Button>
</ClusterBeta>
```

## Best Practices

1. **Gap Selection**

   - Use `small` for tight groupings (tags, chips)
   - Use `medium` for related actions
   - Use `large` for major layout sections
   - Maintain consistent gaps within sections

2. **Alignment**

   - Use `center` for most UI elements
   - Use `baseline` for mixed-size text
   - Use `stretch` for equal-height items
   - Consider RTL support

3. **Justification**
   - Use `start` for most content
   - Use `between` for navigation bars
   - Use `end` for action buttons
   - Consider mobile layouts

## Accessibility Considerations

1. **Navigation**

   - Maintain logical tab order
   - Group related items
   - Consider keyboard navigation
   - Preserve semantic structure

2. **Responsive Behavior**
   - Test wrapping behavior
   - Ensure touch targets
   - Verify mobile spacing
   - Check overflow handling

## System Integration

1. **With Card Components**

```tsx
<Card>
  <CardHeader>
    <ClusterBeta justify="between" align="center">
      <CardTitle>Title</CardTitle>
      <CardActions />
    </ClusterBeta>
  </CardHeader>
</Card>
```

2. **With Form Layout**

```tsx
<Form>
  <FormFields />
  <ClusterBeta justify="end" gap="medium">
    <Button type="button">Cancel</Button>
    <Button type="submit">Submit</Button>
  </ClusterBeta>
</Form>
```

3. **With Section Headers**

```tsx
<Section>
  <ClusterBeta justify="between" align="baseline">
    <Title>Section Title</Title>
    <ClusterBeta gap="small">
      <FilterButton />
      <SortButton />
      <MoreOptions />
    </ClusterBeta>
  </ClusterBeta>
</Section>
```

## Common Use Cases

1. **Navigation Components**

   - Main navigation
   - Breadcrumbs
   - Pagination
   - Tab bars

2. **Action Groups**

   - Form buttons
   - Toolbar items
   - Filter controls
   - Card actions

3. **Content Organization**

   - Tags and categories
   - Social links
   - Feature lists
   - Status indicators

4. **Meta Information**
   - Author details
   - Post metadata
   - Rating systems
   - Share buttons

## Performance Notes

1. **Layout Stability**

   - Minimal layout shifts
   - Efficient wrapping
   - Smooth transitions
   - Predictable spacing

2. **Responsive Considerations**
   - Efficient reflow
   - Smart gap adjustments
   - Mobile-first approach
   - Touch-friendly targets

## Troubleshooting

1. **Spacing Issues**

   - Check gap properties
   - Verify parent constraints
   - Test flex behavior
   - Check margin conflicts

2. **Alignment Problems**

   - Verify item heights
   - Check baseline alignment
   - Test with varied content
   - Verify RTL support

3. **Wrapping Behavior**
   - Check container width
   - Test with dynamic content
   - Verify gap consistency
   - Check mobile breakpoints

## Related Components

- `StackBeta`: For vertical layouts
- `GridBeta`: For grid-based layouts
- `FlowBeta`: For more complex content flow
- `CenterBeta`: For centered clusters
