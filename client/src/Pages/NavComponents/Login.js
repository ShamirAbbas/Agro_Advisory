import React, {useEffect, useState} from 'react'
import "./Nav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 

const Login = (props) => {
    const {id} = useParams();
    const [Advisory, setAdvisory] = useState("");
    const [Province, setProvince] = useState("");
    const [Description_English, setDescription_English] = useState("");
    const [Description_Urdu, setDescription_Urdu] = useState("");

    useEffect(()=>{
        if(id){
        axios.get('http://localhost:3001/displayAdvisory/'+id)
        .then(result => {console.log(result)
        setAdvisory(result.data.Advisory)
        setProvince(result.data.Province)
        setDescription_English(result.data.Description_English)
        setDescription_Urdu(result.data.Description_Urdu)
      })
      .catch(err => console.log(err))
    }
    }, [id])


    function update(e) {
        e.preventDefault()
        // Code to handle login goes here
        axios.put("http://localhost:3001/UpdateAdvisory/"+id,
            {
                Advisory,
                Province,
                Description_English,
                Description_Urdu
            })
            .then(result=> {
                console.log("Data updated successfully")
                console.log(result);
            })
            .catch(err=>console.log(err));
        props.toggle()
    }

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
    <div className="popup">
    <div className="popup-inner">
        <h1 className="text-center text-dark fw-bold">Edit ADVISORY</h1>
        <div className="Container mt-3 mb-4">
        <form onSubmit={update}>
        <div class="row justify-content-center">
            <label for="advisory" className="col-sm-2 col-form-label">
              <h5 style={{color: 'black'}}> Advisory </h5>
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
              <h5 style={{color: 'black'}}> Province </h5>
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
              <h5 style={{color: 'black'}}>
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
              <h5 style={{color: 'black'}}>
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
            <button type="submit" className="btn btn-primary btn-sm">  Update </button>
            </div>
            <div className="d-flex justify-content-center mt-4 mb-4">
            <button onClick={props.toggle} className="btn btn-primary btn-sm">Close</button>
            </div>
        </form>
        </div>
       
    </div>
</div>
  )
}

export default Login
