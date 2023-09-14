import React from 'react'
import './Page.css'
import Navbar from './components/navbar/Navbar'
export default function Page1() {
    return (
        <div>
            <>
            <Navbar/>
                <div className="Tool-header">
                    <h1 className="Tool-h1">
                        <b>Gardening Tools</b>
                    </h1>
                </div>
                <div className="Tool-M-C">
                    <div className="row">
                        <div className="col-lg-2 column1">
                            <div className="Tool-container1">
                                <div className="Tool-container-menu">
                                    <h5 className="Tool-container1-h5">
                                        <b>Filter</b>
                                    </h5>
                                    {/* Content for container 1 goes here */}
                                    <div className="dropdown">
                                        <button
                                            className="btn dropdown-toggle Tool-container1-button1"
                                            type="button"
                                            data-toggle="dropdown"
                                        >
                                            Product type
                                        </button>
                                        <ul className="dropdown-menu Tool-container1-ul">
                                            <li>
                                                <a href="#">Combo Packs</a>
                                            </li>
                                            <li>
                                                <a href="#">Latest Offer</a>
                                            </li>
                                            <li>
                                                <a href="#">Gardening Tools</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <button
                                            className="btn dropdown-toggle Tool-container1-button1"
                                            type="button"
                                            data-toggle="dropdown"
                                        >
                                            Availability
                                        </button>
                                        <ul className="dropdown-menu Tool-container1-ul">
                                            <li>
                                                <a href="#">In stock</a>
                                            </li>
                                            <li>
                                                <a href="#">Out of stock</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 column1">
                            <div className="Tool-container2">
                                <div className="row row1">
                                    <div className="col-lg-4 T-card">
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src="..." className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make
                                                    up the bulk of the card's content.
                                                </p>
                                                <a href="#" className="btn btn-primary">
                                                    Go somewhere
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 T-card">
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src="..." className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make
                                                    up the bulk of the card's content.
                                                </p>
                                                <a href="#" className="btn btn-primary">
                                                    Go somewhere
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 T-card">
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src="..." className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make
                                                    up the bulk of the card's content.
                                                </p>
                                                <a href="#" className="btn btn-primary">
                                                    Go somewhere
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 T-card">
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src="..." className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    Some quick example text to build on the card title and make
                                                    up the bulk of the card's content.
                                                </p>
                                                <a href="#" className="btn btn-primary">
                                                    Go somewhere
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 column1 Tool-container3">
                            
                                <div className="Tool-container3-menu">
                                    <h5 className="Tool-container3-h5">Garden Store</h5>
                                    <div className="dropdown">
                                        <button
                                            className="btn dropdown-toggle Tool-container1-button1"
                                            type="button"
                                            data-toggle="dropdown"
                                        >
                                            Plants &amp; Seeds
                                        </button>
                                        <ul className="dropdown-menu Tool-container3-ul">
                                            <li>
                                                <a href="#">Flowering Plants</a>
                                            </li>
                                            <li>
                                                <a href="#">Herbal Plants</a>
                                            </li>
                                            <li>
                                                <a href="#">Butterfly Attractant Plants</a>
                                            </li>
                                        </ul>

                                        <div className="dropdown">
                                            <button
                                                className="btn dropdown-toggle Tool-container1-button1"
                                                type="button"
                                                data-toggle="dropdown"
                                            >
                                                Soil Amendments
                                            </button>
                                            <ul className="dropdown-menu Tool-container3-ul">
                                                <li>
                                                    <a href="#">Pesticides &amp; Fertilizers</a>
                                                </li>
                                                <li>
                                                    <a href="#">Plant Media</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn dropdown-toggle Tool-container1-button1"
                                                type="button"
                                                data-toggle="dropdown"
                                            >
                                                Garden Accessories
                                            </button>
                                            <ul className="dropdown-menu Tool-container3-ul">
                                                <li>
                                                    <a href="#">Planters</a>
                                                </li>
                                                <li>
                                                    <a href="#">Garden Tools</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn Tool-container1-button1"
                                                type="button"
                                                data-toggle="dropdown"
                                            >
                                                Online Nursery
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            
                        </div>
                    </div>
                    
                </div>

            </>
        </div>
    )
}
