import React from 'react'

export default function Downloadnow() {
  return (
    <section class="section-3 container-fluid p-0 text-center">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <h1>Download Our App for all Platform</h1>
            <p>One of the hottest apps of the year</p>
          </div>
        </div>
        <div class="platform row">
          <div class="col-md-6 col-sm-12 text-right">
            <div class="desktop shadow-lg">
              <div class="d-flex flex-row justify-content-center">
                <i class="fas fa-desktop fa-3x py-2 pr-3"></i>
                <div class="text text-left">
                  <h3 class="pt-1 m-0">Desktop</h3>
                  <p class="p-0 m-0">On website</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 text-left">
            <div class="desktop shadow-lg">
              <div class="d-flex flex-row justify-content-center">
                <i class="fas fa-mobile-alt fa-3x py-2 pr-3"></i>
                <div class="text text-left">
                  <h3 class="pt-1 m-0">On Mobile</h3>
                  <p class="p-0 m-0">On Play Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
