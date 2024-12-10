import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from '../http'

export default function Create() {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () => {
        http.post('/users', inputs)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                console.error('Error creating user:', err);
                alert('An error occurred. Please try again later.');
            });
    };
    
    
    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8 col-lg-6">
                <div className="card shadow-lg border-0">
                    <div className="card-body">
                        <h4 className="card-title text-center mb-4">New User</h4>
    
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-bold">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                className="form-control" 
                                value={inputs.name || ''} 
                                onChange={handleChange} 
                            />
                        </div>
    
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bold">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="form-control" 
                                value={inputs.email || ''} 
                                onChange={handleChange} 
                            />
                        </div>
    
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-bold">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                className="form-control" 
                                value={inputs.password || ''} 
                                onChange={handleChange} 
                            />
                        </div>
    
                        <div className="d-flex justify-content-center mt-4">
                            <button 
                                type="button" 
                                className="btn btn-info" 
                                onClick={submitForm}
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    )
}