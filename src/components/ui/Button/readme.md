# Button

A versatile button component that provides consistent styling and behavior for interactive elements. Built with accessibility and customization in mind.

## Features

- Multiple variants
- Size options
- Icon support
- Loading state
- Disabled state
- Full width mode
- Link support
- Keyboard focus

## Usage

```tsx
// Basic usage
<Button>Click me</Button>

// With variant
<Button variant="secondary">
  Secondary Button
</Button>

// With size
<Button size="lg">
  Large Button
</Button>

// With icon
<Button>
  <PlusIcon className="mr-2" />
  Add Item
</Button>

// Loading state
<Button isLoading>
  Processing...
</Button>
```

## Props

| Prop        | Type                                            | Default     | Description                 |
| ----------- | ----------------------------------------------- | ----------- | --------------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'ghost' \| 'link'` | `'primary'` | Button style variant        |
| `size`      | `'sm' \| 'md' \| 'lg' \| 'xl'`                  | `'md'`      | Button size                 |
| `isLoading` | `boolean`                                       | `false`     | Show loading state          |
| `disabled`  | `boolean`                                       | `false`     | Disable button              |
| `fullWidth` | `boolean`                                       | `false`     | Make button full width      |
| `type`      | `'button' \| 'submit' \| 'reset'`               | `'button'`  | Button type                 |
| `asChild`   | `boolean`                                       | `false`     | Render as different element |
| `className` | `string`                                        | -           | Additional CSS classes      |

## Examples

### Icon Button

```tsx
<Button variant="ghost" size="sm">
  <SearchIcon className="h-4 w-4" />
  <span className="sr-only">Search</span>
</Button>
```

### Link Button

```tsx
<Button asChild variant="link">
  <Link href="/about">About Us</Link>
</Button>
```

### Loading Button

```tsx
<Button isLoading loadingText="Saving...">
  Save Changes
</Button>
```

## Best Practices

1. **Usage**

   - Clear labels
   - Consistent styling
   - Proper spacing
   - Meaningful icons

2. **Accessibility**

   - Descriptive text
   - ARIA labels
   - Focus states
   - Color contrast

3. **Interaction**
   - Loading states
   - Disabled states
   - Hover effects
   - Click feedback

## Accessibility

1. **Labels**

   - Clear text
   - Icon labels
   - ARIA labels
   - Screen readers

2. **Keyboard**

   - Focus visible
   - Tab order
   - Space/Enter
   - Click events

3. **States**
   - Loading
   - Disabled
   - Focused
   - Active

## Customization

1. **Custom Styles**

```tsx
<Button className="custom-button" style={{ borderRadius: '9999px' }}>
  Rounded Button
</Button>
```

2. **With Icon**

```tsx
<Button className="gap-2">
  <Icon className="button-icon" />
  <span>With Icon</span>
</Button>
```

## Common Use Cases

1. **Actions**

   - Form submit
   - Navigation
   - Modals
   - Dropdowns

2. **States**

   - Loading
   - Success
   - Error
   - Disabled

3. **Types**
   - Primary
   - Secondary
   - Tertiary
   - Links

## States

1. **Loading State**

```tsx
<Button isLoading disabled className="relative">
  <Spinner className="absolute" />
  <span className="opacity-0">Submit</span>
</Button>
```

2. **Success State**

```tsx
<Button variant="primary" className="success">
  <CheckIcon />
  Saved
</Button>
```

## Integration

1. **With Forms**

```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" isLoading={isSubmitting}>
    Submit
  </Button>
</form>
```

2. **With Router**

```tsx
<Button onClick={() => router.push('/dashboard')} variant="ghost">
  Go to Dashboard
</Button>
```

## Animation

1. **Click Animation**

```css
.button {
  transition: transform 0.1s;
}

.button:active {
  transform: scale(0.98);
}
```

2. **Loading Animation**

```css
.button-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## Theme Integration

1. **Variables**

```css
.button {
  --button-bg: var(--color-primary);
  --button-text: var(--color-white);
  --button-border: transparent;
  --button-radius: var(--radius-md);
  --button-padding: var(--space-4);
  --button-height: var(--space-10);
}
```

2. **Dark Mode**

```css
.dark .button {
  --button-bg: var(--color-primary-dark);
  --button-hover: var(--color-primary-darker);
  --button-active: var(--color-primary-darkest);
}
```

## Size Configuration

```css
.button-sizes {
  --button-height-sm: var(--space-8);
  --button-height-md: var(--space-10);
  --button-height-lg: var(--space-12);
  --button-height-xl: var(--space-14);

  --button-padding-sm: var(--space-2) var(--space-3);
  --button-padding-md: var(--space-3) var(--space-4);
  --button-padding-lg: var(--space-4) var(--space-6);
  --button-padding-xl: var(--space-5) var(--space-8);
}
```

## Responsive Behavior

```tsx
<Button
  size={{
    base: 'sm',
    md: 'md',
    lg: 'lg',
  }}
  fullWidth={{
    base: true,
    md: false,
  }}
>
  Responsive Button
</Button>
```
