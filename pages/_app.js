import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/globals.css';

const Portfolio = ({ Component, pageProps }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>Patrick Replogle's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div style={{ paddingBottom: '6rem' }}>
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
