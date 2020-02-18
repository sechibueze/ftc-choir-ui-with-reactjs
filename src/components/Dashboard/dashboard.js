import React, {Component} from 'react';
import './dashboard.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { logoutUser } from '../../actions/authAction';
import Footer from "../layouts/footer/footer";
import PersonalInfo from "../personalData/personal-info";
import NokInfo from "../nokData/nok-info";
import ChoirRole from "../roleData/choir-role";
import ChurchInfo from "../infoData/church-info";
import {Link} from "react-router-dom";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        };
    }

    render() {
        const { user } = this.props.auth;

        return (
            <div className="container">
                <h3>Hello, {user.firstname.split(' ')} {user.lastname} Howdy?</h3>
                {/*<p>{user.rehearsal_location}, {user.gender}, {user.id}</p>*/}

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    {user.title}
                                </div>
                                <div className="col-md-6">
                                    {user.email}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    {user.unit_id}
                                </div>
                                <div className="col-md-6">
                                    {user.rehearsal_location}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    {user.vocal_part}
                                </div>
                                <div className="col-md-6">
                                    {user.group}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


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
                                            <p>{user.phone}</p>
                                        </div>

                                        <div className="col-md-3">
                                            Whatsapp Number
                                            <p>{user.whatsapp_phone}</p>
                                        </div>

                                        <div className="col-md-3">
                                            Email Address
                                            <p>{user.email}</p>
                                        </div>

                                        <div className="col-md-3">
                                            Contact Address
                                            <p>{user.contact_address}</p>
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-3">
                                            PHA
                                            <p>{user.pha}</p>
                                        </div>

                                        <div className="col-md-3">
                                            DOB
                                            <p>{user.dob}</p>
                                        </div>

                                        <div className="col-md-3">
                                            Wedding State
                                            <p>{user.wed_date}</p>
                                        </div>

                                        <div className="col-md-3">
                                            Marital Status
                                            <p>{user.marital_status}</p>
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-3">
                                            Work Status
                                            <p>{user.work_status}</p>
                                        </div>

                                        <div className="col-md-3">
                                            Profession
                                            <p>{user.profession}</p>
                                        </div>

                                        <div className="col-md-3">
                                            Employer Name
                                            <p>{user.employer_name}</p>
                                        </div>

                                        <div className="col-md-3">
                                            Employer Address
                                            <p>{user.employer_address}</p>
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-3">
                                            State of Origin
                                            <p>{user.state_origin}</p>
                                        </div>

                                        <div className="col-md-3">
                                            Nationality
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
                                            <p>{user.nok_name}</p>
                                        </div>

                                        <div className="col-md-4">
                                            Address
                                            <p>{user.nok_address}</p>
                                        </div>

                                        <div className="col-md-4">
                                            Phone
                                            <p>{user.nok_phone}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-md-4">
                                            Occupation
                                            <p>{user.nok_occupation}</p>
                                        </div>

                                        <div className="col-md-4">
                                            Relation
                                            <p>{user.nok_occupation}</p>
                                        </div>

                                        <div className="col-md-4">
                                            Email
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
                                            <p>{user.membership_status}</p>
                                        </div>

                                        <div className="col-md-3">
                                            Leadership Status
                                            <p>{user.leadership_status}</p>
                                        </div>

                                        <div className="col-md-3">
                                            Sub group
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
                                            <p>{user.wsf_status}</p>
                                        </div>

                                        <div className="col-md-4">
                                            New Birth Year
                                            <p>{user.new_birth_year}</p>
                                        </div>

                                        <div className="col-md-4">
                                            Holy Spirit Year
                                            <p>{user.holy_spirit_year}</p>
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-4">
                                            LFC Joined year
                                            <p>{user.lfc_joined_year}</p>
                                        </div>

                                        <div className="col-md-4">
                                            Ordination year
                                            <p>{user.ordination_year}</p>
                                        </div>

                                        <div className="col-md-4">
                                            Province
                                            <p>{user.province}</p>
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-4">
                                            District
                                            <p>{user.district}</p>
                                        </div>

                                        <div className="col-md-4">
                                            Zone
                                            <p>{user.zone}</p>
                                        </div>

                                        <div className="col-md-4">
                                            <Link to={"/"} className="btn btn-secondary">
                                                Update Info
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">

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


Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    { logoutUser },
)(Dashboard);