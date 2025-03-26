import React from 'react'
import ButtonPill from './ButtonPill'
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <span className='d-flex align-items-center gap-2'>
                        <img src="/lasles-logo.svg" alt="logo" className='img-fluid' />
                        <p className='mb-0'>Lasles<strong>VPN</strong></p>
                    </span>
                </NavLink>
                <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="d-flex flex-column flex-lg-row w-100">
                        <div className="d-flex flex-grow-1 justify-content-center text-center">
                            <ul class="navbar-nav gap-lg-4 color-1">
                                <li className="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Testimonials</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Help</a>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex flex-column flex-lg-row align-items-center text-center gap-2 gap-lg-3">
                            <div className="nav-item">
                                <a className="nav-link fw-medium" href="#">Sign In</a>
                            </div>
                            <div className="mb-2 mb-lg-0">
                                <ButtonPill styleType="outline" btnName="SignUp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </nav>
    </header>
  )
}

export default Navbar
