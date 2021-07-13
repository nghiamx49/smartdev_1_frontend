import Login from "../containers/login";
import ProviderRegister from "../containers/provider-register/";
import UserRegister from "../containers/user-register/";
import Admin from "../containers/admin";
import Profile from "../containers/profile";
import Forgotpassword from '../containers/forgotpassword'
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
import VerifyOTP from '../containers/verify_otp';
import ResetPassword from '../containers/resetpassword';
import LayoutDashborad from "../components/layout/layoutDashborad";
import ProductLanding from "../containers/product-landing";
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
    path: "/forgotpassword",
    component: Forgotpassword,
    exact: true,
    layout: LoginLayout,
    isAuthorize: "unauthorize",
  },
  {
    path: "/verify_otp",
    component: VerifyOTP,
    exact: true,
    layout: LoginLayout,
    isAuthorize: "unauthorize",
  },
  {
    path: "/reset_password/:slug",
    component: ResetPassword,
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
    path: "/product-detail/:idProduct",
    component: ProductDetail,
    exact: true,
    layout: Layout,
    isAuthorize: "all",
  },
  {
    path: "/product-landing",
    component: ProductLanding,
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
