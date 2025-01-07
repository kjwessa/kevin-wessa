# Page

A high-level component that provides consistent page structure and handles common page-level concerns such as metadata, SEO, and layout management. It serves as a wrapper for individual pages in your application.

## Features

- Metadata management
- SEO optimization
- Layout integration
- Theme handling
- Analytics support
- Loading states
- Error boundaries
- Transition effects

## Usage

```tsx
// Basic usage
<Page title="Home">
  <Content />
</Page>

// With metadata
<Page
  title="Product"
  description="Product description"
  image="/og-image.jpg"
>
  <Content />
</Page>

// With layout options
<Page
  title="About"
  layout="sidebar"
  theme="dark"
>
  <Content />
</Page>
```

## Props

| Prop          | Type                               | Default     | Description      |
| ------------- | ---------------------------------- | ----------- | ---------------- |
| `title`       | `string`                           | Required    | Page title       |
| `description` | `string`                           | -           | Meta description |
| `image`       | `string`                           | -           | OG image URL     |
| `layout`      | `'default' \| 'sidebar' \| 'full'` | `'default'` | Layout type      |
| `theme`       | `'light' \| 'dark'`                | `'light'`   | Theme variant    |
| `children`    | `ReactNode`                        | Required    | Page content     |

## Examples

### Basic Page

```tsx
<Page title="Welcome" description="Welcome to our website">
  <Section>
    <Container>
      <h1>Welcome</h1>
      <p>Main content goes here</p>
    </Container>
  </Section>
</Page>
```

### With Sidebar Layout

```tsx
<Page title="Documentation" layout="sidebar">
  <GridBeta cols={12}>
    <GridItemBeta colSpan={3}>
      <Sidebar />
    </GridItemBeta>
    <GridItemBeta colSpan={9}>
      <Content />
    </GridItemBeta>
  </GridBeta>
</Page>
```

### With Theme

```tsx
<Page title="Dark Mode" theme="dark">
  <ThemeProvider theme="dark">
    <Content />
  </ThemeProvider>
</Page>
```

## Best Practices

1. **Metadata**

   - Use descriptive titles
   - Provide descriptions
   - Include OG images
   - Optimize for SEO

2. **Layout Selection**

   - Match content needs
   - Consider hierarchy
   - Plan responsively
   - Maintain consistency

3. **Theme Usage**
   - Follow brand guidelines
   - Consider contrast
   - Test accessibility
   - Plan transitions

## Accessibility Considerations

1. **Document Structure**

   - Proper heading hierarchy
   - ARIA landmarks
   - Skip links
   - Focus management

2. **Theme Contrast**
   - Color ratios
   - Text legibility
   - Interactive elements
   - Visual indicators

## System Integration

1. **With Router**

```tsx
<Route
  path="/about"
  element={
    <Page title="About Us">
      <AboutContent />
    </Page>
  }
/>
```

2. **With Analytics**

```tsx
<Page title="Products" onMount={() => trackPageView('/products')}>
  <Products />
</Page>
```

3. **With Error Boundary**

```tsx
<Page title="Dashboard" errorFallback={<ErrorPage />}>
  <Dashboard />
</Page>
```

## Common Use Cases

1. **Content Pages**

   - Landing pages
   - About pages
   - Contact forms
   - Terms of service

2. **Application Views**

   - Dashboards
   - Settings pages
   - Profile views
   - Admin panels

3. **Marketing Pages**

   - Product pages
   - Feature lists
   - Pricing tables
   - Case studies

4. **Documentation**
   - API documentation
   - User guides
   - Technical docs
   - Release notes

## Performance Notes

1. **Metadata Handling**

   - Efficient updates
   - Minimal reflows
   - Optimized loading
   - Cache management

2. **Layout Performance**
   - Component lazy loading
   - Code splitting
   - Bundle optimization
   - Resource management

## Troubleshooting

1. **SEO Issues**

   - Check metadata
   - Verify structure
   - Test indexing
   - Monitor rankings

2. **Layout Problems**

   - Check responsiveness
   - Test breakpoints
   - Verify content flow
   - Monitor shifts

3. **Theme Issues**
   - Check contrast
   - Test transitions
   - Verify inheritance
   - Monitor flashes

## Related Components

- `LayoutBeta`: Layout management
- `SectionBeta`: Content sections
- `ContainerBeta`: Width constraints
- `MetaTags`: SEO management

## SEO Integration

1. **Meta Tags**

```tsx
<Page
  title="Product"
  meta={{
    description: 'Product description',
    keywords: 'product, features, benefits',
    robots: 'index, follow',
    canonical: 'https://example.com/product',
  }}
>
  <Content />
</Page>
```

2. **Structured Data**

```tsx
<Page
  title="Article"
  structuredData={{
    '@type': 'Article',
    headline: 'Article Title',
    datePublished: '2024-01-01',
    author: {
      '@type': 'Person',
      name: 'Author Name',
    },
  }}
>
  <Article />
</Page>
```

## Advanced Features

1. **Analytics Integration**

   - Page view tracking
   - Event monitoring
   - User behavior
   - Performance metrics

2. **Error Handling**
   - Error boundaries
   - Fallback UI
   - Error reporting
   - Recovery options
