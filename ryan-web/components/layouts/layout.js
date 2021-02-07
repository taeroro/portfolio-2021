import Head from 'next/head'
import Nav from './nav/nav'

import Filler from './footer/filler'
import Contact from './footer/contact'

const Layout = ({ contact, myDude, children }) => {
  return (
    <div>
      {/* <SEO meta={meta} /> */}

      <Head>
        <title>Ryan Fan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/dqj0nwi.css" />
      </Head>

      <div style={{
        backgroundColor: "#FFF",
        zIndex: 2,
        position: "relative"
      }}>

        <Nav />

        <div style={{
          width: "100vw",
          height: "69px",
          position: "relative"
        }} />

        {children}

      </div>

      <Filler />

      <Contact contact={contact} myDude={myDude} />

    </div>
  )
}

export default Layout
