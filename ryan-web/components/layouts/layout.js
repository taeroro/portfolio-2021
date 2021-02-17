import Head from 'next/head'
import Nav from './nav/nav'
import Filler from './footer/filler'
import Contact from './footer/contact'
import { useEffect } from "react";
import { useRouter } from 'next/router'
import GoogleAnalytics from './GoogleAnalytics/GoogleAnalytics'
import SEO from './SEO/SEO'

import SmoothScroll from 'smooth-scroll/dist/smooth-scroll'

const Layout = ({ contact, myDude, children }) => {
  const router = useRouter()
  const gaTrackingId = 'UA-131928857-1'

  useEffect(() => {
      let scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300,
        easing: 'easeInOutQuart',
      });
    });

  return (
    <div>
      {/* <SEO meta={meta} /> */}
      <SEO />

      <Head>
        <title>Ryan Fan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/dqj0nwi.css" />
      </Head>

      <div style={{
        backgroundColor: "#F9f9f9",
        zIndex: 2,
        position: "relative"
      }}>

        <Nav />

        {
          !router.pathname.includes("work") && (
            <div style={{
              width: "100vw",
              height: "69px",
              position: "relative"
            }} />
          )
        }

        {children}

      </div>

      <Filler />

      <Contact contact={contact} myDude={myDude} />

      <GoogleAnalytics trackingId={gaTrackingId} />
    </div>
  )
}

export default Layout
