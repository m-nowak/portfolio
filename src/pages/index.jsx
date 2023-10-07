import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import TwitterClone from "../components/TwitterClone";
import NetflixClone from "../components/NetflixClone";
import GoogleClone from "../components/GoogleClone";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Michal Nowak</title>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="author" content="Michal Nowak" />
        <meta
          name="description"
          content="I'm a full stack developer located in Rugby, UK."
        />
        <meta
          name="google-site-verification"
          content="Glqg7vGJ7wgGyKTyzDELG0d4T49QXWkLiaxb58kq5h4"
        />
        {/* OG */}
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Michal Nowak" />
        <meta property="og:type" content="portfolio website" />
        <meta
          property="og:description"
          content="I'm a full stack developer located in Rugby, UK."
        />
        <meta property="og:image" content="/icon_256.png" />
        <meta property="og:url" content="https://www.michalnowak.co.uk/" />

        <link rel="canonical" href="https://www.michalnowak.co.uk/" />

        {/* Icons */}
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content="Michal Nowak" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Apple */}
        <meta name="apple-mobile-web-app-title" content="Michal Nowak" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="grey" />

        {/* MS */}
        <meta name="msapplication-TileColor" content="grey" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </Head>
      <main className="flex flex-col min-h-screen max-w-full">
        <Navbar />
        <Hero />
        <About />
        <Work />
        {/* <TwitterClone />
        <NetflixClone />
        <GoogleClone /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
