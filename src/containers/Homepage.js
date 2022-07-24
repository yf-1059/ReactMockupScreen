import React from 'react';
import './Homepage.scss';
import BookingDetailsCard from './../components/BookingDetailsCard';

export default function Homepage() {
  return (
    <>
      <div className="title fw-normal">
        Bookings
      </div>
      <div className="fs-5 mt-5">
        Your current upcoming stays
      </div>
      <div className="fs-7 mt-3">
        Please update with the properity if your travel plans should change or if you wish
        to make any changes to your stay.
      </div>
      <div className="fs-7 mt-3 text-blue">
        <span className="fa fa-chevron-right"></span>
        <span className="ps-2">Learn more about our premium subscription</span>
      </div>
      <BookingDetailsCard />
    </>
  )
}
