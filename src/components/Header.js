import React from 'react';

export default function Header() {
  return (
    <>
      <div className="row d-flex align-items-center">
        <div className="col-md-2 col-2">
            <a href="/" >
                <img src="/images/nomad_rental_logo.png" alt="nomadrental-logo"></img>
            </a>
        </div>
        <div className="col-md-10 col-10 d-flex justify-content-end align-items-center">
            <span className="fw-semibold fs-7 light-grey">Choose a city</span>
            <span className="fa fa-bars ms-3 square d-flex justify-content-center align-items-center drop-shadow"></span>
        </div>
      </div>
    </>
  )
}


