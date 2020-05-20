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
    UncontrolledTooltip, Button, Modal
} from "reactstrap";
import axios from "axios";
import {GET_ERRORS} from "../../../actions/types";
import index from "../../../reducers";

class AllOrders extends Component{
    _isMounted = false;

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
        this._isMounted = true;
        axios
            .get("/api/orders/all")
            .then(res => {
                if (this._isMounted){
                    this.setState({
                        isLoaded: true,
                        orders: res.data
                    });
                }
            })
            .catch(err =>{
                this.setState({
                    isLoaded: true,
                    err
                });
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    loadUserName = (user_id) => {
        axios
            .get("/api/users/getUser/"+user_id)
            .then(res => {
                if (this._isMounted){
                    this.setState({
                        isLoaded: true,
                        user_name: res.data.name
                    });
                }
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
                                        <th scope="col">Actions</th>
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
                                                        <td scope="row">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle
                                                                    className="btn-icon-only text-light"
                                                                    href="#"
                                                                    role="button"
                                                                    size="sm"
                                                                    color=""
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    <i className="fas fa-ellipsis-v" />
                                                                </DropdownToggle>

                                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                                    <DropdownItem>
                                                                        <Button
                                                                            color="warning"
                                                                            type="button"
                                                                            onClick={() => this.toggleModal("notificationModal")}
                                                                        >
                                                                            Delete Order
                                                                        </Button>
                                                                    </DropdownItem>
                                                                </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                        </td>
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
                                            <PaginationItem className="disabled">
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
                <Modal
                    className="modal-dialog-centered modal-danger"
                    contentClassName="bg-gradient-danger"
                    isOpen={this.state.notificationModal}
                    toggle={() => this.toggleModal("notificationModal")}
                >
                    <div className="modal-header">
                        <h6 className="modal-title" id="modal-title-notification">
                            Your attention is required
                        </h6>
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("notificationModal")}
                        >
                            <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="py-3 text-center">
                            <i className="ni ni-bell-55 ni-3x" />
                            <h4 className="heading mt-4">Account Deactivation</h4>
                            <p>
                                You are about to deactivate your account.You will lost your all information.
                            </p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button
                            className="btn-white"
                            color="default"
                            type="button"
                            onClick={this.onDeactivateClick}

                        >
                            Ok, Got it
                        </Button>
                        <Button
                            className="text-white ml-auto"
                            color="link"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("notificationModal")}
                        >
                            Close
                        </Button>
                    </div>
                </Modal>
            </>
        )
    }

}

export default AllOrders;
