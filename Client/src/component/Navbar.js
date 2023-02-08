import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import '../App.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            {/* top header  */}
            <div className="top-header py-4">
                <h1>~Procrastination makes easy things hard and hard things harder!!</h1>
            </div>

            {/* NAvbar  */}
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary" id='striky'>
                <NavLink className="navbar-brand" to="/"><h4><span className='P' >P</span><span className='r' >r</span><span className='a' >a</span><span className='d' >d</span><span className='e' >e</span><span className='t' >e</span><span className='p' >p</span></h4></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                    
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Order</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/registration">Registration</NavLink>
                        </li>
                    </ul>
                   
                </div>
            </nav>

        </>
    )
}

export default Navbar