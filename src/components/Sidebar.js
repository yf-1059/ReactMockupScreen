import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.scss';

export default function Sidebar() {

  const [active, setActive] = useState("homepage");

  return (
    <>
      <div className="diamond d-flex justify-content-center align-items-center drop-shadow">
        <div className="fs-6 fw-semibold text-white" style={{transform: 'rotate(-45deg)'}}>
          JD
        </div>
      </div>
      <div className="fs-7 fw-semibold mt-3 text-black">
        John Doe
      </div>
      <div className="fs-7 fw-normal">
        Premium Nomad
      </div>
      <Link to='/homepage' style={{textDecoration: 'none'}}>
        <div className={`fs-7 fw-semibold mt-4 ${active === "homepage" ? "active" : "inactive"}`} onClick={() => setActive("homepage")}>
          <span className="fa fa-inbox icon"></span>
          <span>Bookings</span>
        </div>
      </Link>
      <Link to='/refer' style={{textDecoration: 'none'}}>
        <div className={`fs-7 fw-semibold mt-4 ${active === "refer" ? "active" : "inactive"}`} onClick={() => setActive("refer")}>
          <span className="fa fa-bed icon"></span>
          <span>Refer and Earn</span>
        </div>
      </Link>
      <Link to='/account' style={{textDecoration: 'none'}}>
        <div className={`fs-7 fw-semibold mt-2 ${active === "account" ? "active" : "inactive"}`} onClick={() => setActive("account")}>
          <span className="fa fa-user-gear icon"></span>
          <span>Account Settings</span>
        </div>
      </Link>
      <div className="fs-8 fw-semibold mt-4">
        SUPPORT
      </div>
      <Link to='/contact' style={{textDecoration: 'none'}}>
        <div className={`fs-7 fw-semibold mt-2 ${active === "contact" ? "active" : "inactive"}`} onClick={() => setActive("contact")}>
          <span className="fa fa-life-ring icon"></span>
          <span>Contact us</span>
        </div>
      </Link>
      <Link to='/faq' style={{textDecoration: 'none'}}>
        <div className={`fs-7 fw-semibold mt-2 ${active === "faq" ? "active" : "inactive"}`} onClick={() => setActive("faq")}>
          <span className="fa fa-square-arrow-up-right icon"></span>
          <span>FAQ</span>
        </div>
      </Link>
      <Link to='/test-api-call' style={{textDecoration: 'none'}}>
        <div className={`fs-7 fw-semibold mt-4 ${active === "testapicall" ? "active" : "inactive"}`} onClick={() => setActive("testapicall")}>
          <span className="fa fa-vial icon"></span>
          <span>Test API Call</span>
        </div>
      </Link>
      <div className="d-flex align-items-center" style={{marginTop: '100px'}}>
        <div className="toggle-rectangle d-flex justify-content-end">
          <div className="circle"></div>
        </div>
        <span className="fs-7 fw-semibold m-2">
          Sign out
        </span>
      </div>
    </>
  )
}
