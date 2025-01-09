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
#### BlockContainerBeta
- Introduced container system for managing content width and horizontal padding
- Implemented size variants: small (max-w-4xl), medium (max-w-6xl), large (max-w-9xl), full (max-w-none)
- Added automatic horizontal padding with responsive behavior
- Designed to work seamlessly with BlockWrapperBeta for complete layout control

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

### BlockSpacingBeta Future
With the introduction of padding controls in BlockWrapperBeta, the role of BlockSpacingBeta needs to be reevaluated:

1. **Current Redundancy**
   - BlockWrapperBeta now handles vertical padding effectively
   - Most spacing needs are covered by the wrapper component
   - No clear unique value proposition for BlockSpacingBeta

2. **Potential Future Uses**
   - Could be repurposed for more specific spacing needs?
   - Might be useful for component-level spacing rather than block-level?
   - Consider deprecating if no clear use case emerges

3. **Decision Points**
   - Should we maintain two components with overlapping functionality?
   - Is there a specific use case we're missing that would justify keeping BlockSpacingBeta?
   - Would component composition be clearer without this additional abstraction?

### Next Steps
- Monitor usage patterns in existing implementations
- Gather feedback on spacing needs not covered by BlockWrapperBeta
- Consider deprecation timeline if no compelling use case is identified

### Future Improvements
- [ ] Component composition guidelines
- [ ] Performance optimization strategies
- [ ] Testing patterns for layout components
