import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} light bg-${props.mode}  secondary`}>
      <div class="container-fluid">
        <Link className="navbar-brand mx-3" to="/">{props.title}{props.about} </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">HOME</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active" to="/about">ABOUT</Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <div className={`form-check form-switch float-end  mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
          </form>
          {/* <div class={`form-check form-switch  mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>

    </div> */}
        </div>
      </div>
    </nav>

  )
}
Navbar.defaultProps = {
  title: 'set title here'
};
