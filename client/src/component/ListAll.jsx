import React from "react";
//import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../bootstrap.min.css"
import { useHistory } from 'react-router-dom';
import { useState } from "react";


function ListAll() {
 
  //const history =useHistory();
  const [ pets, setPets ] =useState([]);
  const history=useHistory();
 //const [flag,setFlag]=React.useState(false)
 
 
 useEffect(() => {
  axios.get("http://localhost:8000/api/all")
    .then((res) => {
      console.log(res.data.pets);
      setPets(res.data.pets);
    })
    .catch((err) => {
      console.log(err.res);
    });
},[]);
    
  
      
  return (
    <div className="container">
    <div className="d-flex align-items-start justify-content-between">
      <p className="h1">Pet Shelter</p>
      <Link to="/new">Add a Pet to the Shelter</Link>
    </div>
    <p className="h2 text-primary">These pets are looking for a good home</p>
    <table className="table table-striped table-bordered">
      <thead className="table-info">
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pets.map((pet, index) => {
          return (
            <tr key={ index }>
              <td>{ pet.name }</td>
              <td>{ pet.type }</td>
              <td>
                <div className="btn-group" role="group">
                  <button className="btn btn-link" onClick={ () => history.push(`/${ pet._id }`) }>
                    Details
                  </button>
                  <button className="btn btn-link" onClick={ () => history.push(`/edit/${ pet._id }`) }>
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  );
}

export default ListAll;

