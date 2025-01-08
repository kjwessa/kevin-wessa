# Input

A form input component that provides a consistent interface for text input. Supports various types, states, and validation with full accessibility support.

## Features

- Multiple input types
- Validation states
- Icon support
- Prefix/Suffix
- Clear button
- Password toggle
- Error handling
- Loading state

## Usage

```tsx
// Basic usage
<Input placeholder="Enter text" />

// With type
<Input type="email" placeholder="Email address" />

// With label
<Label>
  Username
  <Input placeholder="Enter username" />
</Label>

// With validation
<Input
  required
  error="This field is required"
  placeholder="Required field"
/>
```

## Props

| Prop           | Type                                                   | Default  | Description          |
| -------------- | ------------------------------------------------------ | -------- | -------------------- |
| `type`         | `'text' \| 'email' \| 'password' \| 'number' \| 'tel'` | `'text'` | Input type           |
| `value`        | `string`                                               | -        | Controlled value     |
| `defaultValue` | `string`                                               | -        | Default value        |
| `placeholder`  | `string`                                               | -        | Placeholder text     |
| `error`        | `string`                                               | -        | Error message        |
| `disabled`     | `boolean`                                              | `false`  | Disable input        |
| `required`     | `boolean`                                              | `false`  | Make field required  |
| `readOnly`     | `boolean`                                              | `false`  | Make field read-only |
| `prefix`       | `ReactNode`                                            | -        | Content before input |
| `suffix`       | `ReactNode`                                            | -        | Content after input  |
| `clearable`    | `boolean`                                              | `false`  | Show clear button    |
| `size`         | `'sm' \| 'md' \| 'lg'`                                 | `'md'`   | Input size           |

## Examples

### Email Input

```tsx
<Input
  type="email"
  placeholder="Email address"
  prefix={<EmailIcon />}
  required
  error={errors.email?.message}
/>
```

### Password Input

```tsx
<Input
  type="password"
  placeholder="Enter password"
  suffix={
    <Button variant="ghost" size="sm" onClick={toggleVisibility}>
      {isVisible ? <EyeIcon /> : <EyeOffIcon />}
    </Button>
  }
/>
```

### Search Input

```tsx
<Input
  type="search"
  placeholder="Search..."
  prefix={<SearchIcon />}
  suffix={
    <Button variant="ghost" size="sm">
      <ClearIcon />
    </Button>
  }
  clearable
/>
```

## Best Practices

1. **Usage**

   - Clear labels
   - Helpful placeholders
   - Appropriate types
   - Validation feedback

2. **Accessibility**

   - Descriptive labels
   - Error messages
   - Focus management
   - ARIA attributes

3. **Validation**
   - Immediate feedback
   - Clear messages
   - Visual indicators
   - State handling

## Accessibility

1. **Labels**

   - Always use labels
   - Clear descriptions
   - Error messages
   - Required fields

2. **Keyboard**

   - Tab navigation
   - Focus states
   - Clear indicators
   - Error focus

3. **Screen Readers**
   - State announcements
   - Error feedback
   - Required fields
   - Value changes

## Customization

1. **With Icons**

```tsx
<Input prefix={<Icon className="input-icon" />} suffix={<Button className="input-button" />} />
```

2. **Custom Styles**

```tsx
<Input className="custom-input" containerClassName="input-container" errorClassName="input-error" />
```

## Common Use Cases

1. **Form Fields**

   - User input
   - Search fields
   - Email addresses
   - Phone numbers

2. **Search**

   - Global search
   - Filtering
   - Quick find
   - Look up

3. **Authentication**
   - Username
   - Password
   - Email
   - 2FA codes

## States

1. **Loading State**

```tsx
<Input isLoading suffix={<Spinner size="sm" />} disabled />
```

2. **Error State**

```tsx
<Input error="Invalid email address" className="error" aria-invalid="true" />
```

## Integration

1. **With Form Libraries**

```tsx
<Controller
  name="email"
  control={control}
  rules={{ required: true }}
  render={({ field, fieldState }) => (
    <Input {...field} error={fieldState.error?.message} type="email" />
  )}
/>
```

2. **With Validation**

```tsx
<Input
  {...register('username', {
    required: 'Username is required',
    minLength: {
      value: 3,
      message: 'Minimum 3 characters',
    },
  })}
  error={errors.username?.message}
/>
```

## Animation

1. **Focus Animation**

```css
.input {
  transition: border-color 0.2s;
}

.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-alpha);
}
```

2. **Error Animation**

```css
.input-error {
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

## Theme Integration

1. **Variables**

```css
.input {
  --input-border: var(--border-width);
  --input-radius: var(--radius-md);
  --input-padding: var(--space-3);
  --input-font: var(--font-sans);
  --input-placeholder: var(--color-gray-400);
}
```

2. **Dark Mode**

```css
.dark .input {
  --input-bg: var(--color-gray-800);
  --input-text: var(--color-gray-100);
  --input-border: var(--color-gray-700);
}
```
