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
  MainAdminTable,
  MainAdminStrong,
  MainAdminFlex,
} from "./style";
import {
  AiOutlineSearch,
  AiOutlineSortDescending,
  AiFillFilter,
} from "react-icons/ai";

function MainAdmin() {
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
      <MainAdminContent>
        <MainAdminAllUser>
          <h3>ALL USERS</h3>
          <MainAdminFlex>
            <MainAdmintextfunction>
              <AiOutlineSortDescending /> <span>sort</span>
            </MainAdmintextfunction>
            <MainAdmintextfunction>
              <AiFillFilter /> <span>filter</span>
            </MainAdmintextfunction>
          </MainAdminFlex>
        </MainAdminAllUser>
        <MainAdminTable>
          <thead>
            <tr>
              <th>User name</th>
              <th>Address</th>
              <th>Birthday</th>
              <th>Email</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MainAdminFlex>
                  <img
                    height="30"
                    width="30"
                    src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
                    alt="dfkjghdfg"
                  />
                  <MainAdminStrong>huynh huu hieu</MainAdminStrong>
                </MainAdminFlex>
              </td>
              <td>
                <MainAdminStrong>ngo quyen da nang</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>03-06-2020</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>hieu@gmail.com</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>0987654321</MainAdminStrong>
              </td>
            </tr>
          </tbody>
        </MainAdminTable>
        
      </MainAdminContent>
    </MainAdminContainer>
  );
}

export default MainAdmin;
