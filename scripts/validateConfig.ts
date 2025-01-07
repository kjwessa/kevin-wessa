import fs from 'fs'
import path from 'path'

type CheckResult = {
  name: string
  status: 'pass' | 'fail' | 'warn'
  message?: string
}

function validateConfig() {
  const workingDir = process.cwd()
  const results = {
    valid: true,
    checks: [] as CheckResult[],
  }

  // Check if tsconfig.json exists
  const tsconfigPath = path.join(workingDir, 'tsconfig.json')
  if (fs.existsSync(tsconfigPath)) {
    results.checks.push({
      name: 'tsconfig.json',
      status: 'pass',
      message: 'Found at project root',
    })
  } else {
    results.checks.push({
      name: 'tsconfig.json',
      status: 'fail',
      message: 'Not found at project root',
    })
    results.valid = false
  }

  // Check required directories
  const requiredDirs = {
    'src/blocks': 'Block components directory',
    'src/components': 'Shared components directory',
    'src/collections': 'Payload collections directory',
    'src/globals': 'Global configurations directory',
  }

  Object.entries(requiredDirs).forEach(([dir, description]) => {
    const fullPath = path.join(workingDir, dir)
    if (fs.existsSync(fullPath)) {
      results.checks.push({
        name: dir,
        status: 'pass',
        message: `${description} found`,
      })
    } else {
      results.checks.push({
        name: dir,
        status: 'fail',
        message: `${description} not found`,
      })
      results.valid = false
    }
  })

  // Add some warnings for recommended directories
  const recommendedDirs = {
    'src/utilities': 'Utility functions directory',
    'src/hooks': 'Custom hooks directory',
    'src/types': 'TypeScript type definitions directory',
  }

  Object.entries(recommendedDirs).forEach(([dir, description]) => {
    const fullPath = path.join(workingDir, dir)
    if (!fs.existsSync(fullPath)) {
      results.checks.push({
        name: dir,
        status: 'warn',
        message: `${description} recommended but not found`,
      })
    } else {
      results.checks.push({
        name: dir,
        status: 'pass',
        message: `${description} found`,
      })
    }
  })

  return results
}

// Run validation
const results = validateConfig()

// Format output
const output = [
  '=================================',
  'Configuration Validation Results',
  '=================================',
  '',
  results.valid
    ? '✅ Overall Status: All required checks passed!'
    : '❌ Overall Status: Some checks failed!',
  '',
  '🔍 Detailed Results:',
  '',
  // Group by status
  '✅ Passing Checks:',
  ...results.checks
    .filter((check) => check.status === 'pass')
    .map((check) => `  • ${check.name}: ${check.message}`),
  '',
  results.checks.some((check) => check.status === 'fail')
    ? [
        '❌ Failed Checks:',
        ...results.checks
          .filter((check) => check.status === 'fail')
          .map((check) => `  • ${check.name}: ${check.message}`),
        '',
      ].join('\n')
    : '',
  results.checks.some((check) => check.status === 'warn')
    ? [
        '⚠️  Warnings:',
        ...results.checks
          .filter((check) => check.status === 'warn')
          .map((check) => `  • ${check.name}: ${check.message}`),
        '',
      ].join('\n')
    : '',
  '📊 Summary:',
  `  • Total Checks: ${results.checks.length}`,
  `  • Passing: ${results.checks.filter((c) => c.status === 'pass').length}`,
  `  • Failed: ${results.checks.filter((c) => c.status === 'fail').length}`,
  `  • Warnings: ${results.checks.filter((c) => c.status === 'warn').length}`,
  '',
]
  .filter(Boolean)
  .join('\n')

// Write to console
console.log(output)

// Write to file
const outputPath = path.join(process.cwd(), '.test-output', 'config-validation.txt')
fs.writeFileSync(outputPath, output)
console.log(`\nResults also written to: ${outputPath}`)
