import React from 'react';


import './restaurant-preview.styles.scss';

const RestaurantPreview = ({restaurant}) => (
    <div className='restaurant-preview'>
        <h1>{restaurant.name}</h1>
        <div className='images-container'>
            <img src={restaurant.imageUrl[0]} alt='restaurant' />
            <img src={restaurant.imageUrl[0]} alt='restaurant' />
        </div>
        <div className='text-container'>
            <p>{restaurant.about_text[0]}</p>
            <p>{restaurant.about_text[1]}</p>
        </div>
    </div>
);

export default RestaurantPreview;