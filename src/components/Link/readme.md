# Link (CMSLink)

A versatile link component that integrates with Payload CMS and Next.js, supporting both standard links and button-styled links with various appearances and behaviors.

## Features

- Payload CMS integration
- Next.js Link support
- Multiple appearance styles (inline, button variants)
- Reference-based linking
- External link support
- New tab handling
- Button styling options
- Automatic URL construction

## Usage

```tsx
// Basic inline link
<CMSLink
  url="/about"
  label="About Us"
/>

// Button-styled link
<CMSLink
  url="/contact"
  appearance="primary"
  label="Contact Us"
/>

// CMS reference link
<CMSLink
  type="reference"
  reference={{
    relationTo: 'posts',
    value: {
      slug: 'my-blog-post'
    }
  }}
  label="Read Post"
/>

// External link in new tab
<CMSLink
  url="https://example.com"
  newTab={true}
  label="External Link"
/>
```

## Props

| Prop         | Type                                                                | Default    | Description                   |
| ------------ | ------------------------------------------------------------------- | ---------- | ----------------------------- |
| `type`       | `'custom' \| 'reference' \| null`                                   | -          | Link type                     |
| `appearance` | `'inline' \| ButtonProps['variant']`                                | `'inline'` | Visual style                  |
| `label`      | `string \| null`                                                    | -          | Link text                     |
| `url`        | `string \| null`                                                    | -          | Direct URL                    |
| `newTab`     | `boolean \| null`                                                   | `false`    | Open in new tab               |
| `reference`  | `{ relationTo: string, value: object \| string \| number } \| null` | -          | CMS reference                 |
| `size`       | `ButtonProps['size'] \| null`                                       | -          | Button size (when applicable) |
| `className`  | `string`                                                            | -          | Additional CSS classes        |
| `children`   | `React.ReactNode`                                                   | -          | Child elements                |

## Examples

### Basic Navigation

```tsx
<CMSLink url="/products" label="View Products" appearance="inline" />
```

### Call to Action Button

```tsx
<CMSLink url="/signup" label="Get Started" appearance="primary" size="lg" />
```

### CMS Content Reference

```tsx
<CMSLink
  type="reference"
  reference={{
    relationTo: 'projects',
    value: {
      slug: 'featured-project',
    },
  }}
  appearance="secondary"
  label="View Project"
/>
```

### External Link with Icon

```tsx
<CMSLink url="https://docs.example.com" newTab={true} appearance="ghost">
  <span>Documentation</span>
  <ExternalLinkIcon className="ml-2 h-4 w-4" />
</CMSLink>
```

## Best Practices

1. **Usage**

   - Use semantic labels
   - Choose appropriate appearances
   - Consider context
   - Handle external links properly

2. **Accessibility**

   - Provide clear labels
   - Use descriptive text
   - Indicate external links
   - Consider focus states

3. **Performance**
   - Use Next.js Link properly
   - Avoid unnecessary rerenders
   - Optimize CMS references
   - Handle loading states

## Customization

### Custom Styling

```tsx
<CMSLink url="/custom" className="custom-link-class" appearance="inline">
  <span className="custom-content">Custom Link</span>
</CMSLink>
```

### With Button Variants

```tsx
<CMSLink url="/action" appearance="primary" size="lg" className="custom-button">
  Custom Button Link
</CMSLink>
```

## Integration

### With Payload CMS

```tsx
import type { Page } from '@/payload-types'

interface Props {
  pageData: Page
}

export function PageLink({ pageData }: Props) {
  return (
    <CMSLink
      type="reference"
      reference={{
        relationTo: 'pages',
        value: pageData,
      }}
      label={pageData.title}
    />
  )
}
```

### With Navigation

```tsx
<nav>
  {navItems.map((item) => (
    <CMSLink
      key={item.id}
      url={item.url}
      label={item.label}
      appearance="ghost"
      className="nav-link"
    />
  ))}
</nav>
```

## Common Use Cases

1. **Navigation**

   - Menu items
   - Breadcrumbs
   - Footer links
   - Sidebar navigation

2. **Call to Action**

   - Button links
   - Hero sections
   - Card actions
   - Form submissions

3. **Content References**

   - Blog posts
   - Project links
   - Team members
   - Related content

4. **External Links**
   - Documentation
   - Social media
   - External resources
   - Downloads

## Theme Integration

### Variables

```css
.cms-link {
  --link-color: var(--color-link);
  --link-hover: var(--color-link-hover);
  --link-active: var(--color-link-active);
  --link-visited: var(--color-link-visited);
}
```

### Dark Mode

```css
.dark .cms-link {
  --link-color: var(--color-link-dark);
  --link-hover: var(--color-link-hover-dark);
  --link-active: var(--color-link-active-dark);
  --link-visited: var(--color-link-visited-dark);
}
```

## Error Handling

```tsx
<CMSLink
  type="reference"
  reference={reference}
  fallbackUrl="/404"
  onError={(error) => {
    console.error('Link error:', error)
    // Handle fallback behavior
  }}
/>
```

## Responsive Behavior

```tsx
<CMSLink
  url="/responsive"
  className="text-sm md:text-base lg:text-lg"
  appearance={{
    base: 'ghost',
    md: 'secondary',
    lg: 'primary',
  }}
>
  Responsive Link
</CMSLink>
```
