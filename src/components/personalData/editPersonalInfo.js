import React, {Component} from 'react';
import axios from 'axios';


class EditPersonalInfo extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                phone: '',
                whatsapp_phone: '',
                email: '',
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
            }
        }
    }

    componentDidMount() {
        axios
            .get('https://ftc2-api.herokuapp.com/api/personal/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    phone: response.data.phone,
                    whatsapp_phone: response.data.whatsapp_phone,
                    email: response.data.email,
                    contact_address: response.data.contact_address,
                    pha: response.data.pha,
                    dob: response.data.dob,
                    wed_date: response.data.wed_date,
                    marital_status: response.data.marital_status,
                    work_status: response.data.work_status,
                    profession: response.data.profession,
                    employer_name: response.data.employer_name,
                    employer_address: response.data.employer_address,
                    state_origin: response.data.state_origin,
                    nationality: response.data.nationality,
                });
            })
            .catch( err => {
                console.log('Error from personal info');
            });
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();


        const data = {
            phone: this.state.phone,
            whatsapp_phone: this.state.whatsapp_phone,
            email: this.state.email,
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
        };
        axios
            .put('https://ftc-api.herokuapp.com/api/personal/' + this.props.match.params.id, data)
            .then( res => {
                this.props.history.push('/personal-info');
            })
            .catch(err => {
                console.log('Error in personal section');
            });
    };


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form noValidate  onSubmit={this.onSubmit}>
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                        </div>

                                        <div className="card-body">
                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="phone">Phone</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           name="phone"
                                                           placeholder="Mobile phone number"
                                                           value={this.state.phone}
                                                           onChange={this.onChange}
                                                    />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label htmlFor="whatsapp_phone">Whatsapp Phone</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           name="whatsapp_phone"
                                                           placeholder="Whatsapp phone number"
                                                           value={this.state.whatsapp_phone}
                                                           onChange={this.onChange}
                                                    />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label htmlFor="email">Email Address</label>
                                                    <input type="email"
                                                           className="form-control"
                                                           name="email"
                                                           placeholder="Email address"
                                                           value={this.state.email}
                                                           onChange={this.onChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="contact_address">Contact Address</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           name="contact_address"
                                                           placeholder="Contact address"
                                                           value={this.state.contact_address}
                                                           onChange={this.onChange}
                                                    />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label htmlFor="pha">PHA</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           name="pha"
                                                           placeholder="PHA"
                                                           value={this.state.pha}
                                                           onChange={this.onChange}
                                                    />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label htmlFor="dob">Date of Birth</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           name="dob"
                                                           placeholder="Date of Birth"
                                                           value={this.state.dob}
                                                           onChange={this.onChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="wed_date">Phone</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           name="wed_date"
                                                           placeholder="Wedding Union date"
                                                           value={this.state.wed_date}
                                                           onChange={this.onChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-footer"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header"/>

                                        <div className="card-body">
                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="marital_status">Marital Status</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           name="marital_status"
                                                           placeholder="Marital Status"
                                                           value={this.state.marital_status}
                                                           onChange={this.onChange}
                                                    />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label htmlFor="work_status">Work Status</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           name="work_status"
                                                           placeholder="Work Status"
                                                           value={this.state.work_status}
                                                           onChange={this.onChange}
                                                    />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label htmlFor="profession">Profession</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           name="profession"
                                                           placeholder="Profession"
                                                           value={this.state.profession}
                                                           onChange={this.onChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="employer_name">Employer Name</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           name="employer_name"
                                                           placeholder="Employer Name"
                                                           value={this.state.employer_name}
                                                           onChange={this.onChange}
                                                    />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label htmlFor="employer_address">Employer Address</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           name="employer_address"
                                                           placeholder="Employer address"
                                                           value={this.state.employer_address}
                                                           onChange={this.onChange}
                                                    />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label htmlFor="state_origin">State of Origin</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           name="state_origin"
                                                           placeholder="State of origin"
                                                           value={this.state.state_origin}
                                                           onChange={this.onChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="nationality">Nationality</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           name="nationality"
                                                           placeholder="Nationality"
                                                           value={this.state.nationality}
                                                           onChange={this.onChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group col-md-4">
                                                <button type="submit" className="btn btn-success">Save changes...</button>
                                            </div>
                                        </div>

                                        <div className="card-footer"/>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </form>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default EditPersonalInfo;