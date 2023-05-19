import React from 'react'

export default function Testimonials() {
  return (
    <section class="section-4" id='testimonials'>
        <div class="container text-center">
          <h1 class="text-dark">What our Reader's Say about us</h1>
          <p class="text-secondary">Let's check</p>
        </div>
        <div class="team row">
          <div class="col-md-4 col-12 text-center">
            <div class="card mr-2 d-inline-block shadow-lg">
              <div class="card-img-top">
                <img
                  src="../assets/UI-face-3.jpg"
                  class="img-fluid border-radius p-4"
                  alt=""
                />
              </div>
              <div class="card-body">
                <h3 class="card-title">Blalock Jolene</h3>
                <p class="card-text">
                  Though my writing's pretty cogent, I'm always running it
                  through Textomatic to find inspiration and better ways to
                  express myself.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner text-center">
                <div class="carousel-item active">
                  <div class="card mr-2 d-inline-block shadow">
                    <div class="card-img-top">
                      <img
                        src="../assets/UI-face-1.jpg"
                        class="img-fluid rounded-circle w-50 p-4"
                        alt=""
                      />
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">Allen Agnes</h3>
                      <p class="card-text">
                        I love it. It has sped up my writing process so much!
                        The way I use it is: I review all the suggestions and
                        merge them and use them to find different options.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="card d-inline-block mr-2 shadow">
                    <div class="card-img-top">
                      <img
                        src="../assets/UI-face-2.jpg"
                        class="img-fluid rounded-circle w-50 p-4"
                        alt=""
                      />
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">Amiel Barbara</h3>
                      <p class="card-text">
                        I tried more than 20+ tools for paraphrasing or writing
                        articles but no one able to beat Textomatic. Really
                        Amazing and Highly Recommended.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12 text-center">
            <div class="card mr-2 d-inline-block shadow-lg">
              <div class="card-img-top">
                <img
                  src="../assets/UI-face-4.jpg"
                  class="img-fluid border-radius p-4"
                  alt=""
                />
              </div>
              <div class="card-body">
                <h3 class="card-title">Olivia Louis</h3>
                <p class="card-text">
                  Imagine that you had a sous chef in the kitchen as you cooked,
                  that's basically what Textomatic feels like when you write!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
