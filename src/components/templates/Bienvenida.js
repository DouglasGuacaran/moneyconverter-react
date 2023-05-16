import React from 'react'
import './bienvenida.css';
import { Link } from 'react-router-dom';
import Image1 from '../../../src/Logo1.png';
import Image2 from '../../../src/logo.svg';
import Button from 'react-bootstrap/Button';

function Bienvenida() {
    return (
        <div className="container1">
            <div className="row">
                <div className="col">
                    <div className="icons">
                        <img className="image" src={Image1} alt="imagenLogo1"></img>
                        <img className="image2" src={Image2} alt="imagenLogo2"></img>
                    </div>
                    <p className="text">Money Converter proyecto desarrollado con React Js</p>
                    <div className="btn-primary">
                        <Button variant='primary'><Link to="inicio" className='link'>Adelante</Link></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bienvenida