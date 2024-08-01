import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product } = props;

    const renderCategoryLink = () => {
        if (product.category === 'men') {
            return <Link to="/mens">{product.category}</Link>;
        } else if (product.category === 'women') {
            return <Link to="/womens">{product.category}</Link>;
        } else {
            return <Link to="/kids">{product.category}</Link>;
        }
    };

    return (
        <div className='breadcrum'>
            <Link to="/">Home</Link> <img src={arrow_icon} alt="arrow" />
            <Link to="/shop">Shop</Link> <img src={arrow_icon} alt="arrow" />
            {renderCategoryLink()} <img src={arrow_icon} alt="arrow" />
            <span>{product.name}</span>
        </div>
    );
};

export default Breadcrum;
