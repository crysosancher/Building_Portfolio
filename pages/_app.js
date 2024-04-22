import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"/>
           <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I'm a Developer I Can Develop Anything You Want"
        />
        <meta
          name="keywords"
          content="vibhu Pandey,vibhu,pandey,vibhu portfolio, vibhu cryso,cryso, cryso portfolio, cryso portfolio website, cryso website, cryso portfolio website, cryso portfolio, cryso media, cryso media website, cryso media portfolio, cryso media portfolio website, cryso media website, cryso media portfolio website, cryso media portfolio, cryso media, cryso media website, cryso media portfolio, cryso media portfolio website, cryso media website, cryso media portfolio website, cryso media portfolio, cryso media, cryso media website"
        />
        <meta
          property="og:image"
          content="Vibhu Pandey"
        />
        <meta property="og:title" content="Vibhu Pandey" />
        <meta
          property="og:description"
          content="As a developer, I'm all about making your dreams click! I can whip up anything you dream of into digital reality. From sleek websites to nifty apps, I've got the knack to turn your ideas into code magic. Think it, and I'll make it happen – that's my specialty. Let's chat about your vision and watch it come alive on screen!"
        />
        <meta property="og:URL" content="vibhu " />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="/favicons/favicons.ico" />
        <meta
          name="google-site-verification"
          content="sJN2MPzgDpzPOlooLsyGEpQUDoaPdXM9OYMBoCGuzHU"
        
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
