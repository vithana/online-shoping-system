import AdminDashboard from "./pages/admin/AdminDashboard";
import StoreManagerDashboard from "./pages/store_manager/StoreManagerDashboard";
import Dashboard from "./pages/user/Dashboard";

import Login from "./pages/public/Login";
import Register from "./pages/public/Register";

var routes = [
    {
        path: "",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: AdminDashboard,
        layout: "/admin",
        sidebar_link: true
    },

    {
        path: "/storemanager",
        name: "Store Managers",
        icon: "ni ni-tv-2 text-primary",
        component: AdminDashboard,
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

    // {
    //     path: "/product/add",
    //     name: "Add Product",
    //     icon: "ni ni-tv-2 text-primary",
    //     component: AddProduct,
    //     layout: "/storemanager",
    //     sidebar_link: true
    // },

    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Dashboard,
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
    }
];
export default routes;
