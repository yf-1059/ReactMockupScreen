import React from 'react'

export default function BookingDetailsCard() {
  return (
    <>
      <div class="row p-0 m-0 mt-5 bg-white drop-shadow" style={{borderRadius: '4px'}}>
        <div class="col-md-4 m-0 p-0 d-flex">
          <img src="./images/package_head_image.png" alt="package-head" class="w-100"></img>
        </div>
        <div class="col-md-8 m-0 p-0">
          <div class="mt-4 ps-4 fs-5 fw-semibold text-black mt-3">
            The Green View
          </div>
          <div class="ps-4 fs-7 fw-normal light-grey mt-1">
            <span class="fa fa-check-circle"></span>
            <span class="ps-2">Booking request recieved</span>
          </div>
          <div class="ps-4 fs-7 fw-normal purple mt-1">
            <span class="fa fa-clock"></span>
            <span class="ps-2">Awaiting confirmation from Hotel</span>
          </div>
          <hr class="mt-4 light-grey ms-4 me-4"></hr>
          <div class="mt-4 ps-4 fs-6 fw-semibold text-dark">
            Superior Premium
          </div>
          <div class="row ps-4 mt-2 d-flex align-items-center">
            <div class="col-md-5 col-sm-5 fs-7 fw-normal text-truncate light-grey">
              <span class="far fa-calendar-check"></span>
              <span class="ps-2">Check-in:</span>
              <br></br>
              <span class="fs-7 fw-semibold text-dark" style={{paddingLeft: '22px'}}>July 9th, 2018</span>
            </div>
            <div class="col-md-5 col-sm-5 fs-7 fw-normal text-truncate light-grey">
              <span class="far fa-receipt"></span>
              <span class="ps-2">Reference:</span>
              <br></br>
              <span class="fs-7 fw-semibold text-dark" style={{paddingLeft: '22px'}}>#UC311K</span>
            </div>
            <div class="col-md-2 col-sm-2"></div>
          </div>
          <div class="mt-4 grey-rectangle">
            <div class="ps-4 fs-7 fw-semibold green">
              <span class="fa fa-star"></span>
              <span class="ps-2">Rate your stay</span>
            </div>
            <hr class="light-grey"></hr>
            <div class="ps-4 fs-7 fw-semibold light-grey">
              <span class="fa fa-paper-plane"></span>
              <span class="ps-2">Email the property</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
