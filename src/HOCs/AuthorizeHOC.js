import { connect } from "react-redux";
import { Route, Redirect } from "react-router";
import ErrorPage from "../containers/page404/";

const AuthorizeRoute = ({ children, role, authenticateReducer, ...rest }) => {
  const { isLoggedIn, account } = authenticateReducer;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedIn) {
          return (
            <Redirect to={{ pathname: "/login", state: props.location }} />
          );
        } else if (role !== account.role) {
          return <ErrorPage />;
        } else {
          return children;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => {
  const { authenticateReducer } = state;
  return { authenticateReducer: authenticateReducer };
};

export default connect(mapStateToProps)(AuthorizeRoute);
