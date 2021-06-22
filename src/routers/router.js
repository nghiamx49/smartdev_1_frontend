import Login from "../components/login"

const routes = [
 
  {
    path: '/login',
    component: Login,
    isAuthRoute: false,
    exact: true,
  }
]

export default routes