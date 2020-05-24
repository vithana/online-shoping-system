import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import { getCartByUser } from "./actions/cartActions";

import AdminLayout from "./layouts/Admin";
import StoreManagerLayout from "./layouts/StoreManager";
import UserLayout from "./layouts/User";
import PublicLayout from "./layouts/Public";

import Landing from "./components/layout/Landing";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import UserCart from "./pages/user/carts/UserCart";


import PrivateRoute from "./components/private-route/PrivateRoute";
import AdminPrivateRoute from "./components/private-route/AdminPrivateRoute";
import StoreManagerPrivateRoute from "./components/private-route/StoreManagerPrivateRoute";

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

import "./App.css";
import WishList from "./pages/user/wishlist/wishlist";


if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  store.dispatch(getCartByUser(decoded.id));
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <AdminPrivateRoute path="/admin" component={AdminLayout} />
            </Switch>
            <Switch>
              <StoreManagerPrivateRoute path="/storemanager" component={StoreManagerLayout} />} />
            </Switch>
            <Switch>
              <PrivateRoute path="/user" component={UserLayout} />
              <PrivateRoute exact path="/public/user/cart" component={UserCart} />
              <PrivateRoute exact path="/wishlist" component={WishList}/>
            </Switch>
              <Route exact path="/" component={PublicLayout} />
              {/*<Route exact path="/" component={Landing} />*/}
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/*<Redirect from="/" to="/admin/index" />*/}
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
