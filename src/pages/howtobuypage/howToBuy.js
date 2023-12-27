import React from 'react';
import Navbar from '../../components/layouts/navbar/Navbar';
import Footer from '../../components/layouts/footer/Footer';
import Instructions from '../../components/layouts/instruction/instruction';

const ShoppingCartInstructions = () => {
  return (
        <section>
            <Navbar darkTheme={ true } />

            <Instructions/>

            <Footer />
        </section>
    );
};

export default ShoppingCartInstructions;
