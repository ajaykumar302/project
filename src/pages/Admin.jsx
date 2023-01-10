import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Admin.css"


const Admin = () => {
  const [info,setInfo] = useState([]);
  useEffect(()=>{
    const getData = async () => {
      const data = await axios.get("https://server-project-m11b.onrender.com/api/users/details");
      setInfo(data.data);
    }
    getData()
  },[])
  return (
    <div>
    <h1 className='admin'>Admin DashBoard</h1>
    <ul type='none'>
    <li><NavLink to='/'><h3>Home</h3></NavLink></li>
      <li><h1>UserList</h1></li>
    </ul>
   
    <table className="table table-bordered border-primary">
    <thead>
    <tr>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Country</th>
      <th scope="col">City</th>
      <th scope="col">Email id</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
    {info.map((e,id)=>(
      <tr key={id}>
      <td>{e.firstName}</td>
      <td>{e.lastName}</td>
      <td>{e.countryName}</td>
      <td>{e.cityName}</td>
      <td>{e.email}</td>
      <td> <i className="fas fa-edit"></i> | <i className="fas fa-trash-alt"></i></td>
    </tr>
    ))}
    </tbody>
   
</table>
    </div>
  )
}

export default Admin