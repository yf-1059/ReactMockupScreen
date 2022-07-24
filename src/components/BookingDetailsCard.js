import React from 'react';

export default function BookingDetailsCard() {
  return (
    <>
      <div className="row p-0 m-0 mt-5 bg-white drop-shadow" style={{borderRadius: '4px'}}>
        <div className="col-md-4 m-0 p-0 d-flex">
          <img src="./images/package_head_image.png" alt="package-head" className="w-100"></img>
        </div>
        <div className="col-md-8 m-0 p-0">
          <div className="mt-4 ps-4 fs-5 fw-semibold text-black mt-3">
            The Green View
          </div>
          <div className="ps-4 fs-7 fw-normal light-grey mt-1">
            <span className="fa fa-check-circle"></span>
            <span className="ps-2">Booking request recieved</span>
          </div>
          <div className="ps-4 fs-7 fw-normal text-purple mt-1">
            <span className="fa fa-clock"></span>
            <span className="ps-2">Awaiting confirmation from Hotel</span>
          </div>
          <hr className="mt-4 light-grey ms-4 me-4"></hr>
          <div className="mt-4 ps-4 fs-6 fw-semibold text-dark">
            Superior Premium
          </div>
          <div className="row ps-4 mt-2 d-flex align-items-center">
            <div className="col-md-5 col-sm-5 fs-7 fw-normal text-truncate light-grey">
              <span className="fa fa-calendar-check"></span>
              <span className="ps-2">Check-in:</span>
              <br></br>
              <span className="fs-7 fw-semibold text-dark" style={{paddingLeft: '22px'}}>July 9th, 2018</span>
            </div>
            <div className="col-md-5 col-sm-5 fs-7 fw-normal text-truncate light-grey">
              <span className="fa fa-receipt"></span>
              <span className="ps-2">Reference:</span>
              <br></br>
              <span className="fs-7 fw-semibold text-dark" style={{paddingLeft: '22px'}}>#UC311K</span>
            </div>
            <div className="col-md-2 col-sm-2"></div>
          </div>
          <div className="mt-4 grey-rectangle">
            <div className="ps-4 fs-7 fw-semibold text-green">
              <span className="fa fa-star"></span>
              <span className="ps-2">Rate your stay</span>
            </div>
            <hr className="light-grey"></hr>
            <div className="ps-4 fs-7 fw-semibold light-grey">
              <span className="fa fa-paper-plane"></span>
              <span className="ps-2">Email the property</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
