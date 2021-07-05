import Login from "../containers/login";
import Register from "../containers/register";
import Admin from "../containers/admin";
import Profile from "../containers/profile";
import ProductDetail from "../containers/product-detail";
import Orderhistory from "../containers/orderhistory";
import OrderDetail from "../containers/order_detail";
import Cart from "../containers/cart";
import LoginLayout from "../components/layout/LoginLayout";
import Layout from "../components/layout/Layout";
import Home from "../containers/home";
import Provider from "../containers/provider";
const routes = [
  {
    path: "/login",
    component: Login,
    exact: true,
    layout: LoginLayout,
  },
  {
    path: "/register",
    component: Register,
    exact: true,
    layout: LoginLayout,
  },
  {
    path: "/admin",
    component: Admin,
    exact: true,
  },
  {
    path: "/provider",
    component: Provider,
    exact: true,
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
    layout: Layout,
  },
  {
    path: "/orderhistory",
    component: Orderhistory,
    exact: true,
    layout: Layout,
  },
  {
    path: "/orderdetail",
    component: OrderDetail,
    exact: true,
    layout: Layout,
  },
  {
    path: "/cart",
    component: Cart,
    exact: true,
    layout: Layout,
  },
  {
    path: '/product-detail',
    component: ProductDetail,
    exact: true,
    layout: Layout,
  },
  {
    path: "",
    component: Home,
    exact: true,
    layout: Layout,
  },
];

export default routes;
