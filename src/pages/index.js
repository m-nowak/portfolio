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
        <title>Michal Nowak</title>
        <meta
          name="description"
          content="I'm a full stack developer located in Rugby, UK."
        />
        <link rel="canonical" href="https://www.michalnowak.co.uk/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:locale" content="en_GB" />
        {/* og */}
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Michal Nowak" />
        <meta property="og:type" content="portfolio website" />
        <meta
          property="og:description"
          content="I'm a full stack developer located in Rugby, UK."
        />
        <meta property="og:image" content="/icon_256.png" />
        <meta property="og:url" content="https://www.michalnowak.co.uk/" />
      </Head>
      <main className="flex flex-col min-h-screen max-w-full">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <TwitterClone />
        <NetflixClone />
        <GoogleClone />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
