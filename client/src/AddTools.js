import React, { useState } from 'react'
import './AddTools.css'
import axios from 'axios';
import Navbar from './components/navbar/Navbar';
export default function AddTools() {
  const [addtool, set_addtools] = useState()


  console.log(addtool);
  const AddTools_input = (event) => {
    const { id, value } = event.target
    set_addtools({ ...addtool, [id]: value })
  }


  const AddTools_submit = (event) => {
    event.preventDefault()
    console.log(addtool);

    axios.get(`http://localhost:2000/tools/viewtool`, addtool).then((addtooldata) => {
      console.log(addtooldata);

    }).catch((error) => {
      console.log(error);
    })

  }





  return (
    <>

      <Navbar />
      <div className='AddTool-container'>
        <form>
          <h3 className='AddTool-h3'>Tools UPDATION</h3>
          <div className='AddTool-form'>
            <div className='AddTool-row'>
              <label className='AddTool-label' htmlFor='ToolName'>
                Name of Tool
              </label>
              <input type='text' className='AddTool-input' id='Toolname' onChange={AddTools_input} />
            </div>
            <div className='AddTool-row'>
              <label className='AddTool-label' htmlFor='Price'>
                Price
              </label>
              <input type='text' className='AddTool-input' id='Price' onChange={AddTools_input} />
            </div>
            <div className='AddTool-row'>
              <label className='AddTool-label' htmlFor='Quantity'>
                Quantity
              </label>
              <input type='text' className='AddTool-input' id='Quantity' onChange={AddTools_input} />
            </div>
            <div className='AddTool-row'>
              <label className='AddTool-label' htmlFor='AvailableQuantity'>
                Available Quantity
              </label>
              <input
                type='text'
                className='AddTool-input'
                id='AvailableQuantity'
                onChange={AddTools_input}
              />
            </div>
            <div className='AddTool-row'>
              <label className='AddTool-label' htmlFor='Description'>
                Description
              </label>
              <input type='text' className='AddTool-input' id='Description' onChange={AddTools_input} />
            </div>
            <button className='AddTool-button' type='submit' onClick={AddTools_submit} >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
