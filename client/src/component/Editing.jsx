import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Editing(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();
  const { id } = useParams();
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/${id}`)
      .then((res) => {
        console.log(res.data.result);
        setName(res.data.result.name);
        setType(res.data.result.type);
        setDescription(res.data.result.description);
        setSkill1(res.data.result.skill1);
        setSkill2(res.data.result.skill2);
        setSkill3(res.data.result.skill3);
        setLoaded(true);
      })
      .catch((err) =>console.log(err));
  }, [id]);

  const editHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/edit/${id}`, {
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
      })
      .then((res) => {
        console.log(res.data);
        history.push("/");
      })
      .catch((err) =>console.log(err));
  };

  return (
    <div>
      <div className="d-flex align-items-start justify-content-between">
        <p className="h1">Pet Shelter</p>
        <Link to="/">Back To Home</Link>
      </div>
      {loaded && (
        <>
          <p className="h2 text-primary">Edit {name}</p>
          <form className="border p-3" onSubmit={editHandler}>
            <div className="row">
              <div className="col">
                <div>
                  <label className="form-label">Pet Name:</label>
                  <input
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name={name}
                    type="text"
                  />
                   {errors.name ? <h6 className="error">{errors.name.message}</h6> : null}
                </div>
                <div>
                  <label className="form-label">Pet Type:</label>
                  <input
                    className="form-control"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                    name={type}
                    type="text"
                  />
                  {errors.type ? (
                    <p className="text-danger">{errors.type.message}</p>
                  ) : null}
                </div>
                <div>
                  <label className="form-label">Pet Description:</label>
                  <input
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    name={description}
                    type="text"
                  />
                  {errors.description ? (
                    <p className="text-danger">{errors.description.message}</p>
                  ) : null}
                </div>
                <button className="btn btn-primary mt-3">
                  <i className="bi bi-pencil"></i> Edit Pet
                </button>
              </div>
              <div className="col">
                <div>
                  <label>Skills (Optional):</label>
                </div>
                <div>
                  <label className="form-label">Skill 1:</label>
                  <input
                    className="form-control"
                    onChange={(e) => setSkill1(e.target.value)}
                    value={skill1}
                    name={skill1}
                    type="text"
                  />
                </div>
                <div>
                  <label className="form-label">Skill 2:</label>
                  <input
                    className="form-control"
                    onChange={(e) => setSkill2(e.target.value)}
                    value={skill2}
                    name={skill2}
                    type="text"
                  />
                </div>
                <div>
                  <label className="form-label">Skill 3:</label>
                  <input
                    className="form-control"
                    onChange={(e) => setSkill3(e.target.value)}
                    value={skill3}
                    name={skill3}
                    type="text"
                  />
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Editing;
