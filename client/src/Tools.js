import React, { useEffect, useState } from 'react'
import './Tools.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
export default function Tools() {

  const navigate = useNavigate()
  const [tools, setTools] = useState([])
  // console.log(tools);
  useEffect(() => {
    axios.get(`http://localhost:2000/tools/viewtool`).then((response) => {
      setTools(response.data.tooldetails)
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  const deletetool = (id) => {
    axios.get(`http://localhost:2000/tools/deletetool/${id}`).then((delete_response) => {

      console.log(delete_response);
      window.location.reload()
    })
  }
  return (
    <div>
      <>
        <Navbar />


        <div className='Tool-header'>
          <h1 className='Tool-h1'><b>Gardening Tools</b></h1>
          {/* <button className='Addtool-button'>Addtool</button> */}
        </div>
        <div className='Main-Toolcontainer'>
          <div className='row'>
            <div className='col-lg-1'>
              <div className='Tool-container1'>
                <div className='Tool-container-menu'>
                  <h5 className='Tool-container1-h5'>Filter</h5>


                  <div class="dropdown">
                    <button class="btn  dropdown-toggle Tool-container1-button1" type="button" data-toggle="dropdown">Product type
                      {/* <span class="caret"></span> */}
                    </button>
                    <ul class="dropdown-menu Tool-container1-ul">
                      <li><a href="#">Combo Packs</a></li>
                      <li><a href="#">Latest Offer</a></li>
                      <li><a href="#">Gardening Tools</a></li>
                    </ul>
                  </div>


                  <div class="dropdown">
                    <button class="btn  dropdown-toggle Tool-container1-button1" type="button" data-toggle="dropdown">Availability
                      {/* <span class="caret"></span> */}
                    </button>
                    <ul class="dropdown-menu Tool-container1-ul">
                      <li><a href="#">In stock</a></li>
                      <li><a href="#">Out od stock</a></li>

                    </ul>
                  </div>

                </div>

              </div>
            </div>

            <div className='col-lg-9'>
              <div className='Tool-container2'>
                <div className='row'>
                  {tools.map((data, key) => (
                    <div className='col-lg-3'>
                      <div className='Tool-content'>
                        <div className="card T-card" style={{ width: "18rem" }}>
                          <img src='/images/img-tool.jpg' className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title "><b>{data.Toolname}</b></h5>
                            <p className="card-text1">
                              Price:{data.Price}
                            </p>
                            <p className="card-text2">Quantity:{data.Quatity}</p>
                            <p className="card-text3">Available Quantity:{data.Available_quatity}</p>
                            <p className="card-text4">{data.Description}</p>
                            <a href={`/tools/edittools/${data._id}`} className="btn btn-primary ">
                              Edit
                            </a>
                            <a className="btn btn-primary deletebutton" onClick={() => { deletetool(data._id) }}>
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}


                </div>
              </div>
            </div>

            <div className='col-lg-2'>
              <div className='Tool-container3'>
                <div className='Tool-container3-menu'>
                  <h5 className='Tool-container3-h5'>Garden Store</h5>


                  <div class="dropdown">
                    <button class="btn dropdown-toggle  Tool-container1-button1" type="button" data-toggle="dropdown">Plants & Seeds
                      {/* <span class="caret"></span> */}
                    </button>
                    <ul class="dropdown-menu Tool-container3-ul">
                      <li><a href="#">Flowering Plants</a></li>
                      <li><a href="#">Herbal Plants</a></li>
                      <li><a href="#">Butterfly Attractant Plants</a></li>
                    </ul>
                  </div>

                  <div class="dropdown">
                    <button class="btn  dropdown-toggle Tool-container1-button1" type="button" data-toggle="dropdown">Soil Amendments
                      {/* <span class="caret"></span> */}
                    </button>
                    <ul class="dropdown-menu Tool-container3-ul">
                      <li><a href="#">Pesticides & Fertilizers</a></li>
                      <li><a href="#">Plant Media</a></li>

                    </ul>
                  </div>

                  <div class="dropdown">
                    <button class="btn  dropdown-toggle Tool-container1-button1" type="button" data-toggle="dropdown">Garden Accessories
                      {/* <span class="caret"></span> */}
                    </button>
                    <ul class="dropdown-menu Tool-container3-ul">
                      <li><a href="#">Planters</a></li>
                      <li><a href="#">Garden Tools</a></li>

                    </ul>
                  </div>

                  <div class="dropdown">
                    <button class="btn   Tool-container1-button1" type="button" data-toggle="dropdown">Online Nursery
                      {/* <span class="caret"></span> */}
                    </button>
                    {/* <ul class="dropdown-menu Tool-container3-ul">
                <li><a href="#">Planters</a></li>
                <li><a href="#">Garden Tools</a></li>

              </ul> */}
                  </div>



                </div>





              </div>
            </div>
          </div>


        </div>


      </>

    </div >
  )
}
