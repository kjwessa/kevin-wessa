# BlockContainerBeta

## Overview
BlockContainerBeta is a layout component that manages content width and horizontal padding. It's designed to work with BlockWrapperBeta to provide complete layout control while maintaining a clear separation of concerns.

## Features
- Configurable maximum width through size variants
- Automatic horizontal padding with responsive behavior
- Clean interface for content containment

## Usage

```tsx
import { BlockContainerBeta } from '@/components/layout/BlockContainerBeta'

// Basic usage
<BlockContainerBeta>
  {/* Your content */}
</BlockContainerBeta>

// With size variant
<BlockContainerBeta size="large">
  {/* Wide content */}
</BlockContainerBeta>
```

## Props

| Prop      | Type                                    | Default   | Description                    |
|-----------|----------------------------------------|-----------|--------------------------------|
| size      | 'small' \| 'medium' \| 'large' \| 'full' | 'medium'  | Controls maximum content width |
| className | string                                 | undefined | Additional CSS classes         |
| children  | React.ReactNode                        | required  | Content to be contained        |

## Size Variants

| Variant | Max Width | Use Case                           |
|---------|-----------|-----------------------------------|
| small   | max-w-4xl | Content-focused layouts           |
| medium  | max-w-6xl | Standard content width (default)  |
| large   | max-w-9xl | Wide layouts with multiple columns|
| full    | max-w-none| Full-width layouts               |

## Best Practices
1. Use with BlockWrapperBeta for complete layout control
2. Choose appropriate size variant based on content type
3. Avoid nesting containers
4. Use consistent size variants across similar content types

## Example with BlockWrapperBeta

```tsx
<BlockThemeBeta theme="light">
  <BlockWrapperBeta padding={{ top: 'large', bottom: 'large' }}>
    <BlockContainerBeta size="medium">
      {/* Your content */}
    </BlockContainerBeta>
  </BlockWrapperBeta>
</BlockThemeBeta>
```
