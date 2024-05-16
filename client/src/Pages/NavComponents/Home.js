import React, { useEffect, useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import { Link } from "react-router-dom";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { FaEdit } from "react-icons/fa";
import Login from "./Login";

function Home() {
  const [advisories, setAdvisories] = useState([]);
  const [seen, setSeen] = useState(false);

  function togglePop() {
    setSeen(!seen);
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/displayAdvisory")
      .then((advisories) => setAdvisories(advisories.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3001/deleteAdvisory/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-image">
        <div className="d-flex align-items-center  justify-content-center">
          {/* <div class="dropdown col-md-4">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              Filter Advisories
            </button>

            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">All Advisories</a>
              <a class="dropdown-item" href="#">Active Advisories</a>
              <a class="dropdown-item" href="#">Expired Advisories</a>
            </div>
          </div> */}
          <div class="col-md-4 text-center">
          <h1 className="text-center">All the advisories added</h1>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <table className="table">
            <thead className="table-success table-dark">
              <tr className="">
                <th className="text-white">Advisory</th>
                <th className="text-white">Province</th>
                <th className="text-white">Description(English)</th>
                <th className="text-white">Description(Urdu)</th>
                <th className="text-white">Edit</th>
                <Link to="/Add" className="btn btn-success">
                  {" "}
                  Add New
                </Link>
              </tr>
            </thead>
            <tbody>
              {advisories.map((agro) => {
                return (
                  <tr key={agro._id}>
                    <td>{agro.Advisory}</td>
                    <td>{agro.Province}</td>
                    <td>{agro.Description_English}</td>
                    <td>{agro.Description_Urdu}</td>
                    <td>
                      {" "}
                      <button
                        to=""
                        onClick={togglePop}
                        className="btn btn-success"
                      >
                        {" "}
                        <FaEdit />
                      </button>
                      {seen ? <Login toggle={togglePop} /> : null}
                    </td>

                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => handleDelete(agro._id)}
                      >
                        <HiArchiveBoxXMark />{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
