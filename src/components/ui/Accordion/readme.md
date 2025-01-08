# Accordion

A collapsible content component that helps organize and present information in expandable sections. Built with accessibility and customization in mind.

## Features

- Multiple/Single expansion
- Animated transitions
- Custom triggers
- Nested accordions
- Controlled mode
- Default expansion
- Icon customization
- Keyboard navigation

## Usage

```tsx
// Basic usage
<Accordion>
  <Accordion.Item>
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Content for section 1</Accordion.Content>
  </Accordion.Item>
</Accordion>

// Multiple sections
<Accordion type="multiple">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Content for section 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Section 2</Accordion.Trigger>
    <Accordion.Content>Content for section 2</Accordion.Content>
  </Accordion.Item>
</Accordion>

// With default value
<Accordion defaultValue="item-1">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Content for section 1</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

## Props

### Accordion

| Prop            | Type                      | Default    | Description                 |
| --------------- | ------------------------- | ---------- | --------------------------- |
| `type`          | `'single' \| 'multiple'`  | `'single'` | Expansion type              |
| `value`         | `string \| string[]`      | -          | Controlled value(s)         |
| `defaultValue`  | `string \| string[]`      | -          | Default expanded value(s)   |
| `collapsible`   | `boolean`                 | `true`     | Allow all items to collapse |
| `onValueChange` | `(value: string) => void` | -          | Value change handler        |
| `className`     | `string`                  | -          | Additional CSS classes      |

### Accordion.Item

| Prop        | Type      | Default | Description            |
| ----------- | --------- | ------- | ---------------------- |
| `value`     | `string`  | -       | Unique identifier      |
| `disabled`  | `boolean` | `false` | Disable item           |
| `className` | `string`  | -       | Additional CSS classes |

### Accordion.Trigger

| Prop        | Type        | Default | Description            |
| ----------- | ----------- | ------- | ---------------------- |
| `className` | `string`    | -       | Additional CSS classes |
| `children`  | `ReactNode` | -       | Trigger content        |

### Accordion.Content

| Prop        | Type        | Default | Description            |
| ----------- | ----------- | ------- | ---------------------- |
| `className` | `string`    | -       | Additional CSS classes |
| `children`  | `ReactNode` | -       | Panel content          |

## Examples

### Custom Trigger

```tsx
<Accordion>
  <Accordion.Item value="custom">
    <Accordion.Trigger className="flex items-center justify-between">
      <span>Custom Trigger</span>
      <ChevronIcon className="transform transition-transform" />
    </Accordion.Trigger>
    <Accordion.Content>Content with custom trigger</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### With Icons

```tsx
<Accordion>
  <Accordion.Item>
    <Accordion.Trigger>
      <div className="flex items-center gap-2">
        <Icon className="accordion-icon" />
        <span>With Icon</span>
      </div>
    </Accordion.Trigger>
    <Accordion.Content>Content with icon</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Nested Accordions

```tsx
<Accordion>
  <Accordion.Item>
    <Accordion.Trigger>Parent Section</Accordion.Trigger>
    <Accordion.Content>
      <Accordion>
        <Accordion.Item>
          <Accordion.Trigger>Nested Section</Accordion.Trigger>
          <Accordion.Content>Nested content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

## Best Practices

1. **Usage**

   - Clear headers
   - Concise content
   - Logical grouping
   - Consistent styling

2. **Accessibility**

   - Keyboard support
   - ARIA attributes
   - Focus management
   - Screen readers

3. **Performance**
   - Lazy loading
   - Animation
   - Content size
   - Memory usage

## Accessibility

1. **Keyboard Navigation**

   - Enter/Space to toggle
   - Arrow keys navigation
   - Home/End support
   - Focus management

2. **ARIA Support**

   - Proper roles
   - State indicators
   - Live regions
   - Focus visibility

3. **Screen Readers**
   - Clear announcements
   - State changes
   - Content structure
   - Navigation cues

## Customization

1. **Custom Styles**

```tsx
<Accordion className="custom-accordion">
  <Accordion.Item className="custom-item">
    <Accordion.Trigger className="custom-trigger">Custom Styled Section</Accordion.Trigger>
    <Accordion.Content className="custom-content">Custom styled content</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

2. **Custom Animation**

```tsx
<Accordion.Content className="animate-slide-down">
  {/* Content with custom animation */}
</Accordion.Content>
```

## Common Use Cases

1. **Content Organization**

   - FAQs
   - Settings panels
   - Navigation menus
   - Product details

2. **Form Sections**

   - Multi-step forms
   - Group fields
   - Advanced options
   - Conditional inputs

3. **Documentation**
   - API docs
   - User guides
   - Help sections
   - Tutorials

## States

1. **Loading State**

```tsx
<Accordion.Item>
  <Accordion.Trigger disabled>
    <Spinner /> Loading...
  </Accordion.Trigger>
</Accordion.Item>
```

2. **Error State**

```tsx
<Accordion.Item className="error">
  <Accordion.Trigger>
    <ErrorIcon /> Error Section
  </Accordion.Trigger>
  <Accordion.Content>Error details...</Accordion.Content>
</Accordion.Item>
```

## Integration

1. **With Router**

```tsx
<Accordion
  value={searchParams.get('section')}
  onValueChange={(value) => {
    router.push(`?section=${value}`)
  }}
>
  {/* Accordion items */}
</Accordion>
```

2. **With Forms**

```tsx
<Accordion>
  <Accordion.Item>
    <Accordion.Trigger>Form Section</Accordion.Trigger>
    <Accordion.Content>
      <form>{/* Form fields */}</form>
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

## Animation

1. **Slide Animation**

```css
.accordion-content {
  transition: height 0.2s ease-out;
}

.accordion-content[data-state='open'] {
  animation: slideDown 0.2s ease-out;
}

.accordion-content[data-state='closed'] {
  animation: slideUp 0.2s ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
}
```

2. **Icon Rotation**

```css
.accordion-icon {
  transition: transform 0.2s ease;
}

.accordion-trigger[data-state='open'] .accordion-icon {
  transform: rotate(180deg);
}
```

## Theme Integration

1. **Variables**

```css
.accordion {
  --accordion-border: var(--border-width);
  --accordion-radius: var(--radius-md);
  --accordion-bg: var(--color-white);
  --accordion-hover: var(--color-gray-50);
  --accordion-padding: var(--space-4);
}
```

2. **Dark Mode**

```css
.dark .accordion {
  --accordion-bg: var(--color-gray-800);
  --accordion-hover: var(--color-gray-700);
  --accordion-border: var(--color-gray-700);
}
```
