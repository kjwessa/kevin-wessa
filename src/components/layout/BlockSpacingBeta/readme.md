# BlockSpacingBeta

A utility component that provides consistent vertical spacing between blocks using CSS custom properties. This component manages the spacing between blocks while maintaining a consistent rhythm throughout the page.

## Version History

### v0.1.0 (2025-01-09)
- Initial implementation
- Added top/bottom margin controls using CSS variable
- Simple boolean controls for spacing
- Allows className and style overrides

## Features

### Margin Control
Controls the vertical spacing using the `--block-spacing` CSS variable:
- `top`: Adds margin to the top
- `bottom`: Adds margin to the bottom

```tsx
<BlockSpacingBeta top bottom>
  {/* Block content */}
</BlockSpacingBeta>
```

### Custom Spacing
The component uses a CSS variable for spacing, which can be customized at the theme level:
```css
:root {
  --block-spacing: 2rem; /* Default spacing */
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| top | boolean | true | Controls top margin |
| bottom | boolean | true | Controls bottom margin |
| className | string | undefined | Additional CSS classes |
| style | React.CSSProperties | undefined | Inline styles |

## Common Use Cases

1. **Standard Block Spacing**
```tsx
<BlockSpacingBeta>
  <BlockContent />
</BlockSpacingBeta>
```

2. **Bottom-Only Spacing**
```tsx
<BlockSpacingBeta top={false}>
  <BlockContent />
</BlockSpacingBeta>
```

3. **Custom Spacing Override**
```tsx
<BlockSpacingBeta style={{ '--block-spacing': '4rem' }}>
  <BlockContent />
</BlockSpacingBeta>
```

## Best Practices

1. Use consistently between blocks for rhythm
2. Avoid nesting BlockSpacingBeta components
3. Consider responsive spacing needs
4. Use with BlockWrapperBeta for complete block layout

## Integration with Other Components

BlockSpacingBeta works best when used with:
- BlockWrapperBeta for block structure
- BlockThemeBeta for theming
- Container components for width constraints

## Future Considerations

Potential future enhancements:
- [ ] Responsive spacing variants
- [ ] Different spacing sizes (small, medium, large)
- [ ] Horizontal spacing options
- [ ] Spacing presets for common patterns

## Contributing

When making changes to BlockSpacingBeta:
1. Update version history in this readme
2. Document breaking changes
3. Consider impact on existing block spacing
4. Test with various content lengths
