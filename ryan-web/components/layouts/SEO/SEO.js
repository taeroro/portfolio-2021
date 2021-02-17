import Head from 'next/head'

const SEO = ({meta}) => {

  const {
    title,
    description,
    ogGraphic
  } = meta || {
    title: 'Ryan Fan',
    description: 'Ryan Fan is a UI/UX Designer and Creative Technologist helping humans understand machines better.'
  }

  const ogImage = null

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta key="ogTitle" property="og:title" content={title} />
        <meta key="twitterTitle" name="twitter.title" content={title} />

        <meta key="description" name="description" content={description} />
        <meta key="ogDescription" property="og:description" content={description} />
        <meta key="twitterDescription" name="twitter.description" content={description} />

        {ogGraphic &&
          <meta property="og:image" content={ogGraphic.fields.file.url} />
        }
        <meta property="og:type" content="website" />
        <meta name="twitter.card" content="summary" />
        <meta name="twitter.creator" content="DefeatByTweet" />
        <meta name="pinterest" content="nopin" />

        {/* <link rel="icon" sizes="72x72" href="/manifest/favicon-72x72.png" type="image/png" />
        <link rel="shortcut icon" href="/manifest/favicon.ico" /> */}

        <link rel="manifest" href={`/manifest/manifest.json`} />
        <meta name="msapplication-TileColor" content="#1D211E"/>
        <meta name="theme-color" content="#1D211E" />
      </Head>
    </>
  )
}

export default SEO
