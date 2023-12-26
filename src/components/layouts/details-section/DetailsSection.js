import React, { useState, useEffect, useContext } from 'react';
import './detailsSection.styles.css';
import { useParams, useNavigate } from 'react-router-dom';
import { BookData } from '../../../util/BookData';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { UserContext, CartContext } from '../../../App';
import { FaStar } from 'react-icons/fa';
import useNode from '../../../hooks/useNode';
import Comment from '../comment/comment';

const DetailsSection = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState({});
    const [rating, setRating] = useState(null);
    const user = useContext(UserContext);
    const {cartItems, setCartItems} = useContext(CartContext);
    const [hover, setHover] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        let newData = BookData.filter((book) => book.id === parseInt(id));
        setBookData(newData[0])
    },[id])

    const handleAddToCart = () => {
        if(user) {
            //add to cart
            setCartItems([...cartItems, bookData]);
            alert(`The book ${bookData.book_name} is added to the cart`);
        } else {
            navigate('/login');
            alert("Please Login or Sign up first..");
        }
    }
    const comments = {
        id: 1,
        items: []
    }
    const [commentsData, setCommentsData] = useState(comments);

    const { insertNode, editNode, deleteNode } = useNode();

    const handleInsertNode = (folderId, item) => {
        const finalStructure = insertNode(commentsData, folderId, item);
        setCommentsData(finalStructure);
    };

    const handleEditNode = (folderId, value) => {
        const finalStructure = editNode(commentsData, folderId, value);
        setCommentsData(finalStructure);
    };

    const handleDeleteNode = (folderId) => {
        const finalStructure = deleteNode(commentsData, folderId);
        const temp = { ...finalStructure };
        setCommentsData(temp);
    };
    return (
        <section className="detail-section-container">
            <div className='container'>
                <div className="flex-container">
                    <div className='book-img-container'>
                        <img src={bookData.book_url} alt="book" />
                    </div>

                    <div className='book-detail-container'>
                        <h2>{bookData.book_name}</h2>
                        <p className="text-primary">{bookData.author_name}</p>
                        <p className="book-description">{bookData.book_description}</p>
                        <p><b>Language</b>: {bookData.language}</p>
                        <p><b>Book Length</b> : {bookData.print_length}</p>

                        <h3>&#8377;{bookData.price}</h3>

                        <a onClick={handleAddToCart} className="button-primary">Add To Cart</a>
                    </div>
                </div>
                <h3>Rating and Reviews</h3>
                {[...Array(5)].map( (star, index) => {
                    const currentRating = index + 1;
                    return (
                        <label>
                            <input
                                type='radio'
                                name='rating'
                                value={currentRating}
                                onClick={() => setRating(currentRating)}
                            />
                            <FaStar 
                                className='star' 
                                size={20}
                                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    );
                })}
                <Comment
                    handleInsertNode={handleInsertNode}
                    handleEditNode={handleEditNode}
                    handleDeleteNode={handleDeleteNode}
                    comment={commentsData}
                    user={user}
                />
                <h3>Others</h3>
                    <div className="listing-container">
                        {BookData.slice(0,4).map((book) => (
                            <ProductListingCard key={book.id} bookData={book} />
                        ))}
                    </div>
            </div>
        </section>
    )
}

export default DetailsSection;