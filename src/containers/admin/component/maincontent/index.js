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
import { AiOutlineSortAscending, AiFillFilter,AiOutlineSearch,AiFillCaretDown } from "react-icons/ai";
import {GrPrevious,GrNext} from 'react-icons/gr'
import UserTable from "./components/User";
import ProviderTable from "./components/Provider";
import Approveproviders from "./components/approveproviders";
import Product from "./components/product";
import NewProduct from "./components/newProduct";

import { connect } from "react-redux";
function MainAdmin({ authenticateReducer, logout, menu }) {
  
  function setLayout (com){
    switch(com){
      case "Users":
        return <UserTable/>
      case "Providers":
          return <ProviderTable/>
      case "Approveproviders":
        return <Approveproviders/>
      case "Products":
        return <Product/>
      case "NewProduct":
        return <NewProduct/>
         
      default:
        return <Approveproviders/>
    }
  }
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
      {
        setLayout(menu)
      }
    
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
