import { createClient } from 'contentful'

const IS_PRODUCTION = process.env.VERCEL_GIT_COMMIT_REF === 'main'

export const ContentfulAPI = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: IS_PRODUCTION ? process.env.CONTENTFUL_CDA_TOKEN : process.env.CONTENTFUL_CPA_TOKEN,
  host: IS_PRODUCTION ? 'cdn.contentful.com' : 'preview.contentful.com'
})
