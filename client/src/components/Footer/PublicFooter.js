import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class PublicFooter extends React.Component {
    render() {
        return (
            <footer className="footer px-5" style={{backgroundColor:"#f0f0f0"}}>
                <Row className="align-items-center justify-content-xl-between">
                    <Col xl="6">
                        <div className="copyright text-center text-xl-left text-muted">
                            © 2020{" "}
                            <a
                                className="font-weight-bold ml-1"
                                href=""
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Online Shopping
                            </a>
                        </div>
                    </Col>

                    <Col xl="6">
                        <Nav className="nav-footer justify-content-center justify-content-xl-end">
                            <NavItem>
                                <NavLink
                                    href=""
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Online Shopping
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    href="footer"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    About Us
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    href=""
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </footer>
        );
    }
}

export default PublicFooter;
