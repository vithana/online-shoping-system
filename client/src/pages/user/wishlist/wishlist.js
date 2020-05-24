import React, {Component} from 'react';

import PropTypes from 'prop-types';
import axios from 'axios';
import _findIndex from "lodash.findindex";
import {connect} from 'react-redux';
import {logoutUser} from "../../../actions/authActions";
import LandingNavbar from "../../../components/Navbar/LandingNavbar";
import Footer from "../../../components/Footer/Footer";
import Row from "reactstrap/es/Row";
import Button from "reactstrap/es/Button";
import Card from "reactstrap/es/Card";
import CardTitle from "reactstrap/es/CardTitle";
import CardText from "reactstrap/es/CardText";
import {Link} from "react-router-dom";
import index from "../../../reducers";

class WishList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: '',
            isLoaded: false,
            wishlistItems: [],
            wishlistItemShow: []
        }
    }

    componentDidMount() {
        if(Object.keys(this.props.wishlist.wishlist).length !=0 && this.props.wishlist.wishlist.constructor ===Object){
            this.getWishlistItems(this.props.wishlist.wishlist.products);

            this.setState({
                wishlistItemShow:this.props.wishlist.wishlist.products
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.wishlist != this.props.wishlist){
            this.getWishlistItems(this.props.wishlist.wishlist.products);

            this.setState({
                wishlistItemShow:this.props.wishlist.wishlist.products
            });
        }
    }

    getWishlistItems = (products) =>{
        console.log(products);
        this.setState({
            wishlistItems:[]
        });

        products.map((value, index) =>{
            axios
                .get("/api/products/oneProduct/" + value.product_id)
                .then(res => {
                    this.state.wishlistItems.map((value1, index1) => {
                        if (res.data._id == value1._id){
                            res.data = {};
                        }
                    });

                    this.setState({
                        wishlistItems: [
                            ...this.state.wishlistItems,
                            res.data
                        ]
                    }, ()=> {
                        console.log(this.state.wishlistItems);
                    });
                })
                .catch(err =>{
                    this.setState({
                        isLoaded: true,
                        err
                    });
                });
        })
    };




    render() {
        return (
            <>
                <LandingNavbar
                    {...this.props}
                    navBarColor = "#fff"
                    navBarFontColor= "text-dark"
                />

                <div className="container-fluid mt-5 pt-5" style={{backgroundColor:"#f0f0f0", minHeight:"80vh"}}>
                    <div className="row justify-content-center mt-4">
                        <div className="col-md-8">
                            <div className="card p-3">
                                <table>
                                    <thead>
                                    <tr>
                                        <th rowSpan="1">&nbsp;</th>
                                        <th className="text-uppercase" rowSpan="1">Product Title</th>
                                        <th className="text-uppercase" rowSpan="1">Product Description</th>
                                        <th className="text-uppercase" rowSpan="1">Price</th>
                                        <th className="text-uppercase" rowSpan="1">Total</th>
                                        <th rowSpan="1">&nbsp;</th>
                                    </tr>

                                    </thead>
                                    <tbody>
                                    {
                                        (Object.keys(this.props.wishlist.wishlist) != 0 && this.props.wishlist.wishlist.constructor === Object) ?
                                            (this.state.wishlistItems.map((value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <img src='http://localhost:5000/uploads/productImg-1589998617467.jpg' style={{ display: 'inline-block', margin: '2px 0 2px 2px',width:60 }} />
                                                        </td>

                                                        <td>
                                                            {value.productName}
                                                        </td>

                                                        <td>
                                                            {value.productPrice}
                                                        </td>

                                                        <td>
                                                            {
                                                                this.state.wishlistItemShow.map((value1, index1) => {
                                                                    if (value1.product_id == value._id){
                                                                        return (
                                                                            <div className="col-md-4" key={index1}>
                                                                                {/*<input size="4" onChange={(e) => this.onQtyChange(e, value1)} className="form-control" name="qty" type="number" value={value1.qty} max={value.productStockQuantity}/>*/}
                                                                            </div>
                                                                        )
                                                                    }
                                                                })
                                                            }
                                                        </td>

                                                        <td>
                                                            {
                                                                this.state.wishlistItemShow.map((value2, index2) => {
                                                                    if (value2.product_id == value._id){
                                                                        return (
                                                                            value2.total
                                                                        )
                                                                    }
                                                                })
                                                            }
                                                        </td>
                                                        <td>
                                                            <a className="btn" title="Remove Item from cart"    >
                                                                <i className="fa fa-trash text-danger" />
                                                            </a>

                                                        </td>
                                                    </tr>
                                                )
                                            })

                                        ) : (
                                            <tr colSpan="6">
                                                <td  colSpan="6" className="text-center mt-4">
                                                    <label>You have no items in your cart</label>
                                                </td>
                                            </tr>

                                        )

                                    }
                                    </tbody>
                                    <tfoot>
                                    {/*<tr>*/}
                                    {/*    <td colSpan="50">*/}
                                    {/*        <hr/>*/}
                                    {/*        <Row className="justify-content-between mx-2">*/}
                                    {/*            <Button className="btn btn-outline-dark" onClick={() => this.RemoveAllCartItems()}>*/}
                                    {/*                Clear Cart*/}
                                    {/*            </Button>*/}
                                    {/*            <Button className="btn btn-outline-dark" onClick={() => this.updateCart()}>*/}
                                    {/*                Update Cart*/}
                                    {/*            </Button>*/}
                                    {/*        </Row>*/}
                                    {/*    </td>*/}
                                    {/*</tr>*/}
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>



                <Footer />
            </>

        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    cart: state.cart,
    wishlist: state.wishlist
});

// export default WishList;

export default connect(mapStateToProps,
    {logoutUser})(WishList);

