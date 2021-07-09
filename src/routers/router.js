import Login from "../containers/login";
import ProviderRegister from "../containers/provider-register/";
import UserRegister from "../containers/user-register/";
import Profile from "../containers/profile";
import ChangePass from '../containers/change_password'
import ProductDetail from "../containers/product-detail";
import Orderhistory from "../containers/orderhistory";
import OrderDetail from "../containers/order_detail";
import Cart from "../containers/cart";
import LoginLayout from "../components/layout/LoginLayout";
import Layout from "../components/layout/Layout";
import Home from "../containers/home";
import ProviderProductAllowed from "../containers/provider/productallowed";
import Createproduct from "../containers/provider/productcreate"
import Page404 from "../containers/page404";
import LayoutDashborad from "../components/layout/layoutDashborad";

//component of admin
import Approveproviders from "../containers/admin/component/maincontent/components/approveproviders";
import NewProduct from "../containers/admin/component/maincontent/components/newProduct";
import Product from "../containers/admin/component/maincontent/components/product";
import ProductBan from "../containers/admin/component/maincontent/components/productBan";
import ProviderAdmin from "../containers/admin/component/maincontent/components/Provider";
import User from "../containers/admin/component/maincontent/components/User";

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
    component: Approveproviders,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "admin",
  },
  {
    path: "/admin/providers",
    component: ProviderAdmin,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "admin",
  },
  {
    path: "/admin/users",
    component: User,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "admin",
  },
  {
    path: "/admin/products",
    component: Product,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "admin",
  },
  {
    path: "/admin/new-products",
    component: NewProduct,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "admin",
  },
  {
    path: "/admin/products-rejected",
    component: ProductBan,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "admin",
  },
  {
    path: "/provider",
    component: ProviderProductAllowed,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "provider",
  },
  {
    path: "/provider/products-request",
    component: ProviderProductAllowed,
    exact: true,
    isAuthorize: "authorize",
    layout: LayoutDashborad,
    role: "provider",
  },
  {
    path: "/provider/products-create",
    component: Createproduct,
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
    path: "/changePass",
    component: ChangePass,
    exact: true,
    layout: Layout,
    isAuthorize: "authorize",
    role: "user",
  },
  {
    path: "/orderhistory",
    component: Orderhistory,
    exact: true,
    layout: Layout,
    isAuthorize: "authorize",
    role: "user",
  },
  {
    path: "/orderdetail",
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
