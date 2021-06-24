import React from "react";
import {
  MainAdminContainer,
  MainAdminHeader,
  MainAdminHeaderRight,
  MainAdminHeaderUser,
  MainAdminHeaderSearch,
} from "./style";
import {
  AiOutlineSearch
} from "react-icons/ai";
import UserAmin from "./components/User";
import ProviderAdmin from "./components/Provider";
import ApproveProvider from "./components/approveproviders";
function MainAdmin(props) {
    const {menu} = props
    const handleShowTable = (menu) =>{
        if(menu === "Users")
            return <UserAmin/>
        if(menu === "Providers")
            return <ProviderAdmin/>
        if(menu === "ApproveProviders")
          return <ApproveProvider/>
        return <h3>ko co ui </h3>
    }
  return (
    <MainAdminContainer>
      <MainAdminHeader>
        <h3>Tickets</h3>
        <MainAdminHeaderRight>
          <MainAdminHeaderSearch>
            <p>
              <AiOutlineSearch />
            </p>
          </MainAdminHeaderSearch>
          <MainAdminHeaderUser>
            <p>admin name</p>
            <img
              src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
              alt="dfkjghdfg"
            />
          </MainAdminHeaderUser>
        </MainAdminHeaderRight>
      </MainAdminHeader>
        {
           handleShowTable(menu)
        }
    </MainAdminContainer>
  );
}

export default MainAdmin;
