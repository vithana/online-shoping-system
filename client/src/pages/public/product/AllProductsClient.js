 import React , {Component} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../../actions/authActions";

import Singleproductcard from "../../../components/product/singleProductCard"
 import {Menu} from "primereact/menu";
 import LandingNavbar from "../../../components/Navbar/LandingNavbar";

 import _findIndex from "lodash.findindex";

class AllProductsClient extends Component{

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            category:[],
            products: [],
        };
    }

    componentDidMount() {
        this._isMounted = true;
        axios
            .get("/api/products/allproducts")
            .then(res => {
                if (this._isMounted){
                    this.setState({
                        isLoaded: true,
                        products: res.data
                    })
                    console.log(res.data)
                }

            })
            .catch(err =>{
                this.setState({
                    isLoaded: true,
                    err
                });
            });
        axios
            .get("/api/categories/getall" )
            .then(res => {
                if (this._isMounted){
                    this.setState({
                        isLoaded: true,
                        category: res.data
                    });
                    console.log(res.data)
                }

            })
            .catch(err =>{
                this.setState({
                    isLoaded: true,
                    err
                });
            });

    }

    priductViewByCategoryId = (id) =>{
        this._isMounted = true;
        axios
            .get("/api/products/Category/" + id)
            .then(res => {
                if (this._isMounted){
                    this.setState({
                        isLoaded: true,
                        products: res.data
                    });
                }
                console.log(res.data);
            })
            .catch(err =>{
                this.setState({
                    isLoaded: true,
                    err
                });
            });
    };

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

    const items = [
            {
                label: 'Category',
                items: [
                        {label: 'All', icon: 'pi pi-list'},
                        {label: 'Men', icon: 'pi pi-fw pi-upload'},
                        {label: 'Women', icon: 'pi pi-fw pi-upload'},
                        {label: 'Children', icon: 'pi pi-fw pi-upload'},
                        this.state.category.map((value, index1) => {
                            return (

                                {label: value.title, icon: 'pi pi-fw pi-home'}
                            )

                         })

                ]
            }
    ]
        console.log(items)
        return (
            <>
                <LandingNavbar
                    {...this.props}
                />


                <section>
                    <div className="container-fluid">
                        <div className="float-left ml--2" >
                            <Menu  model = {items} style={{minHeight : "80vh"}} />
                            {console.log(items)}
                        </div>
                        <div className="row">

                          {

                              this.state.products.map((value, index) => {

                                  return(

                                      <div className="col-md-4">
                                          <Singleproductcard
                                              products = {value}
                                          />
                                      </div>
                                  )
                              })
                          }

                      </div>
                    </div>
                </section>
            </>

        );
    }


}

 AllProductsClient.propTypes = {
     logoutUser: PropTypes.func,
     auth: PropTypes.object.isRequired
 };

 const mapStateToProps = state => ({
     auth: state.auth
 });

 export default connect(
     mapStateToProps,
     { logoutUser })
 (AllProductsClient);

