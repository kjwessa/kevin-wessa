# BlockWrapperBeta

A comprehensive block wrapper component that handles padding, backgrounds, and theme-aware gradients. This component provides the foundational structure for blocks while maintaining consistent spacing and visual treatments.

## Version History

### v0.1.1 (2025-01-10)

- Removed redundant setPadding prop
- Simplified padding control through padding object only

### v0.1.0 (2025-01-09)

- Initial implementation
- Added responsive padding system
- Theme-aware gradient backgrounds
- Background visibility controls
- Flexible padding configuration

## Features

### Padding System

Controls vertical padding with responsive values:

- `none`: No padding
- `xsmall`: 1rem/1.5rem (mobile/desktop)
- `small`: 2rem/3rem
- `medium`: 4rem/5rem (default)
- `large`: 6rem/8rem
- `xlarge`: 8rem/10rem

```tsx
// Set both top and bottom padding
<BlockWrapperBeta
  padding={{ top: 'medium', bottom: 'large' }}
>
  {/* Block content */}
</BlockWrapperBeta>

// Remove padding
<BlockWrapperBeta
  padding={{ top: 'none', bottom: 'none' }}
>
  {/* Block content without padding */}
</BlockWrapperBeta>
```

### Background Variants

Supports various background styles:

- Solid colors (theme-based)
- Gradient up/down
- Transparent
- Hidden background option

```tsx
<BlockWrapperBeta theme="primary" background="gradientUp">
  {/* Content with gradient background */}
</BlockWrapperBeta>
```

## Props

| Prop           | Type                                            | Default   | Description                      |
| -------------- | ----------------------------------------------- | --------- | -------------------------------- |
| theme          | 'light' \| 'dark' \| 'primary' \| 'secondary'   | 'light'   | Background theme                 |
| padding        | PaddingProps                                    | undefined | Top/bottom padding configuration |
| background     | 'gradientUp' \| 'gradientDown' \| 'transparent' | undefined | Background style                 |
| hideBackground | boolean                                         | undefined | Hides background completely      |
| className      | string                                          | undefined | Additional CSS classes           |

## Common Use Cases

1. **Standard Block**

```tsx
<BlockWrapperBeta theme="light" padding={{ top: 'medium', bottom: 'medium' }}>
  <BlockContent />
</BlockWrapperBeta>
```

2. **Gradient Section**

```tsx
<BlockWrapperBeta
  theme="dark"
  background="gradientDown"
  padding={{ top: 'large', bottom: 'large' }}
>
  <BlockContent />
</BlockWrapperBeta>
```

3. **Minimal Wrapper**

```tsx
<BlockWrapperBeta setPadding={false} hideBackground>
  <BlockContent />
</BlockWrapperBeta>
```

## Best Practices

1. Use consistent padding patterns
2. Consider mobile/desktop spacing differences
3. Use gradients sparingly for impact
4. Combine with BlockSpacingBeta for complete spacing control

## Integration with Other Components

BlockWrapperBeta works best when used with:

- BlockSpacingBeta for vertical rhythm
- BlockThemeBeta for advanced theming
- Container components for width constraints

## Future Considerations

Potential future enhancements:

- [ ] Border radius options
- [ ] Pattern backgrounds
- [ ] Custom gradient configurations
- [ ] Animation options
- [ ] More background blend modes

## Contributing

When making changes to BlockWrapperBeta:

1. Update version history in this readme
2. Document breaking changes
3. Consider responsive behavior
4. Test with various content types and lengths
