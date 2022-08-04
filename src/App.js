import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Homepage from './containers/Homepage.js';
import TestApiCall from './containers/TestAPICall/Index.js';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Refer from './containers/Refer';
import Contact from './containers/Contact';
import Faq from './containers/Faq';
import Account from './containers/Account';
import CharacterCard from './containers/TestAPICall/CharacterCard';

function App() {
  return (
    <Router>
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
            <Routes>
              <Route path="homepage" element={<Homepage />}></Route>
              <Route path="refer" element={<Refer />}></Route>
              <Route path="account" element={<Account />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="faq" element={<Faq />}></Route>
              <Route path="test-api-call" element={<TestApiCall />}>
                <Route path=":id" element={<CharacterCard />}></Route>
              </Route>
              <Route path="/" element={<Navigate to='homepage'/>}></Route>
            </Routes>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <div className="container mb-4"></div>
    </Router>
  );
}

export default App;
