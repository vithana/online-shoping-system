import AdminDashboard from "./pages/admin/AdminDashboard";
import StoreManagerDashboard from "./pages/store_manager/StoreManagerDashboard";
import Dashboard from "./pages/user/Dashboard";

import Login from "./pages/public/Login";
import Register from "./pages/public/Register";

var routes = [
    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: AdminDashboard,
        layout: "/admin"
    },

    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: StoreManagerDashboard,
        layout: "/storemanager"
    },

    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Dashboard,
        layout: "/user"
    },

    {
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: Login,
        layout: "/public"
    },

    {
        path: "/register",
        name: "Register",
        icon: "ni ni-circle-08 text-pink",
        component: Register,
        layout: "/public"
    }
];
export default routes;
