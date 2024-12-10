import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'


export default function View(props) {
    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser= () =>{
        http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email,
            });
        });
    }
    return (
        
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-6">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <h4 className="card-title text-center mb-4">User Details</h4>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">Name</label>
                  <input type="text" id="name" className="form-control" value={inputs.name} disabled />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Email</label>
                  <input type="email" id="email" className="form-control" value={inputs.email} disabled />
                </div>

                <div className="d-flex justify-content-start mt-4">
                  <button className="btn btn-secondary btn-sm" onClick={() => window.history.back()}>
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}