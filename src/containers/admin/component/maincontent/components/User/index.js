import React from 'react'
import {
    MainAdminContent,
    MainAdminAllUser,
    MainAdmintextfunction,
    MainAdminTable,
    MainAdminStrong,
    MainAdminFlex,
    MainAdminPage
  } from "../../style";
import {
  AiOutlineSortDescending,
  AiFillFilter,AiFillCaretDown
} from "react-icons/ai";
import {GrNext,GrPrevious} from 'react-icons/gr'
function UserAmin() {
    return (
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
        <MainAdminPage>
            <div>Rows per page:8 <span><AiFillCaretDown/></span></div>
            <div>1-8 of 1240 <span><GrPrevious/><GrNext/></span></div>
        </MainAdminPage>
      </MainAdminContent>
    )
}

export default UserAmin
