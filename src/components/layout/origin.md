# Origin: Layout System Evolution

## Overview
This document tracks the evolution of the Omnia layout system, recording key changes, design decisions, and future considerations across all layout components.

## Core Principles
1. **Predictable Patterns**: Every component and style follows consistent patterns
2. **Theme-First**: Dark/light themes with inversion capabilities
3. **Typography-Driven**: Comprehensive type system with fluid scaling
4. **Separation of Concerns**: Clear distinction between layout and theming

## System Architecture

### Layout Components
- Sections handle theme context and visual containers
- Containers manage layout spacing and structure
- Components maintain self-contained styles

### Typography System
- Fluid typography using clamp()
- Semantic type scale (large, medium, small)
- Consistent line heights and letter spacing

## Changelog

### 2025-01-09
#### BlockSpacingBeta
- Initial implementation of spacing system with customizable padding and margin
- Added support for responsive spacing variants
- Integrated with BlockWrapper for consistent spacing patterns

#### BlockThemeBeta
- Implemented base theming system with light/dark variants
- Added primary/secondary theme support
- Introduced overlay system with light/medium/dark options
- Added glass effect support

#### BlockWrapperBeta
- Created base wrapper component for standardizing block structure
- Integrated theme and spacing capabilities
- Added support for custom element types via 'as' prop

## Design Decisions & Patterns
- Beta designation indicates components under active development
- All layout components use class-variance-authority for variant management
- Consistent use of forwardRef for proper component composition
- Mobile-first responsive design approach
- Theme values cascade predictably through data-theme attributes
- Components should not affect external spacing
- Semantic spacing values and type classes

## Open Questions & Future Considerations

### Component Architecture
- [ ] Should we standardize the order of variant props across all components?
- [ ] Consider extracting common variant patterns into shared utilities
- [ ] Evaluate performance impact of nested theme/spacing components

### Theming System
- [ ] Explore dynamic theme generation based on design tokens
- [ ] Consider adding theme inheritance capabilities
- [ ] Evaluate need for theme context vs prop-based theming

### Spacing System
- [ ] Standardize spacing scale across all components
- [ ] Consider automatic spacing adjustment based on viewport
- [ ] Evaluate negative margin use cases

### Future Improvements
- [ ] Component composition guidelines
- [ ] Performance optimization strategies
- [ ] Testing patterns for layout components
