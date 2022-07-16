import React from 'react'
import BookingDetailsCard from './BookingDetailsCard'

export default function BookingPage() {
  return (
    <>
      <div class="title fw-normal">
        Bookings
      </div>
      <div class="fs-5 mt-5">
        Your current upcoming stays
      </div>
      <div class="fs-7 mt-3">
        Please update with the properity if your travel plans should change or if you wish
        to make any changes to your stay.
      </div>
      <div class="fs-7 mt-3 blue">
        <span class="fa fa-chevron-right"></span>
        <span class="ps-2">Learn more about our premium subscription</span>
      </div>
      <BookingDetailsCard />
    </>
  )
}
