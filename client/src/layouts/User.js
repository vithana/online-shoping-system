
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";

// core components
import Navbar from "../components/Navbar/AdminNavbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

import routes from "../routes";


class User extends React.Component {
    componentDidUpdate(e) {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.mainContent.scrollTop = 0;
    }
    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/user") {
                return (
                    <Route
                        path={prop.layout + prop.path}
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
                <Sidebar
                    {...this.props}
                    layout="/user"
                    routes={routes}
                    logo={{
                        innerLink: "/admin/index",
                        imgSrc: require("../assets/img/brand/argon-react.png"),
                        imgAlt: "..."
                    }}
                />
                <div className="main-content" ref="mainContent">
                    <Navbar
                        {...this.props}
                        NavbarText="Member Area"
                    />
                    <Switch>

                        {this.getRoutes(routes)}
                    </Switch>
                    <Container fluid>
                        <Footer />
                    </Container>
                </div>
            </>
        );
    }
}

export default User;
