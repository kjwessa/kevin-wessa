# Select

A form select component that provides a customizable dropdown menu for selecting options. Built with accessibility and customization in mind.

## Features

- Single/Multiple selection
- Search functionality
- Custom rendering
- Keyboard navigation
- Async loading
- Group support
- Virtualization
- Clear selection

## Usage

```tsx
// Basic usage
<Select
  options={[
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' }
  ]}
/>

// With placeholder
<Select
  placeholder="Choose a fruit"
  options={options}
/>

// Multiple selection
<Select
  multiple
  placeholder="Select fruits"
  options={options}
/>

// With groups
<Select
  options={[
    {
      label: 'Fruits',
      options: [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' }
      ]
    },
    {
      label: 'Vegetables',
      options: [
        { value: 'carrot', label: 'Carrot' },
        { value: 'broccoli', label: 'Broccoli' }
      ]
    }
  ]}
/>
```

## Props

| Prop          | Type                                  | Default | Description               |
| ------------- | ------------------------------------- | ------- | ------------------------- |
| `options`     | `Option[] \| GroupOption[]`           | `[]`    | Options to select from    |
| `value`       | `string \| string[]`                  | -       | Selected value(s)         |
| `onChange`    | `(value: string \| string[]) => void` | -       | Change handler            |
| `placeholder` | `string`                              | -       | Placeholder text          |
| `multiple`    | `boolean`                             | `false` | Enable multiple selection |
| `searchable`  | `boolean`                             | `false` | Enable search             |
| `disabled`    | `boolean`                             | `false` | Disable select            |
| `loading`     | `boolean`                             | `false` | Show loading state        |
| `error`       | `string`                              | -       | Error message             |
| `clearable`   | `boolean`                             | `false` | Show clear button         |
| `size`        | `'sm' \| 'md' \| 'lg'`                | `'md'`  | Select size               |

## Examples

### Searchable Select

```tsx
<Select searchable placeholder="Search fruits..." options={options} onSearch={handleSearch} />
```

### Async Loading

```tsx
<Select async loadOptions={fetchOptions} placeholder="Search users..." debounceTimeout={300} />
```

### Custom Option Rendering

```tsx
<Select
  options={options}
  renderOption={(option) => (
    <div className="flex items-center gap-2">
      <img src={option.icon} alt="" className="h-5 w-5" />
      <span>{option.label}</span>
    </div>
  )}
/>
```

## Best Practices

1. **Usage**

   - Clear labels
   - Helpful placeholders
   - Logical grouping
   - Search when needed

2. **Accessibility**

   - Keyboard support
   - Screen reader
   - ARIA labels
   - Focus management

3. **Performance**
   - Virtualization
   - Debounced search
   - Async loading
   - Optimized rendering

## Accessibility

1. **Keyboard Navigation**

   - Arrow keys
   - Type to select
   - Enter to choose
   - Escape to close

2. **Screen Readers**

   - Option count
   - Selected state
   - Group labels
   - Search status

3. **ARIA Support**
   - Proper roles
   - State updates
   - Live regions
   - Clear labels

## Customization

1. **Custom Trigger**

```tsx
<Select
  renderTrigger={(props) => <Button {...props}>{props.selectedLabel || 'Select...'}</Button>}
/>
```

2. **Custom Option**

```tsx
<Select
  renderOption={(option) => (
    <CustomOption label={option.label} icon={option.icon} description={option.description} />
  )}
/>
```

## Common Use Cases

1. **Form Fields**

   - Single select
   - Multi select
   - Cascading select
   - Dependent fields

2. **Data Display**

   - Filtering
   - Sorting
   - View selection
   - Preferences

3. **Complex Data**
   - Nested options
   - Rich content
   - Custom rendering
   - Dynamic loading

## States

1. **Loading State**

```tsx
<Select loading loadingMessage="Fetching options..." options={[]} />
```

2. **Error State**

```tsx
<Select error="Please select an option" options={options} />
```

## Integration

1. **With Form Libraries**

```tsx
<Controller
  name="fruit"
  control={control}
  render={({ field }) => <Select {...field} options={options} error={errors.fruit?.message} />}
/>
```

2. **With Validation**

```tsx
<Select
  {...register('category', {
    required: 'Please select a category',
  })}
  error={errors.category?.message}
  options={categories}
/>
```

## Animation

1. **Dropdown Animation**

```css
.select-dropdown {
  animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

2. **Loading Animation**

```css
.select-loading {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
```

## Theme Integration

1. **Variables**

```css
.select {
  --select-bg: var(--color-white);
  --select-border: var(--border-width);
  --select-radius: var(--radius-md);
  --select-shadow: var(--shadow-sm);
  --select-hover: var(--color-gray-100);
}
```

2. **Dark Mode**

```css
.dark .select {
  --select-bg: var(--color-gray-800);
  --select-border: var(--color-gray-700);
  --select-hover: var(--color-gray-700);
  --select-selected: var(--color-gray-600);
}
```
