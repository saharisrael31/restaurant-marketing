import React from 'react';


import './header.styles.scss';

const Header = (props) => (
    <div className='header'>
        <h1>מסעדות מומלצות בצפון</h1>
        <div className='links'>
            <a href='/search-by-location'>חפש לפי מיקום</a>
            <a href='custom-sales' >מבצעים מותאמים אישית</a>
        </div>
    </div>
);

export default Header;