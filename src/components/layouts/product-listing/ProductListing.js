import React from 'react';
import './productListing.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import NavbarBookCategory from '../navbar/NavbarBookCategory';
import CarouselFadeExample from '../carousels/carousels';
import { BookData } from '../../../util/BookData';
import "bootstrap/dist/css/bootstrap.min.css";

const ProductListing = () => {
    return(
        <div className="product-listing-container">
            <NavbarBookCategory/>
            <div className="container">
                <h2 style={{ textAlign: 'center' }}>Here are some <span className="text-primary">books</span> that you might like</h2>
                <div className="listing-container">
                    {BookData.slice(0,4).map((book) => (
                         <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>
                <CarouselFadeExample></CarouselFadeExample>
                <h2 style={{ textAlign: 'center' }}>Best Seller</h2>
                <div className="listing-container">
                    {BookData.slice(0,4).map((book) => (
                         <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>
                <CarouselFadeExample></CarouselFadeExample>
                <h2 style={{ textAlign: 'center' }}>The Goods Shelf</h2>
                <div className="listing-container">
                    {BookData.slice(0,4).map((book) => (
                         <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>
                <CarouselFadeExample></CarouselFadeExample>
                <h2 style={{ textAlign: 'center' }}>The Mag Shelf</h2>
                <div className="listing-container">
                    {BookData.slice(0,4).map((book) => (
                         <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductListing;