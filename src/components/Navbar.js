import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/ ">{props.title}</Link> */}
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* instead of a & href , link and to is used to that we transition from one page toa nother without page reload */}
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                {/* <Link className="nav-link active" aria-current="page" to="/ ">Home</Link> */}
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/about ">{props.about}</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/about ">{props.about}</a>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form> */}
                        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  >Enable {props.mode === 'dark' ? 'light' : 'dark'} Mode</label>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,// therefore if you enter a numbner in title in app.js it will show an error
    about: PropTypes.string
    // isRequired : if no tilte is aprovided in app.js and also ther is no default title then it wll give an error
}
// in case if in app.js tilte name is not provided and this value will be used as default
Navbar.defaultProps = {
    title: 'Set tilte here',
    about: ' About  '
}