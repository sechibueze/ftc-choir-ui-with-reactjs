import React, { Component } from 'react';
import './dashboard.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { logoutUser, setCurrentUser } from '../../actions/authAction';
import Footer from "../layouts/footer/footer";
// import PersonalInfo from "../personalData/personal-info";
// import NokInfo from "../nokData/nok-info";
// import ChoirRole from "../roleData/choir-role";
// import ChurchInfo from "../infoData/church-info";
import { Link, Redirect } from "react-router-dom";
// import $ from 'jquery';
// import FilesUpload from "../file-upload/file-upload";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {},
        };
    }

    componentDidMount() {
        console.log('Dash componentdidmount::props', this.props)
        if (!this.props.auth.isAuthenticated) {
            return this.props.history.push('/login')
        }
        console.log('User to set::props', this.props)
        // console.log('props has seCurrent User::', this.props)
        const _id = localStorage.getItem('userId');
        console.log('User from localStorage to set::', _id)
        const id = this.props.user.user || _id;
        console.log('User to set::', id)
        axios.get(`https://ftc2020-api.herokuapp.com/api/v1/auth/users/${id}`)
            .then(res => {
                console.log('logged in User data', res.data)
                if (res.data.status) {
                    this.props.setCurrentUser(res.data.data)
                }
            })
        // $(document).on("click", ".browse", function () {
        //     var file = $(this).parents().find(".file");
        //     file.trigger("click");
        // });
        // $('input[type="file"]').change(function (e) {
        //     var fileName = e.target.files[0].name;
        //     $("#file").val(fileName);

        //     var reader = new FileReader();
        //     reader.onload = function (e) {
        //         // get loaded data and render thumbnail.
        //         document.getElementById("preview").src = e.target.result;
        //     };
        //     // read the image file as a data URL.
        //     reader.readAsDataURL(this.files[0]);
        // });

    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };


    render() {
        if (!this.props.auth.isAuthenticated) {
            return <Redirect to="/login" />
        } else {
            console.log('Dash::componentDidiMount props in render', this.props)
            const { user } = this.props;
            console.log('Dashboard:: Userdata to render :: props', user);
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-header">
                                <h3>Hello, {user.firstname} {user.lastname}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <img src={user.profileImag} alt="aimage "
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 10,
                                    margin: 'auto',
                                    textAlign: 'center'
                                }} />
                            <Link to={`/profileimage/${user._id}`}>Edit profile image</Link>
                        </div>
                    </div>

                    {/*<FilesUpload/>*/}

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

                                    <div className="card-footer" />
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
                                                <Link to={`/update-info/${user._id}`} className="btn btn-secondary">
                                                    Update Info
                                            </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <button
                                                    onClick={this.onLogoutClick}
                                                    className="btn btn-outline-danger d-block">
                                                    Log out
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            );
        }



    }

}


// Dashboard.propTypes = {
//     logoutUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
// };
const mapStateToProps = state => ({
    auth: state.auth,
    user: state.auth.user
});

export default connect(
    mapStateToProps,
    { logoutUser, setCurrentUser },
)(Dashboard);