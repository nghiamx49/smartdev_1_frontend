import React from "react";

import { submitLogout } from "../../../../actions/authenticateAction";
import defaultAvt from "../../../../assests/img/user-default.png";
import {
  MainAdminContainer,
  MainAdminHeader,
  MainAdminHeaderRight,
  MainAdminHeaderUser,
  MainAdminHeaderSearch,
  MainAdminContent,
  MainAdminAllUser,
  MainAdmintextfunction,
  MainAdminFlex,
  MainAdminPage,
  LogoutButton,
} from "./style";
import {
  AiOutlineSortAscending,
  AiFillFilter,
  AiOutlineSearch,
  AiFillCaretDown,
} from "react-icons/ai";
import { GrPrevious, GrNext } from "react-icons/gr";
import UserTable from "./components";
import { connect } from "react-redux";
function MainAdmin({ authenticateReducer, logout }) {
  return (
    <MainAdminContainer>
      <MainAdminHeader>
        <h3>Tickets</h3>
        <MainAdminHeaderRight>
          <MainAdminHeaderSearch>
            <p>
              <AiOutlineSearch /> <span>search</span>
            </p>
          </MainAdminHeaderSearch>
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
      <MainAdminContent>
        <MainAdminAllUser>
          <h3>ALL USERS</h3>
          <MainAdminFlex>
            <MainAdmintextfunction>
              <AiOutlineSortAscending /> <span>sort</span>
            </MainAdmintextfunction>
            <MainAdmintextfunction>
              <AiFillFilter /> <span>filter</span>
            </MainAdmintextfunction>
          </MainAdminFlex>
        </MainAdminAllUser>
        <UserTable />
        <MainAdminPage>
          <p>
            <span>Rows per page : 8 </span> <AiFillCaretDown />
          </p>
          <p>
            <span>1-8 of 1240</span>
            <GrPrevious />
            <GrNext />
          </p>
        </MainAdminPage>
      </MainAdminContent>
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
