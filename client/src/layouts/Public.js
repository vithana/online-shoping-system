
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";

// core components
import LandingNavbar from "../components/Navbar/LandingNavbar";
import LandingHeader from "../components/Header/LandingHeader";
// import AdminFooter from "../components/Footer/Footer";
// import Sidebar from "../components/Sidebar/Sidebar";

import routes from "../routes";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../actions/authActions";


class Public extends React.Component {
    componentDidUpdate(e) {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.mainContent.scrollTop = 0;
    }

    render() {
        return (
            <>
                <LandingNavbar
                    {...this.props}
                />
                <LandingHeader
                    {...this.props}
                />
                <div className="main-content" ref="mainContent">
                </div>
            </>
        );
    }
}

Public.propTypes = {
    logoutUser: PropTypes.func,
    auth: PropTypes.object
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Public);
