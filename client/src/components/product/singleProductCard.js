import React , {Component} from "react";
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

class singleProductCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: []

        };
        this.state.products = props.products
        console.log(props.products)

    }

    render() {
        return (
            <>

                           <Card style={{ width: "18rem" }}>
                               <CardImg
                                   alt="..."
                                   src="http://localhost:5000/uploads/productImg-1589998617467.jpg"
                                   top
                               />
                               <CardBody>
                                   <CardTitle className="text-center font-weight-bold">{this.state.products.productName}</CardTitle>
                                   <CardText className="text-center">LKR {this.state.products.productPrice}</CardText>
                                   <CardText className="text-center"><label className="font-weight-bold">Colors :</label>{this.state.products.productColor}</CardText>
                                   <Button className="text-center ml-5"

                                       color="primary"
                                       href="#pablo"
                                       onClick={e => e.preventDefault()}
                                   >
                                       <i className="fas fa-cart-plus"></i>
                                       ADD TO CART
                                   </Button>

                                   <Button className = "text-center mt-3 ml-4"

                                       color="danger"
                                       href="#pablo"
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

export default singleProductCard;
