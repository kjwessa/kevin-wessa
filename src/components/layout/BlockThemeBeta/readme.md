# BlockThemeBeta

## Overview
BlockThemeBeta is a layout component that provides theme context and background colors. It uses the global theme system defined in globals.css and follows the same patterns as the ThemeBeta component for consistent theming across the application.

## Features
- Theme context management (light/dark/inherit/invert)
- Semantic background colors (default/primary/secondary/accent)
- Smooth color transitions
- Component polymorphism via 'as' prop

## Usage

```tsx
import { BlockThemeBeta } from '@/components/layout/BlockThemeBeta'

// Basic usage with theme
<BlockThemeBeta theme="dark">
  {/* Content with dark theme */}
</BlockThemeBeta>

// With background color
<BlockThemeBeta theme="light" background="primary">
  {/* Content with light theme and primary background */}
</BlockThemeBeta>

// Inheriting parent theme
<BlockThemeBeta theme="inherit" background="secondary">
  {/* Content inherits parent theme with secondary background */}
</BlockThemeBeta>

// Inverting parent theme
<BlockThemeBeta theme="invert">
  {/* Content with inverted theme */}
</BlockThemeBeta>
```

## Props

| Prop       | Type                                          | Default   | Description                          |
|------------|-----------------------------------------------|-----------|--------------------------------------|
| theme      | 'light' \| 'dark' \| 'inherit' \| 'invert'    | 'inherit' | Controls theme context              |
| background | 'default' \| 'primary' \| 'secondary' \| 'accent' | 'default' | Sets semantic background color       |
| as         | ElementType                                   | 'div'     | Element type to render as            |
| className  | string                                        | undefined | Additional CSS classes               |
| children   | React.ReactNode                               | required  | Content to be themed                 |

## Theme System
The component uses CSS variables defined in globals.css for colors:
- Background colors (--color-background, --color-primary, etc.)
- Text colors (--color-foreground, --color-primary-foreground, etc.)
- Automatic dark/light mode handling via data-theme attributes

## Best Practices
1. Use 'inherit' theme by default to respect parent theme context
2. Choose semantic background colors based on content purpose
3. Avoid deep nesting of theme changes
4. Use 'invert' theme sparingly and only for specific UI needs

## Example with Other Layout Components

```tsx
<BlockThemeBeta theme="light">
  <BlockWrapperBeta padding={{ top: 'large', bottom: 'large' }}>
    <BlockContainerBeta size="medium">
      <BlockThemeBeta theme="invert" background="primary">
        {/* Inverted theme content */}
      </BlockThemeBeta>
    </BlockContainerBeta>
  </BlockWrapperBeta>
</BlockThemeBeta>
```

## Differences from ThemeBeta

BlockThemeBeta is specifically designed for block layouts and differs from ThemeBeta in several ways:
1. No theme inheritance or inversion
2. Direct color classes instead of semantic tokens
3. Simplified API focused on block use cases

## Contributing

When making changes to BlockThemeBeta:
1. Update version history in this readme
2. Document breaking changes
3. Consider backward compatibility
4. Test with existing block components
