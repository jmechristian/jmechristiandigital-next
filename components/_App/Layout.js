import React from 'react';
import Head from 'next/head';
import HeadContent from './HeadContent';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <HeadContent />
        <title>JMEChristian Digital</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
