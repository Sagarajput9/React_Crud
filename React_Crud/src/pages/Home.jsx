import { useState,useEffect } from "react";
import http from "../http"
import { Link } from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        http.get('/users').then(res=>{
            setUsers(res.data);
        })
    }

    const deleteUser = (id) => {
      http.delete('/users/'+id).then(res=>{
        fetchAllUsers();
      })
    }

    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Users Listing</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Sno.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{++index}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className="btn btn-info btn-sm" to={{ pathname: "/Edit/" + user.id }}>Edit</Link>&nbsp;
                    <Link className="btn btn-primary btn-sm" to={{ pathname: "/View/" + user.id }}>View</Link>&nbsp;
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
    

    )
}