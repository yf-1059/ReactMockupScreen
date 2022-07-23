import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar.js';
import BookingPage from '../components/BookingPage.js';
import '../sass/Homepage.scss';

export default function Homepage() {
  return (
    <>
      <div className="container mt-4">
        <Header />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 mt-5 light-grey">
            <Sidebar />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <BookingPage />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <div className="container mb-4"></div>
    </>
  )
}
