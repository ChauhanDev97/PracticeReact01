import React, {Fragment} from 'react';

function Navigation() {
    return (
        <Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <h4 className="navbar-brand" >Navbar</h4>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <h6 className="nav-link active" aria-current="page" >Home</h6>
                  <h6 className="nav-link">About</h6>
                  <h6 className="nav-link">Section</h6>
                </div>
              </div>
            </div>
          </nav>
        </Fragment>
    )
}

export default Navigation
