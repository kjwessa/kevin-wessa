# Checkbox

A form control component that allows users to select one or multiple options. Built with accessibility and customization in mind, supporting various states and styles.

## Features

- Controlled/Uncontrolled modes
- Indeterminate state
- Custom styles
- Label support
- Form integration
- Keyboard navigation
- ARIA compliance
- Animation support

## Usage

```tsx
// Basic usage
<Checkbox>Accept terms</Checkbox>

// Controlled
<Checkbox
  checked={isChecked}
  onCheckedChange={setIsChecked}
>
  Subscribe to newsletter
</Checkbox>

// Indeterminate
<Checkbox checked="indeterminate">
  Select all
</Checkbox>

// Disabled
<Checkbox disabled>
  Unavailable option
</Checkbox>
```

## Props

| Prop              | Type                         | Default | Description              |
| ----------------- | ---------------------------- | ------- | ------------------------ |
| `checked`         | `boolean \| 'indeterminate'` | -       | Controlled checked state |
| `defaultChecked`  | `boolean`                    | `false` | Default checked state    |
| `onCheckedChange` | `(checked: boolean) => void` | -       | Change handler           |
| `disabled`        | `boolean`                    | `false` | Disable checkbox         |
| `required`        | `boolean`                    | `false` | Make field required      |
| `name`            | `string`                     | -       | Input name               |
| `value`           | `string`                     | -       | Input value              |
| `id`              | `string`                     | -       | Element ID               |
| `children`        | `ReactNode`                  | -       | Label content            |

## Examples

### Form Integration

```tsx
<form onSubmit={handleSubmit}>
  <Checkbox name="terms" required value="accepted">
    I accept the terms and conditions
  </Checkbox>
  <Button type="submit">Submit</Button>
</form>
```

### Multiple Selection

```tsx
<div>
  <Checkbox checked={selectAll} onCheckedChange={handleSelectAll}>
    Select All
  </Checkbox>
  {options.map((option) => (
    <Checkbox
      key={option.id}
      checked={selected.includes(option.id)}
      onCheckedChange={(checked) => handleSelect(option.id, checked)}
    >
      {option.label}
    </Checkbox>
  ))}
</div>
```

### Custom Style

```tsx
<Checkbox className="custom-checkbox">
  <div className="flex items-center">
    <Icon className="mr-2" />
    <span>Custom Label</span>
  </div>
</Checkbox>
```

## Best Practices

1. **Usage**

   - Clear labels
   - Logical grouping
   - Consistent styling
   - Appropriate spacing

2. **Accessibility**

   - Descriptive text
   - Keyboard support
   - ARIA labels
   - Focus states

3. **Validation**
   - Clear feedback
   - Error states
   - Required fields
   - Group validation

## Accessibility

1. **Keyboard Support**

   - Space to toggle
   - Tab navigation
   - Focus indicators
   - Arrow key groups

2. **Screen Readers**

   - State announcements
   - Group labels
   - Error messages
   - Required fields

3. **Visual**
   - Clear indicators
   - State visibility
   - Error states
   - Focus rings

## Customization

1. **Custom Styles**

```tsx
<Checkbox className="custom-checkbox">
  <span className="checkbox-label">Label</span>
</Checkbox>
```

2. **Custom Icons**

```tsx
<Checkbox>
  <CheckIcon className="checkbox-icon" />
  <span>With Custom Icon</span>
</Checkbox>
```

## Common Use Cases

1. **Form Controls**

   - Terms acceptance
   - Preferences
   - Settings
   - Filters

2. **Multiple Selection**

   - List selection
   - Bulk actions
   - Feature toggles
   - Options groups

3. **Settings**
   - User preferences
   - App settings
   - Notifications
   - Permissions

## States

1. **Error State**

```tsx
<Checkbox error="This field is required" required>
  Required Field
</Checkbox>
```

2. **Loading State**

```tsx
<Checkbox disabled isLoading>
  Loading...
</Checkbox>
```

## Integration

1. **With Form Libraries**

```tsx
<FormProvider {...methods}>
  <Controller
    name="terms"
    control={control}
    render={({ field }) => (
      <Checkbox checked={field.value} onCheckedChange={field.onChange}>
        Accept Terms
      </Checkbox>
    )}
  />
</FormProvider>
```

2. **With Validation**

```tsx
<Checkbox
  error={errors.terms?.message}
  required
  {...register('terms', {
    required: 'This field is required',
  })}
>
  Accept Terms
</Checkbox>
```

## Animation

1. **Check Animation**

```tsx
<Checkbox>
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: isChecked ? 1 : 0 }}
    transition={{ duration: 0.2 }}
  >
    <CheckIcon />
  </motion.div>
</Checkbox>
```

2. **Error Animation**

```tsx
<Checkbox>
  <motion.div animate={{ x: hasError ? [0, 2, -2, 0] : 0 }} transition={{ duration: 0.2 }}>
    <ErrorIcon />
  </motion.div>
</Checkbox>
```

## Theme Integration

1. **Variables**

```css
.checkbox {
  --checkbox-size: var(--space-4);
  --checkbox-color: var(--color-primary);
  --checkbox-border: var(--border-width);
  --checkbox-radius: var(--radius-sm);
}
```

2. **Dark Mode**

```css
.dark .checkbox {
  --checkbox-color: var(--color-primary-dark);
  --checkbox-border-color: var(--border-dark);
}
```
