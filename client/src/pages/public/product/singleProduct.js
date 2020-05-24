import React , {Component} from "react";
import AllProductsClient from "./AllProductsClient";
import {Route} from "react-router-dom";
// reactstrap components


class singleProduct extends Component {

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

                <div className="container-fluid mt-5 pt-5" style={{backgroundColor:"#f0f0f0", minHeight:"80vh"}}>
                    <div className="row">
                        <div className="col-md">


                        </div>
                    </div>



                </div>


            </>
        );
    }

}

export default singleProduct;
