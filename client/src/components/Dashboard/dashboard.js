import React, {Component} from 'react';
import './dashboard.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';
import Footer from "../layouts/footer/footer";

class Dashboard extends Component {


    render() {
        const { user } = this.props.auth;

        return (
            <div>
                <h3>Hello {user.firstname.split(' ')[0]}, Howdy?</h3>

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