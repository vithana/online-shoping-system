import React , {Component} from "react";

import PropTypes from "prop-types";

import axios from "axios";
import {connect} from "react-redux";
//sdsd
import LandingNavbar from "../../../components/Navbar/LandingNavbar";
import Footer from "../../../components/Footer/PublicFooter";
import {logoutUser} from "../../../actions/authActions";

class UserCart extends Component{

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cartProducts: [],
            cartProductsShow:[],
            checkedOutProducts: [],
            tempProducts: []
        };
    }

    componentDidMount() {
        if ((Object.keys(this.props.cart.cart).length != 0 && this.props.cart.cart.constructor === Object)){
            this.getProductsInCart(this.props.cart.cart.products);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.cart !== this.props.cart){
            this.getProductsInCart(this.props.cart.cart.products);
        }
    }

    componentWillUnmount() {
    }

    getProductsInCart = (products) => {
        products.map((value, index) =>{
            axios
                .get("/api/products/oneProduct/" + value.product_id)
                .then(res => {

                        this.setState({
                            cartProducts: [
                                ...this.state.cartProducts,
                                res.data
                            ]
                        });
                })
                .catch(err =>{
                    this.setState({
                        isLoaded: true,
                        err
                    });
                });
        });
    };

    onQtyChange = (event, product) => {

        let total = (product.price - (product.discount/100)) * event.target.value;

        const newCartProduct = {
            product_id: product.product_id,
            qty: event.target.value,
            price: product.price,
            discount: product.discount,
            total: total
        };

        let categories = this.state.cartProducts;

        this.setState({
            tempQty : event.target.value
        });
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
                                            <th className="text-uppercase" rowSpan="1">Product Name</th>
                                            <th className="text-uppercase" rowSpan="1">Unit Price</th>
                                            <th className="text-uppercase" rowSpan="1">Qty</th>
                                            <th className="text-uppercase" rowSpan="1">Total</th>
                                            <th rowSpan="1">&nbsp;</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        (Object.keys(this.props.cart.cart).length != 0 && this.props.cart.cart.constructor === Object) ? (

                                            this.state.cartProducts.map((value, index) => {
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
                                                                this.props.cart.cart.products.map((value1, index1) => {
                                                                    if (value1.product_id == value._id){
                                                                        return (
                                                                            <div className="col-md-4" key={index1}>
                                                                                    <input size="4" onChange={(e) => this.onQtyChange(e, value1)} className="form-control" name="qty" type="number" value={value1.qty} max={value.productStockQuantity}/>
                                                                            </div>
                                                                        )
                                                                    }
                                                                })
                                                            }
                                                        </td>

                                                        <td>
                                                            {
                                                                this.props.cart.cart.products.map((value2, index2) => {
                                                                    if (value2.product_id == value._id){
                                                                        return (
                                                                            value2.total
                                                                        )
                                                                    }
                                                                })
                                                            }
                                                        </td>
                                                        <td>
                                                            <i className="fa fa-trash text-danger" title="Remove Item from cart" />
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
                                </table>
                            </div>
                        </div>
                    </div>


                </div>



                <Footer />
            </>
        )
    }

}

UserCart.propTypes = {
    logoutUser: PropTypes.func,
    auth: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    cart: state.cart
});

export default connect(mapStateToProps,
    { logoutUser }
)(UserCart);
