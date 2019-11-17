import React from 'react';
import Head from 'next/head';
import HeadContent from './HeadContent';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <HeadContent />
        <title>JMEChristian Digital</title>
      </Head>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
