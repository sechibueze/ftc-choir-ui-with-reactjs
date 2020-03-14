import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

class DashboardDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {},
        };
    }

    componentDidMount() {
        axios
            .get('https://ftc-api.herokuapp.com/api/users/detail/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    users: res.data,
                });
            })
            .catch(err => {
                console.log('Error from DashboardDetail page');
            });
    }

    onDeleteClick(id) {
        axios
            .delete('https://ftc-api.herokuapp.com/api/users/' + id)
            .then(res => {
                this.props.history.push('/dashboard');
            })
            .catch(err => {
                console.log('Error from employeeDetail_deleteClick');
            });
    }


    render() {
        const user = this.state.users;
        let userItem = (
            <div className="container">

                <div className="container mb-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">General Information</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <strong>Title</strong>
                                            <p>{user.title}</p>
                                            <p>{this.props.match.title}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <strong>Email Address</strong>
                                            <p>{user.email}</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">

                                            <strong>Unit ID</strong>
                                            <p>{user.unit_id}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <strong>Rehearsal Location</strong>
                                            <p>{user.rehearsal_location}</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <strong>Vocal Part</strong>
                                            <p>{user.vocal_part}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <strong>Group</strong>
                                            <p>{user.group}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header personal-info-header">
                                    Personal Information
                                </div>

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <strong>Mobile Number</strong>
                                            <p>{user.phone}</p>
                                        </div>

                                        <div className="col-md-3">
                                            <strong>Whatsapp Number</strong>
                                            <p>{user.whatsapp_phone}</p>
                                        </div>

                                        <div className="col-md-3">
                                            <strong>Email Address</strong>
                                            <p>{user.email}</p>
                                        </div>

                                        <div className="col-md-3">
                                            <strong>Current Residential Address</strong>
                                            <p>{user.contact_address}</p>
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-3">
                                            <strong>Permanent Home Address</strong>
                                            <p>{user.pha}</p>
                                        </div>

                                        <div className="col-md-3">
                                            <strong>Date of Birth (DD/MM)</strong>
                                            <p>{user.dob}</p>
                                        </div>

                                        <div className="col-md-3">
                                            <strong>Wedding Date</strong>
                                            <p>{user.wed_date}</p>
                                        </div>

                                        <div className="col-md-3">
                                            <strong>Marital Status</strong>
                                            <p>{user.marital_status}</p>
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-3">
                                            <strong>Employment Status</strong>
                                            <p>{user.work_status}</p>
                                        </div>

                                        <div className="col-md-3">
                                            <strong>Profession / Occupation</strong>
                                            <p>{user.profession}</p>
                                        </div>

                                        <div className="col-md-3">
                                            <strong>Employer's Name</strong>
                                            <p>{user.employer_name}</p>
                                        </div>

                                        <div className="col-md-3">
                                            <strong>Employer's Contact</strong>
                                            <p className="text-black-50">Preferably Mobile number</p>
                                            <p>{user.employer_address}</p>
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-3">
                                            <strong>State of Origin</strong>
                                            <p>{user.state_origin}</p>
                                        </div>

                                        <div className="col-md-3">
                                            <strong>Nationality</strong>
                                            <p>{user.nationality}</p>
                                        </div>

                                        <div className="col-md-3">...</div>

                                        <div className="col-md-3">
                                            {/*<Link*/}
                                            {/*    to={`https://ftc-api.herokuapp.com/api/personal/${personal._id}`}*/}
                                            {/*    className="btn btn-secondary"*/}
                                            {/*>*/}
                                            {/*    Update Info*/}
                                            {/*</Link>*/}
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header nok-header">
                                    Next of Kin Information
                                </div>

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <strong>Name</strong>
                                            <p>{user.nok_name}</p>
                                        </div>

                                        <div className="col-md-4">
                                            <strong>Address</strong>
                                            <p>{user.nok_address}</p>
                                        </div>

                                        <div className="col-md-4">
                                            <strong>Phone</strong>
                                            <p>{user.nok_phone}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-md-4">
                                            <strong>Occupation</strong>
                                            <p>{user.nok_occupation}</p>
                                        </div>

                                        <div className="col-md-4">
                                            <strong>Relation</strong>
                                            <p>{user.nok_occupation}</p>
                                        </div>

                                        <div className="col-md-4">
                                            <strong>Email</strong>
                                            <p>{user.nok_email}</p>
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
                                            {/*<button className="btn btn-secondary">Update Info</button>*/}
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header choir-role-header">
                                    Choir Role
                                </div>

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <strong>Membership Status</strong>
                                            <p>{user.membership_status}</p>
                                        </div>

                                        <div className="col-md-3">
                                            <strong>Leadership Status</strong>
                                            <p>{user.leadership_status}</p>
                                        </div>

                                        <div className="col-md-3">
                                            <strong>Sub group</strong>
                                            <p>{user.sub_group}</p>
                                        </div>

                                        <div className="col-md-3">
                                            {/*<button className="btn btn-secondary">*/}
                                            {/*    Update Info*/}
                                            {/*</button>*/}
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header church-info-header">
                                    Church Information
                                </div>

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <strong>WSF Status</strong>
                                            <p>{user.wsf_status}</p>
                                        </div>

                                        <div className="col-md-4">
                                            <strong>New Birth Year</strong>
                                            <p>{user.new_birth_year}</p>
                                        </div>

                                        <div className="col-md-4">
                                            <strong>Holy Spirit Year</strong>
                                            <p>{user.holy_spirit_year}</p>
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-4">
                                            <strong>LFC Joined year</strong>
                                            <p>{user.lfc_joined_year}</p>
                                        </div>

                                        <div className="col-md-4">
                                            <strong>Ordination year</strong>
                                            <p>{user.ordination_year}</p>
                                        </div>

                                        <div className="col-md-4">
                                            <strong>Province</strong>
                                            <p>{user.province}</p>
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-4">
                                            <strong>District</strong>
                                            <p>{user.district}</p>
                                        </div>

                                        <div className="col-md-4">
                                            <strong>Zone</strong>
                                            <p>{user.zone}</p>
                                        </div>

                                        <div className="col-md-4">

                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Link
                                                to="/dashboard"
                                                className="btn btn-outline-danger d-block">
                                                back to Dashboard
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );

        return (
            <div>
                {userItem}
            </div>
        );
    }
}

export default DashboardDetail;