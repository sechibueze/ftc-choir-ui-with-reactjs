import React, {Component} from 'react';
import './nokStyle.css';

class NokInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header nok-header">
                                NOK
                            </div>

                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        Name
                                    </div>

                                    <div className="col-md-4">
                                        Address
                                    </div>

                                    <div className="col-md-4">
                                        Phone
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        Occupation
                                    </div>

                                    <div className="col-md-4">
                                        Relation
                                    </div>

                                    <div className="col-md-4">
                                        Email
                                    </div>
                                </div>

                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        ...
                                    </div>

                                    <div className="col-md-4">
                                        ...
                                    </div>

                                    <div className="col-md-4">
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

export default NokInfo;