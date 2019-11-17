import React from 'react';

import FooterMenu from './FooterMenu';
import CTA from './CTA';

const Footer = () => {
  return (
    <section id='footer' className='mt-16'>
      <CTA />
      <FooterMenu />
    </section>
  );
};

export default Footer;
