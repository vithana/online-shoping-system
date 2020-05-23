import AdminDashboard from "./pages/admin/AdminDashboard";
import StoreManagerDashboard from "./pages/store_manager/StoreManagerDashboard";
import Dashboard from "./pages/user/Dashboard";
import AllOrders from "./pages/admin/orders/AllOrders";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import UserOrders from "./pages/user/orders/UserOrders";
import userProfile from "./components/UserProfile/userProfile";
import {registerUser} from "./actions/authActions";
import Landing from "./pages/public/landing/Landing";
import AllCategories from "./pages/admin/category/AllCategories";
import AllUsers from "./pages/admin/users/AllUsers";
import AllStoreManagers from "./pages/admin/storeManagers/AllStoreManagers";
import UserCart from "./pages/user/carts/UserCart";

var routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: AdminDashboard,
        layout: "/admin",
        sidebar_link: true
    },

    {
        path: "/orders/all",
        name: "Orders",
        icon: "ni ni-cart text-primary",
        component: AllOrders,
        layout: "/admin",
        sidebar_link: true
    },

    {
        path: "/categories/all",
        name: "Product Categories",
        icon: "fa fa-list text-primary",
        component: AllCategories,
        layout: "/admin",
        sidebar_link: true
    },

    {
        path: "",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: StoreManagerDashboard,
        layout: "/storemanager",
        sidebar_link: true
    },

    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Dashboard,
        layout: "/user",
        sidebar_link: true
    },
    {
        path: "/orders",
        name: "Orders",
        icon: "ni ni-cart text-primary",
        component: UserOrders,
        layout: "/user",
        sidebar_link: true
    },
    {
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: Login,
        layout: "/public",
        sidebar_link: false
    },

    {
        path: "/register",
        name: "Register",
        icon: "ni ni-circle-08 text-pink",
        component: Register,
        layout: "/public",
        sidebar_link: false
    },

    {
        path: "/",
        name: "Landing",
        icon: "ni ni-key-25 text-info",
        component: Landing,
        layout: "/",
        sidebar_link: false
    },

    {
        path: "/userProfile",
        name: "User Profile",
        icon: "ni ni-tv-2 text-primary",
        component: userProfile,
        layout: "/admin",
        sidebar_link: false
    },

    {
        path: "/userProfile",
        name: "User Profile",
        icon: "ni ni-tv-2 text-primary",
        component: userProfile,
        layout: "/storemanager",
        sidebar_link: false
    },

    {
        path: "/userProfile",
        name: "User Profile",
        icon: "ni ni-tv-2 text-primary",
        component: userProfile,
        layout: "/user",
        sidebar_link: false
    },

    {
        path: "/public/user/cart",
        name: "User Profile",
        icon: "ni ni-tv-2 text-primary",
        component: UserCart,
        layout: "/",
        sidebar_link: false
    },

    {
        path: "/users/all",
        name: "Users",
        icon: "fas fa-users text-primary",
        component: AllUsers,
        layout: "/admin",
        sidebar_link: true
    },

    {
        path: "/storeManagers/all",
        name: "StoreManagers",
        icon: "fas fa-chalkboard-teacher text-primary",
        component: AllStoreManagers,
        layout: "/admin",
        sidebar_link: true
    },


];
export default routes;
