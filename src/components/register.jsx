import React from 'react'
import image from './assets/hblogo.svg'
import matrix from './assets/matrix.jpg'

const register = () => {
  return (
    <>
      <div className='bg-black h-100 w-100'>
        <nav className="navbar navbar-expand-lg d-flex">
                <div className="container-fluid">
                  <img className='mx-2'id='img1' src={image}/>
                  <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className='d-flex justify-content-center'>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 text-center">
                      <li className="nav-item">
                        <a className="nav-link text-light mx-3 fs-5" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light mx-3 fs-5" href="#">Gallery</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light mx-3 fs-5" href="#">Sponsors</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light mx-3 fs-5" href="#">Humans</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light mx-3 fs-5" href="#">FAQs</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light mx-3 fs-5" href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  </div>
                  <form className="d-flex" role="search">
                    <button className="btn btn-danger px-4" type="submit">Register</button>
                  </form>
                </div>
            </nav>
            <div>
                <h1 className='text-light text-center fw-bolder my-5'>Not Registered yet?....Do it now!!</h1>
            </div>
                <div className='d-flex justify-content-center mt-5'>
                <div className=' card bg-dark w-100 border-light mx-5 rounder-5 pb-5'>
                    <p className='text-light text-center mt-5 mb-5 fs-1 fw-bolder'>Register</p>
                <div className='name mx-4'>
                    <div className='mb-2 ms-1 text-light'>Name</div>
                    <input class="w-100 rounded-4 p-2 mb-4" placeholder="Enter Your Name" aria-label="Search"/>
                </div>
                <div className='number mx-4'>
                    <div className='mb-2 ms-1 text-light'>Phone Number</div>
                    <input class="w-100 rounded-4 p-2" placeholder="Enter Your Number" aria-label="Search"/>
                </div>
                <div className='address mx-4'>
                    <div className='mt-3 mb-2 ms-1 text-light'>Email Address</div>
                    <input class="w-100 rounded-4 p-2 mb-4" placeholder="Enter Your email" aria-label="Search"/>
                </div>
                <div className='github mx-4'>
                    <div className='mb-2 ms-1 text-light'>GitHub Id</div>
                    <input class="w-100 rounded-4 p-2" placeholder="Enter Your GitHub" aria-label="Search"/>
                </div>
                <div className='branch mx-4'>
                    <div className='mt-3 mb-2 ms-1 text-light'>Branch</div>
                    <input class="w-100 rounded-4 p-2" placeholder="Enter Your Branch" aria-label="Search"/>
                </div>
                <div className='sem mx-4'>
                    <div className='mt-3 mb-2 ms-1 text-light'>Semester</div>
                    <input class="w-100 rounded-4 p-2 mb-4" placeholder="Enter Your Semester" aria-label="Search"/>
                </div>
                <div className='linkedin mx-4'>
                    <div className='mb-2 ms-1 text-light'>LinkedIn Id</div>
                    <input class="w-100 rounded-4 p-2" placeholder="Enter Your LinkedIn Id" aria-label="Search"/>
                </div>
                <div className='team mx-4'>
                    <div className='mt-3 mb-2 ms-1 text-light'>Team Mate(if any)</div>
                    <input class="w-100 rounded-4 p-2" placeholder="Enter Your Team Mate Name" aria-label="Search"/>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                <button className='btn btn-danger w-50 px-4'>Register</button>
                </div>
            </div>
            </div>
              <div className='d-flex justify-content-between py-5'>
                      <div>
                      <div className='d-flex'>
                        <img className='mx-4 mt-5'id='img4' src={matrix}/>
                        <div>
                          <div className='text-light fw-bold fs-4 mt-5'>Building the</div>
                          <div className='text-danger fw-bold fs-4'>Future together.</div>
                        </div>
                      </div>
                      <div className='text-light fw-bold mx-4 mt-5'> &copy; Matrix JEC, All rights are reserved</div>
                      </div>
                      <div>
                        <div className='text-light fw-bold mx-4 fs-4 text-center mt-5'>Connect with Us</div>
                        <div className='d-flex fs-5 ms-5 mt-3'>
                              <a href="#"><i className="fa-brands fa-x-twitter text-secondary mx-2"></i></a>
                              <a href="#"><i className="fa-brands fa-instagram text-secondary mx-2"></i></a>
                              <a href="#"><i className="fa-brands fa-github text-secondary mx-2"></i></a>
                              <a href="#"><i className="fa-brands fa-linkedin text-secondary mx-2"></i></a>
                          </div>
                      </div>
              </div>
      </div>
    </>
  )
}

export default register
