import React, { Component } from "react";
// import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import "./personalPageStyle.css";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {},
    };
  }

  render() {
    const personal = this.state.personal;
    let personalItem = (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header personal-info-header">
              Personal Information
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  Mobile Number
                  <p>{personal.phone}</p>
                </div>

                <div className="col-md-3">
                  Whatsapp Number
                  <p>{personal.whatsapp_phone}</p>
                </div>

                <div className="col-md-3">
                  Email Address
                  <p>{personal.email}</p>
                </div>

                <div className="col-md-3">
                  Contact Address
                  <p>{personal.contact_address}</p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-3">
                  PHA
                  <p>{personal.pha}</p>
                </div>

                <div className="col-md-3">
                  DOB
                  <p>{personal.dob}</p>
                </div>

                <div className="col-md-3">
                  Wedding State
                  <p>{personal.wed_date}</p>
                </div>

                <div className="col-md-3">
                  Marital Status
                  <p>{personal.marital_status}</p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-3">
                  Work Status
                  <p>{personal.work_status}</p>
                </div>

                <div className="col-md-3">
                  Profession
                  <p>{personal.profession}</p>
                </div>

                <div className="col-md-3">
                  Employer Name
                  <p>{personal.employer_name}</p>
                </div>

                <div className="col-md-3">
                  Employer Address
                  <p>{personal.employer_address}</p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-3">
                  State of Origin
                  <p>{personal.state_origin}</p>
                </div>

                <div className="col-md-3">
                  Nationality
                  <p>{personal.nationality}</p>
                </div>

                <div className="col-md-3">...</div>

                <div className="col-md-3">
                  <Link
                    to={`https://ftc-api.herokuapp.com/api/personal/${personal._id}`}
                    className="btn btn-secondary"
                  >
                    Update Info
                  </Link>
                </div>
              </div>
            </div>

            <div className="card-footer"/>
          </div>
        </div>
      </div>
    );
    return <div className="container">{personalItem}</div>;
  }
}

export default PersonalInfo;
