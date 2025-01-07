# LayoutBeta

A foundational layout component that provides consistent page structure and handles common layout patterns. It manages the overall page layout including header, footer, and main content areas.

## Features

- Consistent page structure
- Header and footer management
- Main content area
- Responsive behavior
- Theme integration
- Accessibility patterns
- Navigation support
- Skip links

## Usage

```tsx
// Basic usage
<LayoutBeta>
  <Content />
</LayoutBeta>

// With header and footer
<LayoutBeta
  header={<Header />}
  footer={<Footer />}
>
  <Content />
</LayoutBeta>

// With navigation
<LayoutBeta
  header={<Header />}
  navigation={<Navigation />}
  footer={<Footer />}
>
  <Content />
</LayoutBeta>
```

## Props

| Prop         | Type         | Default  | Description                    |
| ------------ | ------------ | -------- | ------------------------------ |
| `header`     | `ReactNode`  | -        | Header component               |
| `footer`     | `ReactNode`  | -        | Footer component               |
| `navigation` | `ReactNode`  | -        | Navigation component           |
| `children`   | `ReactNode`  | Required | Main content                   |
| `skipLinks`  | `SkipLink[]` | -        | Array of skip navigation links |

### SkipLink Type

```typescript
type SkipLink = {
  label: string
  target: string
}
```

## Examples

### Basic Page Layout

```tsx
<LayoutBeta header={<Header />} footer={<Footer />}>
  <main>
    <h1>Page Title</h1>
    <Content />
  </main>
</LayoutBeta>
```

### With Navigation

```tsx
<LayoutBeta
  header={<Header />}
  navigation={<MainNav />}
  footer={<Footer />}
  skipLinks={[
    { label: 'Skip to content', target: '#main' },
    { label: 'Skip to navigation', target: '#nav' },
  ]}
>
  <main id="main">
    <Content />
  </main>
</LayoutBeta>
```

### Complex Layout

```tsx
<LayoutBeta header={<Header />} navigation={<Navigation />} footer={<Footer />}>
  <GridBeta cols={12}>
    <GridItemBeta colSpan={8}>
      <main>
        <Content />
      </main>
    </GridItemBeta>
    <GridItemBeta colSpan={4}>
      <Sidebar />
    </GridItemBeta>
  </GridBeta>
</LayoutBeta>
```

## Best Practices

1. **Structure**

   - Use semantic HTML
   - Include skip links
   - Maintain hierarchy
   - Consider flow

2. **Navigation**

   - Clear wayfinding
   - Keyboard support
   - Mobile adaptation
   - Consistent patterns

3. **Content Organization**
   - Logical structure
   - Clear hierarchy
   - Responsive layout
   - Content priority

## Accessibility Considerations

1. **Skip Links**

   - Provide skip navigation
   - Target main content
   - Keyboard focus
   - Visual feedback

2. **Semantic Structure**

   - Use proper landmarks
   - ARIA labels
   - Focus management
   - Screen reader support

3. **Navigation**
   - Keyboard navigation
   - Focus indicators
   - Clear labeling
   - Mobile accessibility

## System Integration

1. **With Theme**

```tsx
<ThemeProvider>
  <LayoutBeta>
    <Content />
  </LayoutBeta>
</ThemeProvider>
```

2. **With Router**

```tsx
<Router>
  <LayoutBeta>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </LayoutBeta>
</Router>
```

3. **With Context**

```tsx
<AuthProvider>
  <LayoutBeta>
    <ProtectedContent />
  </LayoutBeta>
</AuthProvider>
```

## Common Use Cases

1. **Website Layout**

   - Marketing sites
   - Documentation
   - Applications
   - Portfolios

2. **Application Structure**

   - Admin panels
   - Dashboards
   - User portals
   - Content management

3. **Content Organization**

   - Blog layouts
   - Article pages
   - Product pages
   - Landing pages

4. **Navigation Patterns**
   - Top navigation
   - Side navigation
   - Combined patterns
   - Mobile navigation

## Performance Notes

1. **Layout Performance**

   - Minimal reflows
   - Efficient updates
   - Layout stability
   - Paint optimization

2. **Navigation Handling**
   - Lazy loading
   - Code splitting
   - Route prefetching
   - Transition management

## Troubleshooting

1. **Layout Issues**

   - Check structure
   - Verify landmarks
   - Test responsiveness
   - Validate hierarchy

2. **Navigation Problems**

   - Check routes
   - Test transitions
   - Verify links
   - Check mobile

3. **Accessibility Issues**
   - Test skip links
   - Verify focus
   - Check ARIA
   - Test screen readers

## Related Components

- `Header`: Page header
- `Footer`: Page footer
- `Navigation`: Site navigation
- `Container`: Content wrapper

## Theme Integration

1. **Layout Theme**

```typescript
const layoutTheme = {
  header: {
    height: 'var(--header-height)',
    background: 'var(--header-bg)',
  },
  footer: {
    padding: 'var(--footer-padding)',
    background: 'var(--footer-bg)',
  },
  main: {
    minHeight: 'var(--main-min-height)',
    background: 'var(--main-bg)',
  },
}
```

2. **Responsive Behavior**

```typescript
const breakpoints = {
  sm: 'var(--breakpoint-sm)',
  md: 'var(--breakpoint-md)',
  lg: 'var(--breakpoint-lg)',
}
```

## Advanced Features

1. **Layout Modes**

   - Fixed header
   - Sticky footer
   - Full height
   - Overlay navigation

2. **State Management**
   - Navigation state
   - Layout context
   - Theme switching
   - Responsive state
