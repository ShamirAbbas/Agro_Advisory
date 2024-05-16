import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const [Advisory, setAdvisory] = useState("");
  const [Province, setProvince] = useState("");
  const [Description_English, setDescription_English] = useState("");
  const [Description_Urdu, setDescription_Urdu] = useState("");
  const navigate = useNavigate();

  //When User click on submit button then this function will work
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:3001/advisory", {
        advisory: Advisory,
        province: Province,
        description_English: Description_English,
        description_Urdu: Description_Urdu,        
      });
      // toast.success("Advisory Created!", {
      //   position: "top", // Position at top-right corner
      //   autoClose: 3000, // Close after 3 seconds
      //   className: "my_custom_toast", // Optional custom class
      //   hideProgressBar: true, // Hide the progress bar
      // });
      console.log("Data Inserted Successfully!");
      navigate('/')
    } catch (err) {
      console.error("Error in inserting data : ", err);
    }
  };

  const Province_name = [
    "Punjab",
    "KPK",
    "Sindh",
    "Balochistan",
    "Ajk",
    "GilgitBaltistan",
    "Islamabad",
  ];
  
  return (
    <>
      <div className="container background-overlay">
        <ToastContainer /> {/* Render the ToastContainer component */}
        <h1 className="text-center text-dark fw-bold">AGRO ADVISORY</h1>
        <div className="Container mt-5 mb-4">
          <form onSubmit={handleOnSubmit}>
            <div class="row justify-content-center">
              <label for="advisory" className="col-sm-2 col-form-label">
                <h5> Advisory </h5>
              </label>
              <div class="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  id="advisory"
                  name="advisory"
                  value={Advisory}
                  onChange={(e) => setAdvisory(e.target.value)}
                />
              </div>
            </div>

            <div class="form-group row justify-content-center mt-4 mb-4">
              <label for="advisory" className="col-sm-2 col-form-label">
                <h5> Province </h5>
              </label>
              <div class="col-sm-5">
                <select
                  type="text"
                  className="form-control form-select"
                  id="province"
                  name="province"
                  value={Province}
                  onChange={(e) => setProvince(e.target.value)}
                >
                  <option>select Province</option>
                  {Province_name.map((province_name) => (
                    <option key={province_name} value={province_name}>
                      {province_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div class="form-group row justify-content-center mt-4 mb-4">
              <label
                for="advisory"
                className="col-sm-2 col-form-label d-flex align-items-center"
              >
                {" "}
                <h5>
                  Advisory<br></br>(English){" "}
                </h5>
              </label>
              <div class="col-sm-5">
                <textarea
                  className="form-control form-control-lg"
                  name="AdvisoryU"
                  rows="5"
                  style={{ height: "200px", fontSize: "14px" }}
                  value={Description_English}
                  onChange={(e) => setDescription_English(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div class="form-group row justify-content-center mt-4 mb-4">
              <label
                for="advisory"
                className="col-sm-2 col-form-label d-flex align-items-center"
              >
                {" "}
                <h5>
                  Advisory<br></br>(Urdu){" "}
                </h5>
              </label>
              <div class="col-sm-5">
                <textarea
                  className="form-control form-control-lg"
                  name="AdvisoryU"
                  rows="5"
                  style={{ height: "200px", fontSize: "14px" }}
                  value={Description_Urdu}
                  onChange={(e) => setDescription_Urdu(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="d-flex justify-content-center mt-4 mb-4">
              <button type="submit" className="btn btn-primary btn-sm">
                Create Advisory
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add;
