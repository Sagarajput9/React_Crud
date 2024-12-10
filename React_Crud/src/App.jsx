// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/Edit'
import View from './pages/View'


function App() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
               <Link to="/" className="navbar-brand">MyApp</Link>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>

                   <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                          <Link to="/" className="nav-link">Home</Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/create" className="nav-link">Create</Link>
                        </li>
                      </ul>
                    </div>
             </div>
        </nav>



      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='/view/:id' element={<View/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
