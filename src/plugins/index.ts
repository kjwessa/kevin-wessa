import { Plugin } from 'payload'
import { formBuilder } from './formBuilder'
import { redirects } from './redirects'
import { storage } from './storage'
import { seo } from './seo'

export const plugins: Plugin[] = [redirects, storage, seo, formBuilder]
