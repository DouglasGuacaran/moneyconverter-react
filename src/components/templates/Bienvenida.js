import React from 'react'
import './bienvenida.css';
import { Link } from 'react-router-dom';
import Image1 from '../../../src/Logo1.png';
import Image2 from '../../../src/logo.svg';

function Bienvenida() {
    return (
        <div className="body">
            <div className="container1">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-4">
                                <img className="image1" src={Image1} alt="imagenLogo1"></img>
                            </div>
                            <div className="col-4 separator"></div>
                            <div className="col-4">
                                <img className="image2" src={Image2} alt="imagenLogo1"></img>
                            </div>
                        </div>
                        <p className="text">Money Converter proyecto desarrollado con React Js</p>
                        <Link to="/home"><button className="btn btn-light buttonAdelante" >Adelante</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bienvenida