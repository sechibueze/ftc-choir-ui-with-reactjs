import React, {Component} from 'react';
import './personalPageStyle.css';

class PersonalInfo extends Component {
    render() {
        return (
            <div className="container">
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
                                    </div>

                                    <div className="col-md-3">
                                        Whatsapp Number
                                    </div>

                                    <div className="col-md-3">
                                        Email Address
                                    </div>

                                    <div className="col-md-3">
                                        Contact Address
                                    </div>
                                </div>

                                <div className="row mt-5">
                                    <div className="col-md-3">
                                        PHA
                                    </div>

                                    <div className="col-md-3">
                                        DOB
                                    </div>

                                    <div className="col-md-3">
                                        Wedding State
                                    </div>

                                    <div className="col-md-3">
                                        Marital Status
                                    </div>
                                </div>

                                <div className="row mt-5">
                                    <div className="col-md-3">
                                        Work Status
                                    </div>

                                    <div className="col-md-3">
                                        Profession
                                    </div>

                                    <div className="col-md-3">
                                        Employer Name
                                    </div>

                                    <div className="col-md-3">
                                        Employer Address
                                    </div>
                                </div>

                                <div className="row mt-5">
                                    <div className="col-md-3">
                                        State of Origin
                                    </div>

                                    <div className="col-md-3">
                                        Nationality
                                    </div>

                                    <div className="col-md-3">
                                        ...
                                    </div>

                                    <div className="col-md-3">
                                        <button className="btn btn-secondary">Update Info</button>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PersonalInfo;