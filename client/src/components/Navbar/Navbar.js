import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <img src="logo.jpeg" alt="" id="logo" />
        <a className="navbar-brand" href="#">
          <h2>IIITL HUB</h2>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#"><span>Home</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><span>Notes</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><span>Blogs</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="timeline.html"><span>Timeline</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar