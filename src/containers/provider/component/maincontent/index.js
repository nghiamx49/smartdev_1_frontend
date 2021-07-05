import React from "react";
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
  MainAdminPage
} from "./style";
import { AiOutlineSortAscending, AiFillFilter,AiOutlineSearch,AiFillCaretDown } from "react-icons/ai";
import {GrPrevious,GrNext} from 'react-icons/gr'
import UserTable from "./components";
function MainAdmin() {
  return (
    <MainAdminContainer>
      <MainAdminHeader>
        <h3>Tickets</h3>
        <MainAdminHeaderRight>
          <MainAdminHeaderSearch>

            <p><AiOutlineSearch/> <span>search</span></p>
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
      <MainAdminContent>
        <MainAdminAllUser>
          <h3>ALL PRODUCTS</h3>
          <MainAdminFlex>
            <MainAdmintextfunction>
              <AiOutlineSortAscending /> <span>sort</span>
            </MainAdmintextfunction>
            <MainAdmintextfunction>
              <AiFillFilter /> <span>filter</span>
            </MainAdmintextfunction>
          </MainAdminFlex>
        </MainAdminAllUser>
        <UserTable/>
        <MainAdminPage>
            <p>
                <span>Rows per page : 8 </span> <AiFillCaretDown/>
            </p>
            <p>
                <span>1-8 of 1240</span><GrPrevious/><GrNext/>
            </p>
        </MainAdminPage>
      </MainAdminContent>
    </MainAdminContainer>
  );
}

export default MainAdmin;
