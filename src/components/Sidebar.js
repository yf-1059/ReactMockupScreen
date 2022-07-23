import React from 'react';

export default function Sidebar() {
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
      <div className="fs-7 fw-semibold mt-5 rectangle text-white drop-shadow">
        <span className="fa fa-inbox icon"></span>
        <span>Bookings</span>
      </div>
      <div className="fs-7 fw-semibold mt-5">
        <span className="fa fa-bed icon"></span>
        <span>Refer and Earn</span>
      </div>
      <div className="fs-7 fw-semibold mt-3">
        <span className="fa fa-user-gear icon"></span>
        <span>Account Settings</span>
      </div>
      <div className="fs-8 fw-semibold mt-5">
        SUPPORT
      </div>
      <div className="fs-7 fw-semibold mt-3">
        <span className="fa fa-life-ring icon"></span>
        <span>Contact us</span>
      </div>
      <div className="fs-7 fw-semibold mt-3">
        <span className="fa fa-square-arrow-up-right icon"></span>
        <span>FAQ</span>
      </div>
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
