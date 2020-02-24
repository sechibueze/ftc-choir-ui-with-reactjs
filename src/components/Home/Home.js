import React, { Component } from "react";
import "./HomeStyle.css";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Nav/navbar";
import Footer from "../layouts/footer/footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container-fluid home-main">
          <div className="row intro-backdrop">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="text-center">
                    <p className="">Faith Tabernacle Choir Directory <span className="blinker">.</span></p>
                  </h2>
                </div>
              </div>

                <div className="row">
                    <div className="col-md-6">
                        <Link to="/login" className="btn-info btn-lg d-block text-uppercase">Login</Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/signup" className="btn-success btn-lg d-block text-uppercase">Sign-up</Link>
                    </div>
                </div>
            </div>
          </div>

        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
