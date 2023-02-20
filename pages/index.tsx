import type { NextPage } from 'next';
import Head from 'next/head';

import Contact from '../components/Contact';
import Footer from '../components/Footer';
import HeaderLine from '../components/HeaderLine';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Work from '../components/Work';

const Home: NextPage = () => {
  const meta = {
    title: 'Wade Fletcher',
    description:
      'Wade Fletcher is a software engineer. He is currently working at Atmos, a startup in the ESG analytics space.',
    // ogImage: '',
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>

        <link rel="icon" href="/favicon.svg" />

        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        {/* <meta property="og:image" content={meta.ogImage} /> */}
      </Head>

      <HeaderLine />

      <main className="mx-auto max-w-2xl text-gray-800 mt-10 px-10 pb-20 gap-5 flex flex-col">
        <Hero />

        <Projects />

        <Work />

        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;
