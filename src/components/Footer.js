import React from 'react';


const Footer = () => (
    <footer className="navbar navbar-expand-md navbar-light bg-light px-3">
        <a href="index.js" className="navbar-brand">
            <img src="./img/greedies-authentique-et-moelleux_logo-noir.png" alt="Logo Greedies"/>
        </a>
        <nav className="navbar navbar-expand-md navbar-light bg-light px-3">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link active" href="index.js">A propos</a></li>
                <li className="nav-item"><a className="nav-link" href="blog.html">Boutique</a></li>
                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
            </ul>
        </nav>
        <p>Copyright &copy;2021 greedies.fr</p>
    </footer>
)


export default Footer