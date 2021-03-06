import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/globals.scss';

const Portfolio = ({ Component, pageProps }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>Patrick Replogle's Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Web Developer, React, Javascript" />
        <meta name="author" content="Patrick Replogle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Patrick Replogle's Portfolio Website"
        ></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div style={{ paddingBottom: '10.5rem' }}>
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
