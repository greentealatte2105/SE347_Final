import React from 'react';
import Navbar from '../../components/layouts/navbar/Navbar';
import Footer from '../../components/layouts/footer/Footer';
import TermsOfUse from '../../components/layouts/shipping-return/shipping-return-policy';

const Terms = () => {
  return (
        <section>
            <Navbar darkTheme={ true } />

            <TermsOfUse/>

            <Footer />
        </section>
    );
};

export default Terms;
