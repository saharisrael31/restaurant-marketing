import React from 'react';

import Header from './components/header/header.component';
import RestaurantPreviewList from './components/restaurant-preview-list/restaurant-preview-list.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RestaurantPreviewList />
    </div>
  );
}

export default App;
