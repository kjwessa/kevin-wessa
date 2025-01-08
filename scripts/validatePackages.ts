import fs from 'fs'
import path from 'path'

// Console colors
const colors = {
  blue: '\x1b[34m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m',
}

interface PackageJSON {
  name: string
  version: string
  scripts: Record<string, string>
  dependencies: Record<string, string>
  devDependencies: Record<string, string>
  peerDependencies?: Record<string, string>
}

const REQUIRED_SCRIPTS = [
  'dev',
  'build',
  'start',
  'lint',
  'db:generate',
  'db:migrate',
  'validate:config',
  'validate:blocks',
  'validate:packages',
]

const REQUIRED_PACKAGES = {
  dependencies: [
    '@payloadcms/next',
    '@payloadcms/ui',
    'next',
    'payload',
    'react',
    'react-dom',
    '@payloadcms/db-postgres',
    '@payloadcms/richtext-lexical',
  ],
  devDependencies: [
    '@types/node',
    '@types/react',
    '@types/react-dom',
    'eslint',
    'prettier',
    'typescript',
    'tsx',
    'tailwindcss',
  ],
}

const PACKAGE_VERSION_WARNINGS = {
  next: '15.0.0',
  react: '19.0.0',
  'react-dom': '19.0.0',
  typescript: '5.0.0',
  payload: '3.14.0',
  '@payloadcms/next': '3.14.0',
  '@payloadcms/ui': '3.14.0',
  tsx: '4.19.0',
  tailwindcss: '4.0.0-beta.5',
}

function validatePackageJSON(packageJSON: PackageJSON): boolean {
  let isValid = true
  const errors: string[] = []
  const warnings: string[] = []

  // Validate required scripts
  console.log(`${colors.blue}\nValidating scripts...${colors.reset}`)
  REQUIRED_SCRIPTS.forEach((script) => {
    if (!packageJSON.scripts[script]) {
      errors.push(`Missing required script: ${script}`)
      isValid = false
    }
  })

  // Validate required dependencies
  console.log(`${colors.blue}\nValidating dependencies...${colors.reset}`)
  REQUIRED_PACKAGES.dependencies.forEach((pkg) => {
    if (!packageJSON.dependencies[pkg]) {
      errors.push(`Missing required dependency: ${pkg}`)
      isValid = false
    }
  })

  // Validate required devDependencies
  console.log(`${colors.blue}\nValidating devDependencies...${colors.reset}`)
  REQUIRED_PACKAGES.devDependencies.forEach((pkg) => {
    if (!packageJSON.devDependencies[pkg]) {
      errors.push(`Missing required devDependency: ${pkg}`)
      isValid = false
    }
  })

  // Check package versions
  console.log(`${colors.blue}\nChecking package versions...${colors.reset}`)
  Object.entries(PACKAGE_VERSION_WARNINGS).forEach(([pkg, minVersion]) => {
    const currentVersion = packageJSON.dependencies[pkg] || packageJSON.devDependencies[pkg]
    if (currentVersion) {
      const cleanVersion = currentVersion.replace(/[\^~]/g, '')
      if (cleanVersion < minVersion) {
        warnings.push(`${pkg} version (${cleanVersion}) is below recommended version ${minVersion}`)
      }
    }
  })

  // Check for duplicate dependencies
  console.log(`${colors.blue}\nChecking for duplicate dependencies...${colors.reset}`)
  const allDeps = new Set([
    ...Object.keys(packageJSON.dependencies),
    ...Object.keys(packageJSON.devDependencies),
    ...(packageJSON.peerDependencies ? Object.keys(packageJSON.peerDependencies) : []),
  ])

  const duplicates = Array.from(allDeps).filter((dep) => {
    let count = 0
    if (packageJSON.dependencies[dep]) count++
    if (packageJSON.devDependencies[dep]) count++
    if (packageJSON.peerDependencies?.[dep]) count++
    return count > 1
  })

  if (duplicates.length > 0) {
    warnings.push(`Found duplicate dependencies: ${duplicates.join(', ')}`)
  }

  // Output results
  if (errors.length > 0) {
    console.log(`${colors.red}\nErrors:${colors.reset}`)
    errors.forEach((error) => console.log(`${colors.red}❌ ${error}${colors.reset}`))
  }

  if (warnings.length > 0) {
    console.log(`${colors.yellow}\nWarnings:${colors.reset}`)
    warnings.forEach((warning) => console.log(`${colors.yellow}⚠️ ${warning}${colors.reset}`))
  }

  if (isValid && warnings.length === 0) {
    console.log(`${colors.green}\n✅ All validations passed successfully!${colors.reset}`)
  }

  return isValid
}

async function main() {
  try {
    const packageJSONPath = path.join(process.cwd(), 'package.json')
    const packageJSON = JSON.parse(fs.readFileSync(packageJSONPath, 'utf8'))

    console.log(
      `${colors.blue}\nValidating package.json for ${packageJSON.name}@${packageJSON.version}${colors.reset}`,
    )
    const isValid = validatePackageJSON(packageJSON)

    if (!isValid) {
      process.exit(1)
    }
  } catch (error) {
    console.error(`${colors.red}\nError reading package.json:${colors.reset}`, error)
    process.exit(1)
  }
}

main()
