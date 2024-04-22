import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Newsletter from "../src/components/Newsletter";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layout/Layout";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <Head>
      {/* <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" /> */}
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Are you looking for a one-stop destination to access the latest and greatest content, for FREE? You've come to the right place! Join handpicked WhatsApp groups and Telegram channels where you can network, share insights, and stay updated on industry trends."
        />
        <meta
          name="keywords"
          content="Shiva,Shiva family,Shiva birthday,stats,donate,gdrive,Shiva website,Shiva webpage,Shiva community,Shiva bot,whatsapp group,whatsapp bot,insta downloader,youtube downloader,movies,series,technology,news,programming,crypto,stocks,anime,sports,sticker,bot,study,meme,gaming,automobile,astronomy,space,bgmi,coc,status,Shiva whatsapp group,Shiva telegram group,Shiva telegram channel,Shiva facebook group,Shiva discord channel"
        />
        <meta
          property="og:image"
          content="Shiva"
        />
        <meta property="og:title" content="Shiva" />
        <meta
          property="og:description"
          content="Are you looking for a one-stop destination to access the latest and greatest content, for FREE? You've come to the right place! Join handpicked WhatsApp groups and Telegram channels where you can network, share insights, and stay updated on industry trends."
        />
        <meta property="og:URL" content="Shiva" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="sJN2MPzgDpzPOlooLsyGEpQUDoaPdXM9OYMBoCGuzHU"
        />
        <title>Cryso | Portfolio</title>
      </Head>
      <Home />
      {/* HERO */}
      {/* PROCESS */}
      <Process />
      {/* /PROCESS */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* SKILLS */}
      {/* <Skills /> */}
      {/* /SKILLS */}
      {/* SERVICES */}
      <Service />
      {/* /SERVICES */}
      {/* TESTIMONIALS */}
      {/* <Testimonial /> */}
      {/* /TESTIMONIALS */}
      {/* PARTNERS */}
      {/* <Partners /> */}
      {/* /PARTNERS */}
      {/* NEWS */}
      {/* <News /> */}
      {/* <Newsletter /> */}
      <Contact />
    </Layout>
  );
};
export default Index;
