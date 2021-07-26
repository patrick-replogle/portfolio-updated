import Head from 'next/head';
import Header from '../components/header/header';
import Footer from '../components/footer';

import 'bootstrap/dist/css/bootstrap.css';

import '../styles/globals.css';

const Portfolio = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default Portfolio;
