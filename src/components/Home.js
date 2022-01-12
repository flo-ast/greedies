import React from 'react'
import {Link} from 'react-router-dom'


class Home extends React.Component{
  render(){
    return (
      <>
      <header className="navbar navbar-expand-md navbar-dark bg-dark px-3">
          <Link to={'/'} className="navbar-brand">
              <img src="./img/greedies-authentique-et-moelleux_logo-blanc.png" alt="Logo Greedies"/>
          </Link>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-content">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-content">
              <nav>
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item"><Link className="nav-link active" to={'/about'}>A propos</Link></li>
                      <li className="nav-item"><Link className="nav-link" to={'/shop'}>Boutique</Link></li>
                      <li className="nav-item"><Link className="nav-link" to={'/contact'}>Contact</Link></li>
                  </ul>
              </nav>
          </div>
      </header>
        <p className="h1">Home</p>
      </>
    )
  }
}
 

export default Home