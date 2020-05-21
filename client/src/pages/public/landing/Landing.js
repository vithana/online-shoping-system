import React , {Component} from "react";

import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../../actions/authActions";


class Landing extends Component{

    render() {
        return (
            <>

            </>
        )
    }

}

Landing.propTypes = {
    logoutUser: PropTypes.func,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser })
(Landing);
