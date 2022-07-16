import React from 'react';
import Header from './Header.js'
import './App.css';
import Sidebar from './Sidebar.js';
import BookingPage from './BookingPage.js';

function App() {
  return (
    <>
      <div class="container mt-4">
        <Header />
      </div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-3 mt-5 light-grey">
            <Sidebar />
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-6">
            <BookingPage />
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
      <div class="container mb-4"></div>
    </>
  );
}

export default App;
