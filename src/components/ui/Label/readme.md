# Label

A form label component that provides semantic labeling for form controls. Built with accessibility in mind and supports various styling options.

## Features

- Semantic HTML
- Required state
- Optional text
- Error state
- Custom styling
- Accessibility support
- Automatic form control association

## Usage

```tsx
// Basic usage
<Label>Username</Label>

// With form control
<Label>
  Email address
  <Input type="email" />
</Label>

// Required field
<Label required>
  Password
  <Input type="password" />
</Label>

// With error
<Label error="Invalid input">
  Phone number
  <Input type="tel" />
</Label>
```

## Props

| Prop        | Type        | Default | Description               |
| ----------- | ----------- | ------- | ------------------------- |
| `htmlFor`   | `string`    | -       | Associated control ID     |
| `required`  | `boolean`   | `false` | Show required indicator   |
| `optional`  | `boolean`   | `false` | Show optional text        |
| `error`     | `string`    | -       | Error message             |
| `disabled`  | `boolean`   | `false` | Disable label and control |
| `children`  | `ReactNode` | -       | Label content             |
| `className` | `string`    | -       | Additional CSS classes    |

## Examples

### With Required Indicator

```tsx
<Label required>
  Full name
  <Input placeholder="John Doe" />
</Label>
```

### With Optional Text

```tsx
<Label optional>
  Company
  <Input placeholder="Optional" />
</Label>
```

### With Error State

```tsx
<Label error="Please enter a valid email">
  Email
  <Input type="email" error="Invalid email format" />
</Label>
```

## Best Practices

1. **Usage**

   - Clear text
   - Consistent style
   - Proper association
   - Error handling

2. **Accessibility**

   - Semantic markup
   - Required states
   - Error messages
   - Focus management

3. **Content**
   - Concise text
   - Clear instructions
   - Helpful hints
   - Error clarity

## Accessibility

1. **Semantic HTML**

   - Use `<label>` element
   - Proper `for` attribute
   - ARIA attributes
   - Role definitions

2. **States**

   - Required indicator
   - Optional text
   - Error states
   - Disabled state

3. **Screen Readers**
   - Clear announcements
   - State changes
   - Error messages
   - Required fields

## Customization

1. **Custom Styles**

```tsx
<Label className="custom-label">
  Username
  <Input className="custom-input" />
</Label>
```

2. **With Icons**

```tsx
<Label>
  <div className="flex items-center gap-2">
    <Icon />
    <span>Password</span>
  </div>
  <Input type="password" />
</Label>
```

## Common Use Cases

1. **Form Fields**

   - Input fields
   - Checkboxes
   - Radio buttons
   - Select menus

2. **Validation**

   - Required fields
   - Optional fields
   - Error states
   - Help text

3. **Complex Forms**
   - Multi-step forms
   - Dynamic fields
   - Grouped inputs
   - Nested controls

## States

1. **Required State**

```tsx
<Label required>
  <span className="flex items-center gap-1">
    Username
    <RequiredIndicator />
  </span>
  <Input />
</Label>
```

2. **Error State**

```tsx
<Label error="This field is required">
  Email
  <Input error="Please enter your email" type="email" />
</Label>
```

## Integration

1. **With Form Libraries**

```tsx
<Controller
  name="email"
  control={control}
  render={({ field, fieldState }) => (
    <Label error={fieldState.error?.message}>
      Email address
      <Input {...field} />
    </Label>
  )}
/>
```

2. **With Validation**

```tsx
<Label error={errors.username?.message}>
  Username
  <Input
    {...register('username', {
      required: 'Username is required',
    })}
  />
</Label>
```

## Animation

1. **Error Animation**

```css
.label-error {
  animation: shake 0.2s ease-in-out;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(4px);
  }
  75% {
    transform: translateX(-4px);
  }
}
```

2. **Required Indicator**

```css
.required-indicator {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
```

## Theme Integration

1. **Variables**

```css
.label {
  --label-font: var(--font-sans);
  --label-color: var(--color-gray-700);
  --label-error: var(--color-error);
  --label-disabled: var(--color-gray-400);
}
```

2. **Dark Mode**

```css
.dark .label {
  --label-color: var(--color-gray-300);
  --label-error: var(--color-error-light);
  --label-disabled: var(--color-gray-600);
}
```
