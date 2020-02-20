import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Footer from "../layouts/footer/footer";


class EditDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unit_id: '',
            title: '',
            firstname: '',
            lastname: '',
            email: '',
            group: '',
            vocal_part: '',
            rehearsal_location: '',
            gender: '',
            phone: '',
            whatsapp_phone: '',
            contact_address: '',
            pha: '',
            dob: '',
            wed_date: '',
            marital_status: '',
            work_status: '',
            profession: '',
            employer_name: '',
            employer_address: '',
            state_origin: '',
            nationality: '',
            nok_name: '',
            nok_address: '',
            nok_phone: '',
            nok_occupation: '',
            nok_relation: '',
            nok_email: '',
            membership_status: '',
            leadership_status: '',
            sub_group: '',
            wsf_status: '',
            new_birth_year: '',
            holy_spirit_year: '',
            lfc_joined_year: '',
            ordination_year: '',
            province: '',
            district: '',
            zone: '',
        };
    }

    componentDidMount() {
        axios
            .get('https://ftc-api.herokuapp.com/api/users/detail/' + this.props.match.params.id)
            .then( response => {
                this.setState({
                    unit_id: response.data.unit_id,
                    title: response.data.title,
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    email: response.data.email,
                    group: response.data.group,
                    vocal_part: response.data.vocal_part,
                    rehearsal_location: response.data.rehearsal_location,
                    gender: response.data.gender,
                    phone: response.data.phone,
                    whatsapp_phone: response.data.whatsapp_phone,
                    contact_address: response.data.contact_address,
                    pha: response.data.pha,
                    dob: response.data.dob,
                    wed_date: response.data.wed_date,
                    marital_status: response.data.marital_status,
                    work_status: response.data.work_status,
                    profession: response.data.profession,
                    employer_name: response.data.employer_name,
                    employer_address: response.data.employer_name,
                    state_origin: response.data.state_origin,
                    nationality: response.data.nationality,
                    nok_name: response.data.nok_name,
                    nok_address: response.data.nok_address,
                    nok_phone: response.data.nok_phone,
                    nok_occupation: response.data.nok_occupation,
                    nok_relation: response.data.nok_relation,
                    nok_email: response.data.nok_email,
                    membership_status: response.data.membership_status,
                    leadership_status: response.data.leadership_status,
                    sub_group: response.data.sub_group,
                    wsf_status: response.data.wsf_status,
                    new_birth_year: response.data.new_birth_year,
                    holy_spirit_year: response.data.holy_spirit_year,
                    lfc_joined_year: response.data.lfc_joined_year,
                    ordination_year: response.data.ordination_year,
                    province: response.data.province,
                    district: response.data.district,
                    zone: response.data.zone,

                });
            })
            .catch(err => {
                console.log('Error in update info');
            });
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            unit_id: this.state.unit_id,
            title: this.state.title,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            group: this.state.group,
            vocal_part: this.state.vocal_part,
            rehearsal_location: this.state.rehearsal_location,
            gender: this.state.gender,
            phone: this.state.phone,
            whatsapp_phone: this.state.whatsapp_phone,
            contact_address: this.state.contact_address,
            pha: this.state.pha,
            dob: this.state.dob,
            wed_date: this.state.wed_date,
            marital_status: this.state.marital_status,
            work_status: this.state.work_status,
            profession: this.state.profession,
            employer_name: this.state.employer_name,
            employer_address: this.state.employer_address,
            state_origin: this.state.state_origin,
            nationality: this.state.nationality,
            nok_name: this.state.nok_name,
            nok_address: this.state.nok_address,
            nok_phone: this.state.nok_phone,
            nok_occupation: this.state.nok_occupation,
            nok_relation: this.state.nok_relation,
            nok_email: this.state.nok_email,
            membership_status: this.state.membership_status,
            leadership_status: this.state.leadership_status,
            sub_group: this.state.sub_group,
            wsf_status: this.state.wsf_status,
            new_birth_year: this.state.new_birth_year,
            holy_spirit_year: this.state.new_birth_year,
            lfc_joined_year: this.state.lfc_joined_year,
            ordination_year: this.state.ordination_year,
            province: this.state.province,
            district: this.state.district,
            zone: this.state.zone,
        };

        axios
            .put('https://ftc-api.herokuapp.com/api/users/update/' + this.props.match.params.id, data)
            .then( res => {
                this.props.history.push('/dashboard')
            })
            .catch(err => {
                console.log('Error in update infos')
            });

    };

    render() {
        return (
            <div className="container">

                <form
                    noValidate
                    className="card-body"
                    onSubmit={this.onSubmit}>
                    <div className="container mb-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">General Information</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="title">Title</label>
                                            <select
                                                className="custom-select"
                                                name="title"
                                                value={this.state.title}
                                                onChange={this.onChange}
                                            >
                                                <option value="Dncs.">Dncs.</option>
                                                <option value="Mr.">Mr.</option>
                                                <option value="Mrs.">Mrs.</option>
                                                <option value="Dncs.">Dcns.</option>
                                                <option value="Pst.">Pst.</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">

                                            <label htmlFor="unit_id">Unit ID</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="unit_id"
                                                value={this.state.unit_id}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="rehearsal_location">Rehearsal Location</label>
                                            <select
                                                className="custom-select"
                                                name="rehearsal_location"
                                                value={this.state.rehearsal_location}
                                                onChange={this.onChange}
                                            >
                                                <option value="Canaanland">Canaanland</option>
                                                <option value="Raji Oba">Raji Oba</option>
                                                <option value="Ikoyi">Ikoyi</option>
                                                <option value="Oregun">Oregun</option>
                                                <option value="Festac">Festac</option>
                                                <option value="Iyana Ishasi 1008">Iyana Ishasi 1008</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="vocal_part">Vocal Part</label>
                                            <select
                                                className="custom-select"
                                                name="vocal_part"
                                                value={this.state.vocal_part}
                                                onChange={this.onChange}
                                            >
                                                <option value="Soprano">Soprano</option>
                                                <option value="Alto">Alto</option>
                                                <option value="Tenor">Tenor</option>
                                                <option value="Musician">Musician</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="group">Group</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="group"
                                                value={this.state.group}
                                                onChange={this.onChange}
                                            />
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
                                            <label htmlFor="phone">Mobile Phone Number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="phone"
                                                value={this.state.phone}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="whatsapp_phone">Whatsapp Phone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="whatsapp_phone"
                                                value={this.state.whatsapp_phone}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="contact_address">Contact Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="contact_address"
                                                value={this.state.contact_address}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-3">
                                            <label htmlFor="pha">PHA</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="pha"
                                                value={this.state.pha}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="dob">Date of Birth</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="dob"
                                                value={this.state.dob}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="wed_date">Wedding Date</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="wed_date"
                                                value={this.state.wed_date}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="marital_status">Marital Status</label>
                                            <select
                                                className="custom-select"
                                                name="marital_status"
                                                value={this.state.marital_status}
                                                onChange={this.onChange}
                                            >
                                                <option value="Single">Single</option>
                                                <option value="In a Relationship">In a Relationship</option>
                                                <option value="Engaged">Engaged</option>
                                                <option value="Married">Married</option>
                                                <option value="Separated">Separated</option>
                                                <option value="Divorced">Divorced</option>
                                                <option value="Widowed">Widowed</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-3">
                                            <label htmlFor="work_status">Work Status</label>
                                            <select
                                                className="custom-select"
                                                name="work_status"
                                                value={this.state.work_status}
                                                onChange={this.onChange}
                                            >
                                                <option>Seeking Employment</option>
                                                <option>Employed</option>
                                                <option>Self Employed</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="profession">Profession</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="profession"
                                                value={this.state.profession}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="employer_name">Employer Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="employer_name"
                                                value={this.state.employer_name}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="employer_address">Employer Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="employer_address"
                                                value={this.state.employer_address}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-3">
                                            <label htmlFor="state_origin">State of Origin</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="state_origin"
                                                value={this.state.state_origin}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="nationality">Nationality</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="nationality"
                                                value={this.state.nationality}
                                                onChange={this.onChange}
                                            />
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

                            </div>
                        </div>
                    </div>
                </div>
                    <div className="container mb-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header nok-header">
                                    NOK
                                </div>

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="nok_name">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="nok_name"
                                                value={this.state.nok_name}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="nok_address">Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="nok_address"
                                                value={this.state.nok_address}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="nok_phone">Phone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="nok_phone"
                                                value={this.state.nok_phone}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-md-4">
                                            <label htmlFor="nok_occupation">Occupation</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="nok_occupation"
                                                value={this.state.nok_occupation}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="nok_relation">Relation</label>
                                            <select
                                                className="custom-select"
                                                name="nok_relation"
                                                value={this.state.nok_relation}
                                                onChange={this.onChange}
                                            >
                                                <option value="Spouse">Spouse</option>
                                                <option value="Parent">Parent</option>
                                                <option value="Sibling">Sibling</option>
                                                <option value="Relative">Relative</option>
                                                <option value="Mentor">Mentor</option>
                                                <option value="Protege">Protege</option>
                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="nok_email">Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="nok_email"
                                                value={this.state.nok_email}
                                                onChange={this.onChange}
                                            />
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
                                            <label htmlFor="membership_status">Membership Status</label>
                                            <select
                                                className="custom-select"
                                                name="membership_status"
                                                value={this.state.membership_status}
                                                onChange={this.onChange}
                                            >
                                                <option>Member</option>
                                                <option>Ordained worker</option>
                                                <option>Pastorate</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3">
                                            <label htmlFor="leadership_status">Leadership Status</label>
                                            <select
                                                className="custom-select"
                                                name="leadership_status"
                                                value={this.state.leadership_status}
                                                onChange={this.onChange}
                                            >
                                                <option value="Choir Master">Choir Master</option>
                                                <option value="Asst. Choir Master">Asst. Choir Master</option>
                                                <option value="Choir Secretary">Choir Secretary</option>
                                                <option value="Asst. Choir Secretary">Asst. Choir Secretary</option>
                                                <option value="Song Teacher">Song Teacher</option>
                                                <option value="Part Head">Part Head</option>
                                                <option value="Head of Musician">Head of Musician</option>
                                                <option value="Group Leader">Group Leader</option>
                                                <option value="Group Secretary">Group Secretary</option>
                                                <option value="Chorister">Chorister</option>
                                            </select>
                                        </div>

                                        <div className="col-md-7">
                                            <label htmlFor="sub_group">Sub Group</label>
                                            <select
                                                className="custom-select"
                                                name="sub_group"
                                                value={this.state.sub_group}
                                                onChange={this.onChange}
                                            >
                                                <option value="Music Team">Music Team</option>
                                                <option value="Praise Team">Praise Team</option>
                                                <option value="Medical Team">Medical Team</option>
                                                <option value="Technical Unit">Technical Unit</option>
                                                <option value="Royal Apparel">Royal Apparel</option>
                                                <option value="FTC Secretariat/Protocol">FTC Secretariat / Protocol</option>
                                                <option value="Covenant Partner">Covenant Partner</option>
                                                <option value="Legal Team">Legal Team</option>
                                                <option value="Welfare Team">Welfare Team</option>
                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            {/*<button className="btn btn-secondary">*/}
                                            {/*    Update Info*/}
                                            {/*</button>*/}
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
                                <div className="card-header church-info-header">
                                    Church Information
                                </div>

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="wsf_status">WSF Status</label>
                                            <select
                                                className="custom-select"
                                                name="wsf_status"
                                                value={this.state.wsf_status}
                                                onChange={this.onChange}
                                            >
                                                <option value="Provincial Pastor">Provincial Pastor</option>
                                                <option value="District Pastor">District Pastor</option>
                                                <option value="Home Provider">Home Provider</option>
                                                <option value="Cell Minister">Cell Minister</option>
                                                <option value="Asst. Cell Minister">Asst. Cell Minister</option>
                                                <option value="Cell Secretary">Cell Secretary</option>
                                                <option value="Zonal Minister">Zonal Minister</option>
                                                <option value="Asst. Zonal Minister">Asst. Zonal Minister</option>
                                                <option value="Chairman (Zonal Council)">Chairman (Zonal Council)</option>
                                                <option value="Asst. Chairman (Zonal Council)">Asst. Chairman (Zonal Council)</option>
                                                <option value="Secretary (Zonal Council)">Secretary (Zonal Council)</option>
                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="new_birth_year">New Birth Year</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="new_birth_year"
                                                value={this.state.new_birth_year}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="holy_spirit_year">Holy Spirit Year</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="holy_spirit_year"
                                                value={this.state.holy_spirit_year}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-4">
                                            <label htmlFor="lfc_joined_year">LFC Joined year</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="lfc_joined_year"
                                                value={this.state.lfc_joined_year}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="ordination_year">Ordination Year</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="ordination_year"
                                                value={this.state.ordination_year}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="province">Province</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="province"
                                                value={this.state.province}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-4">
                                            <label htmlFor="district">District</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="district"
                                                value={this.state.district}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <label htmlFor="zone">Zone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="zone"
                                                value={this.state.zone}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-lg d-block">Save Info</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
                <Footer/>
            </div>
        );
    }
}

export default EditDashboard;