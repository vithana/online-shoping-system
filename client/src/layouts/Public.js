
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
    getRoutes = routes => {
        return routes.map((prop, key) => {

            if (prop.layout === "/") {
                console.log(prop.layout, prop.path);
                return (
                    <Route
                        exact path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    render() {
        return (
            <>
                    <LandingNavbar
                        {...this.props}
                    />
                    <LandingHeader
                        {...this.props}
                    />

                    <Switch>

                        {this.getRoutes(routes)}
                    </Switch>
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
