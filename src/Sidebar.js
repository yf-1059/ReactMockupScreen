import React from 'react'

export default function Sidebar() {
  return (
    <>
      <div class="diamond d-flex justify-content-center align-items-center drop-shadow">
        <div class="fs-6 fw-semibold text-white" style={{transform: 'rotate(-45deg)'}}>
          JD
        </div>
      </div>
      <div class="fs-7 fw-semibold mt-3 text-black">
        John Doe
      </div>
      <div class="fs-7 fw-normal">
        Premium Nomad
      </div>
      <div class="fs-7 fw-semibold mt-5 rectangle text-white drop-shadow">
        <span class="far fa-inbox icon"></span>
        <span>Bookings</span>
      </div>
      <div class="fs-7 fw-semibold mt-5">
        <span class="far fa-bed icon"></span>
        <span>Refer and Earn</span>
      </div>
      <div class="fs-7 fw-semibold mt-3">
        <span class="far fa-user-cog icon"></span>
        <span>Account Settings</span>
      </div>
      <div class="fs-8 fw-semibold mt-5">
        SUPPORT
      </div>
      <div class="fs-7 fw-semibold mt-3">
        <span class="far fa-life-ring icon"></span>
        <span>Contact us</span>
      </div>
      <div class="fs-7 fw-semibold mt-3">
        <span class="far fa-external-link-square-alt icon"></span>
        <span>FAQ</span>
      </div>
      <div class="d-flex align-items-center" style={{marginTop: '100px'}}>
        <div class="toggle-rectangle d-flex justify-content-end">
          <div class="circle"></div>
        </div>
        <span class="fs-7 fw-semibold m-2">
          Sign out
        </span>
      </div>
    </>
  )
}
