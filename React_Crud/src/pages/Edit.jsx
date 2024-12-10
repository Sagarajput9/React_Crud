import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'


export default function Edit(props) {
    const navigate = useNavigate();
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

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.put('/users/'+id,inputs).then((res)=>{
            navigate('/');
        })
    }
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-6">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <h4 className="card-title text-center mb-4">Edit User Details</h4>
      
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={inputs.name || ''}
                    onChange={handleChange}
                  />
                </div>
      
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={inputs.email || ''}
                    onChange={handleChange}
                  />
                </div>
      
                <div className="d-flex justify-content-between mt-4">
                  <button type="button" onClick={submitForm} className="btn btn-info btn-sm">Update</button>
                  <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="btn btn-secondary btn-sm"
                  >
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