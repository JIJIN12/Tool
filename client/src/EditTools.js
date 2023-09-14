import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditTools() {
  const { id } = useParams()
  // console.log(id);

  const navigate = useNavigate()
  const [edit, setedit] = useState({})

  const toolinput = (event) => {
    const { name, value } = event.target
    setedit({ ...edit, [name]: value })

  }

  const toolupdate = async (event) => {
    event.preventDefault()
    try {
      console.log(edit);
      axios.post(`http://localhost:2000/tools/updatetool`, edit).then((edittooldata) => {

        navigate('/tools')
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:2000/tools/edittool/${id}`).then((Response) => {
      console.log(Response);
      setedit(Response.data.details)
    })
  }, [])


  return (

    <div>
      <>
      
        <div>


          <form>
            <h3>Tools UPDATION</h3>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="Name">Name of Tool</label>
                  </td>
                  <td>

                    <input
                      type="text"
                      name="Toolname"
                      onChange={toolinput}
                      value={edit.Toolname || ''}

                    />
                  </td>
                </tr>
                <tr></tr>
                <tr>
                  <td>
                    <label htmlFor="Name">Price</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name='Price'
                      onChange={toolinput}
                      value={edit.Price}

                    />
                  </td>
                </tr>
                <tr></tr>
                <tr>
                  <td>
                    <label htmlFor="Name">Description</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      onChange={toolinput}
                      name='Description'
                      value={edit.Description}

                    />
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
            <button type="submit" onClick={toolupdate}>submit</button>
          </form>

        </div>
      </>

    </div>
  )
}
