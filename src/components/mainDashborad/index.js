import React from "react";

import { submitLogout } from "../../actions/authenticateAction";
import defaultAvt from "../../assests/img/user-default.png";
import {
  MainAdminContainer,
  MainAdminHeader,
  MainAdminHeaderRight,
  MainAdminHeaderUser,
  MainAdminHeaderSearch,
  LogoutButton,
} from "./style";
import {
  AiOutlineSearch,
} from "react-icons/ai";
import { connect } from "react-redux";
function MainAdmin({ authenticateReducer, logout ,mainContant}) {
  return (
    <MainAdminContainer>
      <MainAdminHeader>
        <h3>Tickets</h3>
        <MainAdminHeaderRight>
          <MainAdminHeaderUser>
            <p>{authenticateReducer.account.username}</p>
            <img
              src={authenticateReducer.account.avatar_source || defaultAvt}
              alt="admin avatar"
            />
            <LogoutButton onClick={() => logout()}>Logout</LogoutButton>
          </MainAdminHeaderUser>
        </MainAdminHeaderRight>
      </MainAdminHeader>
      {mainContant}
    </MainAdminContainer>
  );
}

const mapStateToProps = (state) => {
  return { authenticateReducer: state.authenticateReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(submitLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainAdmin);
