import Head from 'next/head'
import Nav from './nav/nav'
import Filler from './footer/filler'
import Contact from './footer/contact'
import { useEffect, useRef } from "react";
import { useRouter } from 'next/router'
import GoogleAnalytics from './GoogleAnalytics/GoogleAnalytics'
import SEO from './SEO/SEO'

import SmoothScroll from 'smooth-scroll/dist/smooth-scroll'
import gsap from "gsap"


const Layout = ({ contact, myDude, children }) => {
  const router = useRouter()
  const gaTrackingId = 'UA-131928857-1'

  const tl = gsap.timeline();
  let overlayRef = useRef(null);
  let overlayOpacityRef = useRef(null);

  // MOUNT
  useEffect(() => {
      let scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300,
        easing: 'easeInOutQuart',
      });

      tl.set(overlayRef.current, {display: "block"});
      tl.to(overlayRef.current, {
        delay: 0.25,
        duration: 0.6,
        yPercent: -100,
        // ease: "cubic-bezier(0.215, 0.61, 0.355, 1)"
        // ease: "cubic-bezier(.17,.67,.83,.67)"
        ease: "cubic-bezier(.25,.75,.5,1.25)",
      });
      tl.set(overlayRef.current, {display: "none"});
      tl.set(overlayOpacityRef.current, {display: "block"});
      tl.to(overlayOpacityRef.current, {
        delay: -0.2,
        duration: 0.6,
        opacity: 0,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)"
        // ease: "cubic-bezier(.17,.67,.83,.67)"
        // ease: "cubic-bezier(.25,.75,.5,1.25)",
      });
      tl.set(overlayOpacityRef.current, {display: "none"});
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
        <link
          rel="preload"
          href="/fonts/SangBleuOGSans-Regular-WebXL.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SangBleuOGSans-Regular-WebXL.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SangBleuOGSans-Light-WebXL.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SangBleuOGSans-Light-WebXL.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="site-transition-overlay" ref={overlayRef}></div>
      <div className="site-transition-overlay-opacity" ref={overlayOpacityRef}></div>

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
