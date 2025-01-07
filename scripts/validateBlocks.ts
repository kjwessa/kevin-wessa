import fs from 'fs'
import path from 'path'

type BlockCheck = {
  name: string
  hasComponent: boolean
  hasConfig: boolean
  location: string
  expectedLocation: string
  issues: string[]
}

function validateBlocks() {
  const workingDir = process.cwd()
  const oldBlocksPath = path.join(workingDir, 'src/components/blocks')
  const correctBlocksPath = path.join(workingDir, 'src/blocks')
  const results: BlockCheck[] = []
  let warnings: string[] = []

  // Check if old directory exists but is empty
  if (fs.existsSync(oldBlocksPath)) {
    const oldDirContents = fs.readdirSync(oldBlocksPath)
    if (oldDirContents.length === 0) {
      warnings.push(
        '⚠️  src/components/blocks directory exists but is empty. Consider removing it.',
      )
    }
  }

  // Ensure src/blocks exists
  if (!fs.existsSync(correctBlocksPath)) {
    fs.mkdirSync(correctBlocksPath, { recursive: true })
  }

  // Get blocks from both locations
  const oldBlocks = fs.existsSync(oldBlocksPath)
    ? fs
        .readdirSync(oldBlocksPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)
    : []

  const correctBlocks = fs.existsSync(correctBlocksPath)
    ? fs
        .readdirSync(correctBlocksPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)
    : []

  // Check blocks in the old location
  oldBlocks.forEach((blockDir) => {
    const currentPath = path.join(oldBlocksPath, blockDir)
    const expectedPath = path.join(correctBlocksPath, blockDir)
    const issues: string[] = []

    const hasComponent = fs.existsSync(path.join(currentPath, 'index.tsx'))
    const hasConfig = fs.existsSync(path.join(currentPath, 'config.ts'))

    if (!hasComponent) {
      issues.push('Missing index.tsx component file')
    }
    if (!hasConfig) {
      issues.push('Missing config.ts file')
    }
    issues.push(`Block needs to be moved from ${currentPath} to ${expectedPath}`)

    results.push({
      name: blockDir,
      hasComponent,
      hasConfig,
      location: currentPath,
      expectedLocation: expectedPath,
      issues,
    })
  })

  // Check blocks in the correct location
  correctBlocks.forEach((blockDir) => {
    const currentPath = path.join(correctBlocksPath, blockDir)
    const issues: string[] = []

    const hasComponent = fs.existsSync(path.join(currentPath, 'index.tsx'))
    const hasConfig = fs.existsSync(path.join(currentPath, 'config.ts'))

    if (!hasComponent) {
      issues.push('Missing index.tsx component file')
    }
    if (!hasConfig) {
      issues.push('Missing config.ts file')
    }

    results.push({
      name: blockDir,
      hasComponent,
      hasConfig,
      location: currentPath,
      expectedLocation: currentPath, // Already in correct location
      issues,
    })
  })

  return { results, warnings }
}

// Run validation
const { results, warnings } = validateBlocks()

// Format output
const output = [
  '=================================',
  'Block Structure Validation Results',
  '=================================',
  '',
  // Show warnings if any exist
  ...(warnings.length > 0 ? [...warnings, ''] : []),
  `Total Blocks Checked: ${results.length}`,
  `Blocks with Issues: ${results.filter((r) => r.issues.length > 0).length}`,
  '',
  '🔍 Detailed Results:',
  '',
  ...results
    .map((block) => [
      `Block: ${block.name}`,
      `Location: ${block.location}`,
      'Status:',
      `  • Component (index.tsx): ${block.hasComponent ? '✅' : '❌'}`,
      `  • Config (config.ts): ${block.hasConfig ? '✅' : '❌'}`,
      block.issues.length > 0 ? 'Issues:' : 'No Issues ✅',
      ...block.issues.map((issue) => `  • ${issue}`),
      '',
    ])
    .flat(),
  '',
  '📋 Summary:',
  `• Total Files Checked: ${results.length * 2}`, // 2 files per block
  `• Missing Components: ${results.filter((r) => !r.hasComponent).length}`,
  `• Missing Configs: ${results.filter((r) => !r.hasConfig).length}`,
  `• Blocks in Wrong Location: ${results.filter((r) => r.location !== r.expectedLocation).length}`,
  '',
  '🔧 Next Steps:',
  '1. Create any missing index.tsx or config.ts files',
  '2. Move remaining blocks from src/components/blocks to src/blocks/',
  '3. Update any import paths that reference these blocks',
  warnings.length > 0 ? '4. Clean up empty directories' : '',
  '',
]
  .filter(Boolean)
  .join('\n')

// Write to console
console.log(output)

// Write to file
const outputPath = path.join(process.cwd(), '.test-output', 'block-validation.txt')
fs.writeFileSync(outputPath, output)
console.log(`\nResults also written to: ${outputPath}`)
