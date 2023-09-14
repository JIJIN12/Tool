import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ViewTools() {
    const [data,setdata] = useState([])
    useEffect(() => {
        axios.post(`http://localhost:2000/tools/viewtool`).then((response) => {
          console.log(response);
          setdata(response.data)
        }).catch((error) => {
          console.log(error);
        })
      })



  return (
    <div>
      
    </div>
  )
}
