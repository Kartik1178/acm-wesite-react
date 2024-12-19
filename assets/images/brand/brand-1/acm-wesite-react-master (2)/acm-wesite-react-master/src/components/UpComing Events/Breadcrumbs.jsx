import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  return (
    <div className="ep-breadcrumbs breadcrumbs-bg background-image" style={{ backgroundImage: "url('assets/images/breadcrumbs-bg.png')" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="ep-breadcrumbs__content">
              <h3 className="ep-breadcrumbs__title">Upcoming Events</h3>
              <ul className="ep-breadcrumbs__menu">
                <li><Link to="/">Home</Link></li>
                <li><i className="fi-bs-angle-right"></i></li>
                <li className="active"><Link to="/upcoming-events">Upcoming Events</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;

  