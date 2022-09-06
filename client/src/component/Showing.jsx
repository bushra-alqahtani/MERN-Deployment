import React, { useEffect } from 'react'
import { useHistory , useParams} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';



function Showing(props) {
  const [ pet, setPet ] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const [likes, setLikes] = useState(0);
  
  
  
  
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/${ id }`)
    .then((res) => {
      console.log(res.data);
      setPet(res.data.result);
    }).catch((err) => console.log(err));
  }, [id]);  
  
  
  
  const deleteHandler = () => {
    axios.delete(`http://localhost:8000/api/deletebyId/${ id }`)
    .then((res) => {
      console.log(res);
      console.log(res.data);
      history.push("/");
    })
    .catch((err) => console.log(err));
  };
  
  const handleLikes = () => {
    setLikes(likes + 1);
    
};

  return (
    <div>
      <div className="d-flex align-items-start justify-content-between">
        <p className="h1">Pet Shelter</p>
        <Link to="/">Back To Home</Link>
      </div>


      <div className="d-flex align-items-center justify-content-between">
        <p className="h2 text-primary">Details About { pet.name }</p>
        <button className="btn btn-danger" onClick={ deleteHandler }><i className="bi bi-house-door"></i> Adopt { pet.name }</button>
      </div>
      <div className="border p-3 mt-3">
        <table className="table">
          <tr>
            <th className="fw-bold">Pet Type:</th>
            <td>{ pet.type }</td>
          </tr>
          <tr>
            <th className="fw-bold">Description:</th>
            <td>{ pet.description }</td>
          </tr>
          <tr>
            <th className="fw-bold">Skills:</th>
            <td>{ pet.skill1 }<br/>{ pet.skill2 }<br/>{ pet.skill3 }</td>
            <td><Button  onClick={handleLikes}>Like {pet.likes}</Button></td>
          </tr>
        </table>
      </div>

    </div>
  )
}

export default Showing