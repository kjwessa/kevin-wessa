# BlockThemeBeta

A block-specific theme provider that handles background colors, overlays, and glass effects for block components. This component is designed to work specifically with block layouts while keeping the main ThemeBeta component untouched.

## Version History

### v0.1.0 (2025-01-09)
- Initial implementation
- Added theme variants (light, dark, primary, secondary)
- Added overlay system (none, light, medium, dark)
- Added glass effect option
- Focused on direct color classes for block-specific use

## Features

### Theme Variants
Controls the background and text colors of the block:
- `light`: Light background with dark text
- `dark`: Dark background with light text
- `primary`: Primary color background with white text
- `secondary`: Secondary color background with white text

```tsx
<BlockThemeBeta theme="primary">
  {/* Block content */}
</BlockThemeBeta>
```

### Overlay System
Adds a semi-transparent overlay to create depth or emphasis:
- `none`: No overlay (default)
- `light`: 10% opacity overlay
- `medium`: 20% opacity overlay
- `dark`: 40% opacity overlay

```tsx
<BlockThemeBeta theme="dark" overlay="medium">
  {/* Block content with overlay */}
</BlockThemeBeta>
```

### Glass Effect
Adds a backdrop blur effect with semi-transparent background:

```tsx
<BlockThemeBeta theme="primary" glass>
  {/* Content with glass effect */}
</BlockThemeBeta>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| theme | 'light' \| 'dark' \| 'primary' \| 'secondary' | 'light' | Controls the background and text colors |
| overlay | 'none' \| 'light' \| 'medium' \| 'dark' | 'none' | Adds an overlay with specified opacity |
| glass | boolean | undefined | Enables backdrop blur effect |
| as | ElementType | 'div' | HTML element to render as |
| className | string | undefined | Additional CSS classes |

## Common Use Cases

1. **Standard Block Background**
```tsx
<BlockThemeBeta theme="light">
  <BlockContent />
</BlockThemeBeta>
```

2. **Featured Content**
```tsx
<BlockThemeBeta 
  theme="primary"
  overlay="light"
  className="rounded-lg p-6"
>
  <FeaturedContent />
</BlockThemeBeta>
```

3. **Glass Card Effect**
```tsx
<BlockThemeBeta
  theme="dark"
  glass
  className="rounded-lg p-8"
>
  <CardContent />
</BlockThemeBeta>
```

## Differences from ThemeBeta

BlockThemeBeta is specifically designed for block layouts and differs from ThemeBeta in several ways:
1. No theme inheritance or inversion
2. Direct color classes instead of semantic tokens
3. Added overlay system
4. Added glass effect
5. Simplified API focused on block use cases

## Best Practices

1. Use with BlockWrapperBeta and BlockSpacingBeta for consistent layouts
2. Consider content readability when using overlays
3. Use glass effect sparingly for impact
4. Ensure sufficient contrast with text colors

## Future Considerations

Potential future enhancements:
- [ ] Gradient backgrounds
- [ ] Pattern overlays
- [ ] Animation options
- [ ] Content protection for overlay interactions

## Contributing

When making changes to BlockThemeBeta:
1. Update version history in this readme
2. Document breaking changes
3. Consider backward compatibility
4. Test with existing block components
