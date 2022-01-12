import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => (
    <header className="navbar navbar-expand-md navbar-dark bg-dark px-3">
        <NavLink to="/" className="navbar-brand">
            <img src="./img/greedies-authentique-et-moelleux_logo-blanc.png" alt="Logo Greedies"/>
        </NavLink>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-content">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-content">
            <nav>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><NavLink className="nav-link active" to="/about">A propos</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/shop">Boutique</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
)


export default NavBar