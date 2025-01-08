# Textarea

A form textarea component that provides a consistent interface for multi-line text input. Built with accessibility and customization in mind.

## Features

- Auto-resize
- Character count
- Max length
- Validation
- Placeholder
- Disabled state
- Read-only mode
- Error handling

## Usage

```tsx
// Basic usage
<Textarea placeholder="Enter your message" />

// With auto-resize
<Textarea
  autoResize
  placeholder="Type something..."
/>

// With character count
<Textarea
  maxLength={500}
  showCount
  placeholder="Limited to 500 characters"
/>

// With validation
<Textarea
  required
  error="This field is required"
  placeholder="Required field"
/>
```

## Props

| Prop           | Type      | Default | Description              |
| -------------- | --------- | ------- | ------------------------ |
| `value`        | `string`  | -       | Controlled value         |
| `defaultValue` | `string`  | -       | Default value            |
| `placeholder`  | `string`  | -       | Placeholder text         |
| `rows`         | `number`  | `3`     | Number of visible rows   |
| `maxLength`    | `number`  | -       | Maximum character length |
| `showCount`    | `boolean` | `false` | Show character count     |
| `autoResize`   | `boolean` | `false` | Enable auto-resizing     |
| `error`        | `string`  | -       | Error message            |
| `disabled`     | `boolean` | `false` | Disable textarea         |
| `readOnly`     | `boolean` | `false` | Make field read-only     |
| `required`     | `boolean` | `false` | Make field required      |
| `className`    | `string`  | -       | Additional CSS classes   |

## Examples

### Auto-resizing Textarea

```tsx
<Textarea autoResize minRows={3} maxRows={10} placeholder="This will grow as you type..." />
```

### With Character Count

```tsx
<Textarea
  maxLength={1000}
  showCount
  placeholder="Limited to 1000 characters"
  className="with-counter"
/>
```

### With Validation

```tsx
<Textarea
  error={errors.message?.message}
  required
  placeholder="Please enter your message"
  {...register('message', {
    required: 'Message is required',
  })}
/>
```

## Best Practices

1. **Usage**

   - Clear labels
   - Helpful placeholders
   - Appropriate sizing
   - Error handling

2. **Accessibility**

   - Descriptive labels
   - Error messages
   - Focus management
   - ARIA attributes

3. **Validation**
   - Clear feedback
   - Character limits
   - Required fields
   - Error states

## Accessibility

1. **Labels**

   - Use with Label
   - Clear descriptions
   - Error messages
   - Required fields

2. **Keyboard**

   - Tab navigation
   - Focus states
   - Clear indicators
   - Error focus

3. **Screen Readers**
   - Character count
   - Error messages
   - Required state
   - Value changes

## Customization

1. **Custom Styles**

```tsx
<Textarea
  className="custom-textarea"
  containerClassName="textarea-container"
  errorClassName="textarea-error"
/>
```

2. **With Counter**

```tsx
<Textarea
  showCount
  maxLength={500}
  counterRender={({ count, maxLength }) => (
    <span className="custom-counter">
      {count}/{maxLength}
    </span>
  )}
/>
```

## Common Use Cases

1. **Form Fields**

   - Comments
   - Messages
   - Descriptions
   - Feedback

2. **Content Entry**

   - Blog posts
   - Reviews
   - Notes
   - Bio text

3. **User Input**
   - Support tickets
   - Contact forms
   - Feedback forms
   - Applications

## States

1. **Loading State**

```tsx
<Textarea isLoading disabled value="Loading content..." />
```

2. **Error State**

```tsx
<Textarea error="Please enter at least 50 characters" className="error" aria-invalid="true" />
```

## Integration

1. **With Form Libraries**

```tsx
<Controller
  name="description"
  control={control}
  rules={{ required: true }}
  render={({ field, fieldState }) => (
    <Textarea {...field} error={fieldState.error?.message} placeholder="Enter description" />
  )}
/>
```

2. **With Validation**

```tsx
<Textarea
  {...register('feedback', {
    required: 'Feedback is required',
    minLength: {
      value: 50,
      message: 'Please provide at least 50 characters',
    },
  })}
  error={errors.feedback?.message}
/>
```

## Animation

1. **Focus Animation**

```css
.textarea {
  transition: border-color 0.2s;
}

.textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-alpha);
}
```

2. **Error Animation**

```css
.textarea-error {
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
.textarea {
  --textarea-bg: var(--color-white);
  --textarea-border: var(--border-width);
  --textarea-radius: var(--radius-md);
  --textarea-padding: var(--space-3);
  --textarea-font: var(--font-sans);
  --textarea-placeholder: var(--color-gray-400);
}
```

2. **Dark Mode**

```css
.dark .textarea {
  --textarea-bg: var(--color-gray-800);
  --textarea-text: var(--color-gray-100);
  --textarea-border: var(--color-gray-700);
  --textarea-placeholder: var(--color-gray-500);
}
```

## Auto-resize Configuration

```tsx
<Textarea
  autoResize
  minRows={3}
  maxRows={10}
  style={{
    resize: 'none',
    overflow: 'hidden',
  }}
  onInput={(e) => {
    const target = e.target as HTMLTextAreaElement
    target.style.height = 'auto'
    target.style.height = `${target.scrollHeight}px`
  }}
/>
```
