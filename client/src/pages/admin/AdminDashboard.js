import React , {Component} from "react";

import Header from "../../components/Header/Header";
//import {Card, CardBody, Container} from "reactstrap";
import {Line,Bar} from "react-chartjs-2";
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2} from "../../variables/charts";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";
class AdminDashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            activeNav: 1,
            chartExample1Data: "data1"
        };
        if (window.Chart) {
            parseOptions(Chart, chartOptions());
        }
    }
    toggleNavs = (e, index) => {
        e.preventDefault();
        this.setState({
            activeNav: index,
            chartExample1Data:
                this.state.chartExample1Data === "data1" ? "data2" : "data1"
        });
    };

    render() {
        return (
            <>
                <Header/>
                <Container className="mt--7" fluid>
                    <Row>
                        <Col className="mb-5 mb-xl-0" xl="12">
                            <Card className="bg-gradient-default shadow">
                                <CardBody>
                                    {/* Chart */}
                                    <h4 className="text-center text-white">Welcome to Admin Dashboard</h4>
                                    <h5 className="text-center text-white">Welcome to Admin Dashboard.Now you can view all details about orders,catagories,users,store managers and products</h5>
                                    <img src="../../" />
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </Container>

            </>
        )
    }

}

export default AdminDashboard;
