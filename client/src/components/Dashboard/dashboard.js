import React, {Component} from 'react';
import './dashboard.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';
import Footer from "../layouts/footer/footer";
import PersonalInfo from "../personalData/personal-info";
import NokInfo from "../nokData/nok-info";
import ChoirRole from "../roleData/choir-role";
import ChurchInfo from "../infoData/church-info";

class Dashboard extends Component {


    render() {
        const { user } = this.props.auth;

        return (
            <div className="container">
                <h3>Hello, User Howdy?</h3>

                <PersonalInfo/>
                <NokInfo/>
                <ChoirRole/>
                <ChurchInfo/>
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