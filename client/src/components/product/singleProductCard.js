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
import axios from "axios";

class singleProductCard extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: []
        };

    }

    render() {
        return (
            <>
                {
                    this.products.map((value, index) => {
                       return(
                           <Card style={{ width: "18rem" }}>
                               <CardImg
                                   alt="..."
                                   src="http://localhost:5000/uploads/productImg-1589998617467.jpg"
                                   top
                               />
                               <CardBody>
                                   <CardTitle className="text-center font-weight-bold">{value.productName}</CardTitle>
                                   <CardText className="text-center">LKR {value.productPrice}</CardText>
                                   <CardText className="text-center"><label className="font-weight-bold">Colors :</label>{value.productColor}</CardText>
                                   <Button

                                       color="primary"
                                       href="#pablo"
                                       onClick={e => e.preventDefault()}
                                   >
                                       <i className="fas fa-cart-plus"></i>
                                       <span className="sr-only font-weight-bold">ADD TO CART</span>
                                   </Button>

                                   <Button

                                       color="danger"
                                       href="#pablo"
                                       onClick={e => e.preventDefault()}
                                   >
                                       <i className="fas fa-heart"></i>
                                       <span className="sr-only font-weight-bold">ADD TO WISH LIST</span>
                                   </Button>
                               </CardBody>
                           </Card>

                       )

                    })


                }
            </>
        );
    }

}

export default singleProductCard;
