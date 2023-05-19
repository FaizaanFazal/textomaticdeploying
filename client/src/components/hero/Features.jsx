import React from 'react'
import { Link } from "react-router-dom"

export default function Features() {
  return (
    <section className="section-2 container-fluid p-0">
        <div className="cover">
          <div className="overlay"></div>
          <div className="content text-center">
            <h1>Some Features That Made Us Unique</h1>
            <p>Tools</p>
          </div>
        </div>
        <div className="container-fluid text-center">
          <div
            className="numbers d-flex flex-md-row flex-wrap justify-content-center"
          >
            <div className="rect">
              <i className="fas fa-book-reader fa-4x mx-4"></i>
            
              <h6>CORPUS CLEANER</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="rect">
              <i className="fas fa-book-reader fa-4x mx-4"></i>
            
              <h6>DATA SETS</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="rect">
              <i className="fas fa-book-reader fa-4x mx-4"></i>
            
              <h6>FORMATTER</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="rect">
              <i className="fas fa-book-reader fa-4x mx-4"></i>
            
              <h6>GRAMMAR CHECK</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="rect">
              <i className="fas fa-book-reader fa-4x mx-4"></i>
            
              <h6>SPELL CHECK</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="rect">
              <i className="fas fa-book-reader fa-4x mx-4"></i>
            
              <h6>ANALYZER</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        </div>

        <div className="purchase text-center" id='purchaseplan'>
          <h1>Purchase Whatever You Want</h1>
          <p>PLANS</p>
          <div className="cards">
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div className="card">
                <div className="card-body">
                  <div className="title">
                    <h3 className="p-1  text-white">Free</h3>
                  </div>
                  <p className="card-text">Start with the basic</p>
                  <div className="pricing">
                    <h1>$0</h1>
                    <Link
                      to="#"
                      className="btn btn-dark px-5 py-2 primary-btn mb-5 bg-warning text-black-50"
                      >Purchase Now</Link>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="title">
                    <h3 className="p-1  text-white">Premium</h3>
                  </div>
                  <p className="card-text">Yearly (save 60%) Monthly</p>
                  <div className="pricing">
                    <h1>$9.99</h1>
                    <Link
                      to="#"
                      className="btn btn-dark px-5 py-2 primary-btn mb-5 bg-warning text-black-50"
                      >Purchase Now</Link>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="title">
                    <h3 className="p-1  text-white">Premium for teams</h3>
                  </div>
                  <p className="card-text">Get textomatic for your entire team</p>
                  <div className="pricing">
                    <h1>$9.99</h1>
                    <Link
                      to="#"
                      className="btn btn-dark px-5 py-2 primary-btn mb-5 bg-warning text-black-50"
                      >Purchase Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
