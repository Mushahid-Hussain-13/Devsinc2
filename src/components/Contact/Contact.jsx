import React from 'react';
import ContactHero from './ContactHero.jsx';
import OurClients from '../OurClients.jsx';
import GlobalPresence from './GlobalPresence.jsx';
import ClientReviews from '../ClientReviews.jsx';
import Idea from '../Idea.jsx';
import Footer from '../Footer.jsx';

const Contact = () => {
  return (
    <>
      <ContactHero />
      <OurClients />
      <GlobalPresence />
      <ClientReviews />
      <Idea />
      <Footer />
    </>
  )
}

export default Contact