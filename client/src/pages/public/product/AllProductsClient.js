// import React , {Component} from "react";
// import axios from "axios";
// import singleproductCard from "../../../components/product/singleProductCard"
//
// class AllProductsClient extends Component{
//
//     _isMounted = false;
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             products: []
//
//         };
//         console.log(this.props.auth.user.id)
//     }
//
//     componentDidMount() {
//         this._isMounted = true;
//         axios
//             .get("/api/products/allproducts")
//             .then(res => {
//                 if (this._isMounted){
//                     this.setState({
//                         isLoaded: true,
//                         products: res.data
//                     });
//                 }
//                 console.log(res);
//             })
//             .catch(err =>{
//                 this.setState({
//                     isLoaded: true,
//                     err
//                 });
//             });
//     }
//
//     componentWillUnmount() {
//         this._isMounted = false;
//     }
//
//     render() {
//         return (
//             <>
//                 <h1>sdsdsd</h1>
//                 {/*<section>*/}
//                 {/*    <div className="container">*/}
//                 {/*      <div className="row">*/}
//                 {/*          {*/}
//                 {/*              this.state.products.map((value, index) => {*/}
//
//                 {/*                  return(*/}
//
//                 {/*                      <div className="col-md-4">*/}
//
//                 {/*                          <singleproductCard*/}
//                 {/*                              {...this.props}*/}
//                 {/*                              product = {value}*/}
//                 {/*                          />*/}
//
//                 {/*                      </div>*/}
//
//                 {/*                  )*/}
//
//                 {/*              })*/}
//
//                 {/*          }*/}
//
//
//
//                 {/*      </div>*/}
//                 {/*    </div>*/}
//                 {/*</section>*/}
//             </>
//
//         );
//     }
//
//
// }
//
// export default AllProductsClient;

import React , {Component} from "react";

//import Header from "../../components/Header/Header";
class AllProductsClient extends Component{

    render() {
        return (
            <>
               {/*// <Header/>*/}
                <div>Admin Dashboard</div>
            </>
        )
    }

}

export default AllProductsClient;
