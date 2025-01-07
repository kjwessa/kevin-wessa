# GridGuide

A development tool component that provides visual guides for the grid system. Essential for ensuring proper alignment and spacing during development and debugging layout issues.

## Features

- Visual grid overlay
- Column visualization
- Gutter display
- Margin indicators
- Toggle functionality
- Development-only component

## Usage

```tsx
// Basic usage
<GridGuide>
  <YourContent />
</GridGuide>

// With custom columns
<GridGuide columns={16}>
  <YourContent />
</GridGuide>

// With toggle control
<GridGuide show={isDebugMode}>
  <YourContent />
</GridGuide>
```

## Props

| Prop       | Type        | Default | Description                  |
| ---------- | ----------- | ------- | ---------------------------- |
| `show`     | `boolean`   | `true`  | Toggle grid visibility       |
| `columns`  | `number`    | `12`    | Number of columns to display |
| `opacity`  | `number`    | `0.2`   | Grid overlay opacity         |
| `color`    | `string`    | `blue`  | Grid line color              |
| `children` | `ReactNode` | -       | Content to overlay grid on   |

## Examples

### Development Layout

```tsx
<GridGuide show={process.env.NODE_ENV === 'development'}>
  <Layout>
    <YourContent />
  </Layout>
</GridGuide>
```

### Debug Mode

```tsx
const [showGrid, setShowGrid] = useState(false)

return (
  <>
    <button onClick={() => setShowGrid(!showGrid)}>Toggle Grid</button>
    <GridGuide show={showGrid}>
      <Content />
    </GridGuide>
  </>
)
```

### Custom Styling

```tsx
<GridGuide columns={24} opacity={0.1} color="red">
  <Content />
</GridGuide>
```

## Best Practices

1. **Usage Context**

   - Use in development only
   - Remove in production
   - Toggle for debugging
   - Use with layout components

2. **Visual Settings**

   - Adjust opacity for clarity
   - Choose contrasting colors
   - Match grid to design
   - Consider background

3. **Implementation**
   - Use with GridBeta
   - Verify alignments
   - Check responsive behavior
   - Test edge cases

## Development Integration

1. **With Development Tools**

```tsx
const DevTools = () => {
  const [showGrid, setShowGrid] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'g' && e.ctrlKey) {
        setShowGrid((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <GridGuide show={showGrid}>
      <App />
    </GridGuide>
  )
}
```

2. **With Theme System**

```tsx
<GridGuide show={isDevelopment} color={theme.colors.primary} opacity={0.15}>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</GridGuide>
```

3. **With Debug Tools**

```tsx
<DebugTools>
  <GridGuide show={debugState.showGrid}>
    <LayoutDebugger />
    <Content />
  </GridGuide>
</DebugTools>
```

## Common Use Cases

1. **Layout Development**

   - Grid alignment
   - Spacing verification
   - Column debugging
   - Responsive testing

2. **Design Implementation**

   - Match design specs
   - Verify proportions
   - Check gutters
   - Validate margins

3. **Component Development**

   - Alignment verification
   - Spacing checks
   - Layout debugging
   - Visual testing

4. **Documentation**
   - Grid system examples
   - Layout demonstrations
   - Teaching tools
   - Visual guides

## Development Notes

1. **Performance**

   - Minimal DOM impact
   - Efficient overlay
   - No layout shifts
   - Clean removal

2. **Implementation**
   - CSS Grid overlay
   - Absolute positioning
   - Z-index management
   - Pointer events

## Troubleshooting

1. **Visibility Issues**

   - Check z-index
   - Verify opacity
   - Test color contrast
   - Check show prop

2. **Alignment Problems**

   - Verify column count
   - Check gutter size
   - Test margin space
   - Validate grid math

3. **Integration Issues**
   - Check context
   - Verify nesting
   - Test with components
   - Check responsive

## Related Components

- `GridBeta`: Grid system
- `ContainerBeta`: Width constraints

## Development Tips

1. **Keyboard Shortcuts**

   - Implement toggle shortcuts
   - Use with dev tools
   - Quick access bindings
   - Debug mode triggers

2. **Visual Feedback**
   - Clear indicators
   - Distinct colors
   - Visible boundaries
   - Responsive guides

## Environment Integration

1. **Development Mode**

```tsx
{
  process.env.NODE_ENV === 'development' && (
    <GridGuide>
      <App />
    </GridGuide>
  )
}
```

2. **Debug Features**

```tsx
const DEBUG_FEATURES = {
  showGrid: true,
  showBreakpoints: true,
  showAlignment: true
}

<GridGuide show={DEBUG_FEATURES.showGrid}>
  <DebugFeatures {...DEBUG_FEATURES}>
    <App />
  </DebugFeatures>
</GridGuide>
```
