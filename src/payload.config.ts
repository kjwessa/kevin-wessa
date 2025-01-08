//* Import Node Modules
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

//* Import Plugins
import { postgresAdapter } from '@payloadcms/db-postgres'
import { plugins } from './plugins'
import { defaultLexical } from './fields/defaultLexical'

//* Import Collections
import { Categories } from './collections/Categories/config'
import { Media } from './collections/Media/config'
import { Pages } from './collections/Pages/config'
import { Posts } from './collections/Posts/config'
import { Users } from './collections/Users/config'

//* Import Globals
import { Footer } from './globals/Footer/config'
import { Header } from './globals/Header/config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

//* Build Configuration
export default buildConfig({
  admin: {
    components: {
      beforeLogin: [],
      beforeDashboard: [],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit

  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL,
      max: process.env.NODE_ENV === 'production' ? 50 : 5,
      min: 0,
      connectionTimeoutMillis: 10000,
      idleTimeoutMillis: 1000,
      allowExitOnIdle: true,
      maxUses: 1000,
      statement_timeout: 60000,
      application_name: process.env.NODE_ENV === 'production' ? 'kwessa-prod' : 'kwessa-dev',
      keepAlive: false,
    },
    push: false,
    migrationDir: './src/migrations',
    idType: 'uuid',
  }),
  collections: [Pages, Posts, Media, Categories, Users],
  editor: defaultLexical,
  globals: [Header, Footer],
  plugins: [...plugins],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
