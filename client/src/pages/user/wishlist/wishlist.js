import React, {Component} from 'react';

import PropTypes from 'prop-types';
import axios from 'axios';
import {connect} from 'react-redux';
import {logoutUser} from "../../../actions/authActions";
import LandingNavbar from "../../../components/Navbar/LandingNavbar";
import Footer from "../../../components/Footer/Footer";

class WishList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: '',
            isLoaded: false,
            wishListItems: [],
            wishListItemsShow: []
        }
    }


    componentDidMount() {

    }


    render() {
        return (
            <>
                <LandingNavbar
                    {...this.props}
                    navBarColor="#fff"
                    navBarFontColor="text-dark"
                />
                <div className='container-fluid mt-6 mb-6'>


                    <div className='row'>

                        <div className='col'>
                            <div className="alert alert-success blogComponent text-capitalize mt-3 mr-auto ml-auto"
                                 style={{width: '60%'}} role="alert">
                                <p className="alert-heading font-weight-bold text-dark">Item Title</p>
                                <div className='row mb-2'>
                                    <div className='col-3'>
                                        <img className='m-auto bg-default' src='' alt='item photo' width='120'
                                             height='120'/>
                                    </div>
                                    <div className='col-9'>
                                        <dl>
                                            <dt className="text-dark">Description</dt>
                                            <dd className="text-dark">Price</dd>
                                        </dl>
                                    </div>
                                </div>

                                <div>
                                    <div className="d-flex justify-content-around">
                                        <button
                                            className="btn btn-primary editBtn"><i
                                            className='fa fa-shopping-cart'> Add to cart</i></button>

                                        <button
                                            className="btn btn-danger deleteBtn"><i className='fas fa-trash'> Remove</i>
                                        </button>
                                    </div>

                                    {/*<div className="d-flex flex-row-reverse">*/}
                                    {/*    <span>Last Updated On :</span>*/}
                                    {/*</div>*/}

                                </div>

                            </div>
                        </div>


                    </div>

                </div>
                <Footer/>
            </>

        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    cart: state.cart
});

// export default WishList;

export default connect(mapStateToProps,
    {logoutUser})(WishList);

