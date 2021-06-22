import Login from "../containers/login"
import Register from "../components/register"
import Admin from "../containers/admin"
import Profile from "../containers/profile"
import Orderhistory from "../containers/orderhistory"
const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    path: '/admin',
    component: Admin,
    exact: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
  },
  {
    path: '/orderhistory',
    component: Orderhistory,
    exact: true,
  },
]

export default routes