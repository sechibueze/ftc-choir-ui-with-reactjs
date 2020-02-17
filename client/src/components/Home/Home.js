import React, { Component } from "react";
import "./HomeStyle.css";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Nav/navbar";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container-fluid home-main">
          <h2 className="intro-backdrop">
            <p>Faith Tabernacle Choir Directory <span className="blinker">.</span></p>
          </h2>
          <div className="row">
            <div className="col-md-6">
              <Link className="btn btn-outline-success btn-lg d-block" to="/signup">
                Signup
              </Link>
            </div>
            <div className="col-md-6">
              <Link className="btn btn-outline-primary btn-lg d-block" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid home-content1">
          <div className="row">
            <div className="col-md-6 content1-left">
              <h3>
                Why to Choir Directory <span className="blinker">?</span>
              </h3>
              <p>
                In order to keep track and know each Individual choir in FT.
              </p>
            </div>
            <div className="col-md-6 content1-right">
              <p>
                Id aliqua consequat nulla exercitation laboris occaecat id ipsum
                anim deserunt ad ex id proident. Incididunt cillum duis
                exercitation cillum commodo id incididunt in deserunt. Anim
                mollit fugiat nostrud nisi occaecat nisi ea adipisicing. Laborum
                sunt ipsum non elit cupidatat esse. Elit ipsum labore sit labore
                dolore tempor esse. Ad incididunt aute sunt consequat amet.

              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid home-content2">
          <p>
            <span>News</span> and <span>announcements</span> for all things{" "}
            <span>Bootstrap</span>, including new <span>releases</span> and{" "}
            <span>Bootstrap Themes</span>.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
