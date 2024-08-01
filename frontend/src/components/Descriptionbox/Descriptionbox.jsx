import React from 'react';
import './Descriptionbox.css';

const Descriptionbox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                An ecommerce website enables businesses to sell products/services online. Customers browse listings, add items to a cart, and securely checkout. Payment gateways facilitate transactions, while user accounts store information. Responsive design ensures accessibility across devices. Security measures protect data, and integration with shipping carriers streamlines logistics. Customer support resolves inquiries, and reviews/promotions enhance credibility, creating a seamless shopping experience.</p>
            </div>
        </div>
    );
}

export default Descriptionbox;
