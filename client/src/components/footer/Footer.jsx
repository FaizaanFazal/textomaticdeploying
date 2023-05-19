import React from 'react'

export default function Footer() {
  return (
    <footer>
    <div class="container-fluid p-0">
      <div class="row text-left">
        <div class="col-md-5 col-sm-5">
          <h4 class="text-light">About us</h4>
          <p class="text-muted">
            Textomatic was built by Air University students. Our goal is to
            revolutionize the way we read and write. We design advanced AI
            tools and language models that understand the context and
            semantics of written text. These models are what set Textomatic
            apart as the first AI-based writing companion, moving far beyond
            grammar and spelling fixes to help you put your own thoughts into
            written words.
          </p>
          <p class="pt-4 text-muted">Copyright ©2022 All rights reserved</p>
        </div>
        <div class="col-md-5 col-sm-12">
          <h4 class="text-light">Newsletter</h4>
          <p class="text-muted">Stay Updated</p>
          <form class="form-inline">
            <div class="col pl-0">
              <div class="input-group pr-5">
                <input
                  type="text"
                  class="form-control bg-dark text-white"
                  id="inlineFormInputGroupUsername2"
                  placeholder="Email"
                />
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-2 col-sm-12">
          <h4 class="text-light">Follow Us</h4>
          <p class="text-muted">Let us be social</p>
          <div class="column text-light">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
