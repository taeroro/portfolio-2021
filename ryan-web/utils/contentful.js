import { createClient } from 'contentful'

// const IS_PRODUCTION = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === 'main'
const IS_PRODUCTION = true;

export const ContentfulAPI = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: IS_PRODUCTION ? process.env.CONTENTFUL_CDA_TOKEN : process.env.CONTENTFUL_CPA_TOKEN,
  host: IS_PRODUCTION ? 'cdn.contentful.com' : 'preview.contentful.com'
})
