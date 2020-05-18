import React , {Component} from "react";

import Header from "../../../components/Header/Header";

import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip
} from "reactstrap";
import axios from "axios";
import {GET_ERRORS} from "../../../actions/types";
import index from "../../../reducers";

class AllOrders extends Component{

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            orders: [],
            user_name: null
        };
    }

    componentDidMount() {
        axios
            .get("/api/orders/all")
            .then(res => {
                this.setState({
                    isLoaded: true,
                    orders: res.data
                });
            })
            .catch(err =>{
                this.setState({
                    isLoaded: true,
                    err
                });
            });
    }

    loadUserName = (user_id) => {
        axios
            .get("/api/users/getUser/"+user_id)
            .then(res => {
                this.setState({
                    isLoaded: true,
                    user_name: res.data.name
                });
            })
            .catch(err =>{
                this.setState({
                    isLoaded: true,
                    err
                });
            });
    };

    render() {
        return (
            <>
                <Header/>

                <Container className="mt--7" fluid>
                    {/* Table */}
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <h3 className="mb-0">Orders table</h3>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">User Name </th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Payment Type</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.orders.map((value, index) => {
                                                return (
                                                    <tr key={value._id}>
                                                        <td scope="row">{index+1}</td>
                                                        <td scope="row">
                                                            {this.loadUserName(value.user_id)}
                                                            {this.state.user_name}
                                                        </td>
                                                        <td scope="row">{value.total}</td>
                                                        <td scope="row">{value.payment_type}</td>
                                                        <td scope="row">{value.status}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                                <CardFooter className="py-4">
                                    <nav aria-label="...">
                                        <Pagination
                                            className="pagination justify-content-end mb-0"
                                            listClassName="justify-content-end mb-0"
                                        >
                                            <PaginationItem className="disabled">
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                    tabIndex="-1"
                                                >
                                                    <i className="fas fa-angle-left" />
                                                    <span className="sr-only">Previous</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem className="active">
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    2 <span className="sr-only">(current)</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fas fa-angle-right" />
                                                    <span className="sr-only">Next</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </nav>
                                </CardFooter>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>
        )
    }

}

export default AllOrders;
