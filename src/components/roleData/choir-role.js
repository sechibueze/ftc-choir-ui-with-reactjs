import React, {Component} from 'react';
import './roleStyle.css';

class ChoirRole extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header choir-role-header">
                                Choir Role
                            </div>

                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        Membership Status
                                    </div>

                                    <div className="col-md-3">
                                        Leadership Status
                                    </div>

                                    <div className="col-md-3">
                                        Slob group
                                    </div>

                                    <div className="col-md-3">
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

export default ChoirRole;