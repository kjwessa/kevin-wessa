# Block Creation Process

## Directory Structure

```
src/blocks/{BlockName}/
├── config.ts      (create first)
├── Component.tsx  (create second)
└── README.md      (create third)
```

## Step-by-Step Process

### 1. Create `config.ts`

- [ ] Use kebab-case for slug (e.g., `my-block`)
- [ ] Use PascalCase for interfaceName (`{BlockName}Block`)
- [ ] Add labels (singular and plural)
- [ ] Define fields array with proper typing

```ts
import type { Block } from 'payload'

export const MyBlock: Block = {
  slug: 'my-block',
  interfaceName: 'MyBlockBlock',
  labels: {
    singular: 'My Block',
    plural: 'My Blocks',
  },
  fields: [
    // fields here
  ],
}
```

### 2. Add to Pages Collection

- [ ] Import block config at top with other blocks
- [ ] Add to existing blocks array
- [ ] DO NOT modify or delete other blocks

```ts
import { MyBlock } from '@/blocks/MyBlock/config'

// ... in blocks array
blocks: [
  // ... existing blocks
  MyBlock,
] as Block[],
```

### 3. Create `Component.tsx`

- [ ] Add 'use client' directive if needed
- [ ] Import types (ignore type errors until generated)
- [ ] Use explicit prop destructuring
- [ ] Follow semantic HTML practices

```tsx
'use client'

import React from 'react'
import type { MyBlockBlock } from '@/payload-types'

export const MyBlock: React.FC<MyBlockBlock> = ({ field1, field2 }) => {
  return (
    // JSX here
  )
}
```

### 4. Add to RenderBlocks

- [ ] Import component
- [ ] Add to blockComponents object
- [ ] DO NOT modify existing components

```ts
import { MyBlock } from '@/blocks/MyBlock/Component'

const blockComponents = {
  // ... existing components
  myBlock: MyBlock,
} as const
```

### 5. Create `README.md`

- [ ] Document features
- [ ] Show example usage
- [ ] List fields
- [ ] Describe styling
- [ ] Add best practices

### 6. Type Generation

- [ ] Wait for instruction to run build
- [ ] Never try to manually fix type errors
- [ ] Ignore type errors until types are generated

## Critical Rules

### Never ❌

- Delete existing blocks
- Modify other blocks' code
- Try to fix type errors manually
- Change existing block configurations
- Modify the Pages collection structure

### Always ✅

- Wait for instructions about type generation
- Keep all block files in their own directory
- Document before committing
- Follow naming conventions strictly
- Use explicit prop types and destructuring

## Common Mistakes to Avoid

1. Deleting code to fix type errors
2. Modifying existing blocks while adding new ones
3. Changing file structure of other blocks
4. Not waiting for type generation
5. Incomplete documentation
6. Inconsistent naming conventions
