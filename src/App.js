import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Homepage from './containers/Homepage.js';
import TestApiCall from './containers/TestAPICall/Index.js';
import {HashRouter as Router, Routes, Link, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/homepage">Homepage</Link>
            </li>
            <li>
              <Link to="/test-api-call">Test API Call</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/homepage" element={<Homepage />}></Route>
          <Route path="/test-api-call" element={<TestApiCall />}></Route>
          <Route path="/" element={<Navigate to='/homepage'/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
