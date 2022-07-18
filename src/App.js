import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Header from './Header.js'
import './App.css';
import Sidebar from './Sidebar.js';
import BookingPage from './BookingPage.js';

function App() {
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
  );
}

export default App;
