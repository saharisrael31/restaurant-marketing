import React from 'react';

import RestaurantPreview from '../restaurant-preview/restaurant-preview.component';
import { restaurants } from '../../db/google-ads-rest-list'

import './restaurant-preview-list.styles.scss';


const RestaurantPreviewList = (props) => (
    <div>
        {
            restaurants.map(restaurant => ( <RestaurantPreview key={restaurant.id} restaurant={restaurant} /> ))
        }
    </div>
);

export default RestaurantPreviewList;