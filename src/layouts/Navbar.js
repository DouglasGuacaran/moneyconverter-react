import React from "react";
import {Link} from "react-router-dom"
import './navbar.css';
import { FaHome } from 'react-icons/fa';

function Navbar() {
    return(
        <div className="container">


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/"><FaHome /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cambia">Cambia</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
        )
    }
export default Navbar