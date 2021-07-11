import Login from "../containers/login";
import ProviderRegister from "../containers/provider-register/";
import UserRegister from "../containers/user-register/";
import Admin from "../containers/admin";
import Profile from "../containers/profile";
import ChangePass from "../containers/change_password";
import ProductDetail from "../containers/product-detail";
import Orderhistory from "../containers/orderhistory";
import OrderDetail from "../containers/order_detail";
import Cart from "../containers/cart";
import LoginLayout from "../components/layout/LoginLayout";
import Layout from "../components/layout/Layout";
import Home from "../containers/home";
import Provider from "../containers/provider";
import Checkout from "../containers/checkout/";
import Page404 from "../containers/page404";
import LayoutDashborad from "../components/layout/layoutDashborad";
const routes = [
  {
    path: "/login",
    component: Login,
    exact: true,
    layout: LoginLayout,
    isAuthorize: "unauthorize",
  },
  {
    path: "/register/provider",
    component: ProviderRegister,
    exact: true,
    layout: LoginLayout,
    isAuthorize: "unauthorize",
  },
  {
    path: "/register/user",
    component: UserRegister,
    exact: true,
    layout: LoginLayout,
    isAuthorize: "unauthorize",
  },
  {
    path: "/admin",
    component: Admin,
    exact: true,
    isAuthorize: "authorize",
    role: "admin",
  },
  {
    path: "/provider",
    component: Provider,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "provider",
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
    layout: Layout,
    isAuthorize: "authorize",
    role: "user",
  },
  {
    path: "/checkout",
    component: Checkout,
    exact: true,
    layout: Layout,
    isAuthorize: "authorize",
    role: "user",
  },
  {
    path: "/change_pass",
    component: ChangePass,
    exact: true,
    layout: Layout,
    isAuthorize: "authorize",
    role: "user",
  },
  {
    path: "/order_history",
    component: Orderhistory,
    exact: true,
    layout: Layout,
    isAuthorize: "authorize",
    role: "user",
  },
  {
    path: "/order_detail/:id",
    component: OrderDetail,
    exact: true,
    layout: Layout,
    isAuthorize: "authorize",
    role: "user",
  },
  {
    path: "/cart",
    component: Cart,
    exact: true,
    layout: Layout,
    isAuthorize: "authorize",
    role: "user",
  },
  {
    path: "/product-detail",
    component: ProductDetail,
    exact: true,
    layout: Layout,
    isAuthorize: "all",
  },
  {
    path: "/page404",
    component: Page404,
    exact: true,
    layout: Layout,
  },
  {
    path: "",
    component: Home,
    exact: true,
    layout: Layout,
    isAuthorize: "all",
  },
];

export default routes;
