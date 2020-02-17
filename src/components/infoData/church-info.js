import React, {Component} from 'react';
import './churchInfoStyle.css';

class ChurchInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header church-info-header">
                                Church Information
                            </div>

                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        WSF Status
                                    </div>

                                    <div className="col-md-4">
                                        New Birth Year
                                    </div>

                                    <div className="col-md-4">
                                        Holy Spirit Year
                                    </div>
                                </div>

                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        LFC Joined year
                                    </div>

                                    <div className="col-md-4">
                                        Ordination year
                                    </div>

                                    <div className="col-md-4">
                                        Province
                                    </div>
                                </div>

                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        District
                                    </div>

                                    <div className="col-md-4">
                                        Zone
                                    </div>

                                    <div className="col-md-4">
                                        <button className="btn btn-secondary">
                                            Update Info
                                        </button>
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

export default ChurchInfo;