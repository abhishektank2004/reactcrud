import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="assets/images/logo.webp"
                width="30" height="30"/>
            </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/Home_page">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/UserData">User Data</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/ContactPage">ContactPage</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
