import React , {Component} from "react";

import PropTypes from "prop-types";


// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText, PaginationLink
} from "reactstrap";
import {Menu} from "primereact/menu";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import { updateCart } from "../../actions/cartActions";
import {Growl} from "primereact/growl";


class singleProductCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: [],
            cartProducts: []

        };
        this.state.products = props.products
        console.log(props.products)

    }

    componentDidMount() {
        if ((Object.keys(this.props.cart.cart).length != 0 && this.props.cart.cart.constructor === Object)){

            this.setState({
                cartProducts:this.props.cart.cart.products
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.cart !== this.props.cart){
            this.setState({
                cartProducts:this.props.cart.cart.products
            });
        }
    }

    addToCart = (product) =>{

        let result = this.state.cartProducts.map(({ product_id }) => product_id)

        if (result.includes(product._id)){
            this.growl.show({severity: 'error', summary: 'Oops', detail: 'This item already exists in cart'});
        }
        else{
            let total = (product.productPrice - (product.productDiscount/100) * product.productPrice) * 1;

            const newProduct = {
                product_id: product._id,
                qty: 1,
                price: product.productPrice,
                discount: product.productDiscount,
                total: total
            };

            this.setState({
                cartProducts: [
                    ...this.state.cartProducts,
                    newProduct
                ]
            }, () => {
                const updatedCart = {
                    user_id: this.props.cart.cart.user_id,
                    products: this.state.cartProducts
                };

                this.props.updateCart(this.props.cart.cart._id, updatedCart);

                this.growl.show({severity: 'success', summary: 'Success Message', detail: 'Item added to cart.'});
            });
        }
    };

    render() {
        return (
            <>
                           <Growl ref={(el) => this.growl = el} baseZIndex={9999} />
                           <Card style={{ width: "18rem" }}>
                               <CardImg
                                   alt="..."
                                   src={"http://localhost:5000/uploads/" + this.state.products.productImage}
                                   top
                               />
                               <CardBody>
                                   <CardTitle className="text-center font-weight-bold">{this.state.products.productName}</CardTitle>
                                   <CardText className="text-center">LKR {this.state.products.productPrice}</CardText>
                                   <CardText className="text-center"><label className="font-weight-bold">Colors :</label>{this.state.products.productColor}</CardText>
                                   <Button className="text-center ml-5"

                                       color="primary"
                                       href=""
                                           onClick={() => this.addToCart(this.state.products)}
                                   >
                                       <i className="fas fa-cart-plus"></i>
                                       ADD TO CART
                                   </Button>

                                   <Button className = "text-center mt-3 ml-4"

                                       color="danger"
                                       href=""
                                       onClick={e => e.preventDefault()}
                                   >
                                       <i className="fas fa-heart ml-2"></i>
                                       ADD TO WISH LIST
                                   </Button>
                               </CardBody>
                           </Card>





            </>
        );
    }

}

singleProductCard.propTypes = {
    logoutUser: PropTypes.func,
    updateCart: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    cart: state.cart
});

export default connect(
    mapStateToProps,
    { logoutUser, updateCart })
(singleProductCard);
