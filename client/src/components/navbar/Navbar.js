import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <nav class="navbar bg-body-tertiary navbar1">
            <div class="container-fluid1">
                <a class="navbar-brand" href="#">
                    <img src="./images/gitlogo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                    Logo
                </a>
            </div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary navbar1">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  active" href="/Tools">Tools</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/registration">Registration</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/signin">signin</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" href="/profile">Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="container-fluid2">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
