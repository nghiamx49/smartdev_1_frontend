import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import * as all from '../../../../../../actions/adminAction'
import avatar from   "../../../../../../assests/img/user-default.png"

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


function UserAdmin({users, token,...action}) {
  useEffect(() => {
    async function a() {
      await action.getUser(token);
    }
    a()
  }, [])
  // console.log(users)
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
              <th>Ban</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user)=>(
               <tr key={user.id}>
               <td>
                 <MainAdminFlex>
                   <img
                     height="30"
                     width="30"
                     src={user.avatar_source ? user.avatar_source : avatar }
                     alt="avatar"
                   />
                   <MainAdminStrong>{user.username}</MainAdminStrong>
                 </MainAdminFlex>
               </td>
               <td>
                 <MainAdminStrong>{user.address}</MainAdminStrong>
               </td>
               <td>
                 <MainAdminStrong>03-06-2020</MainAdminStrong>
               </td>
               <td>
                 <MainAdminStrong>{user.email}</MainAdminStrong>
               </td>
               <td>
                 <MainAdminStrong>{user.phone_number}</MainAdminStrong>
               </td>
               <td>
                 <button>Ban User</button>
               </td>
             </tr>
            ))}
          </tbody>
        </MainAdminTable>
        <MainAdminPage>
            <div>Rows per page:8 <span><AiFillCaretDown/></span></div>
            <div>1-8 of 1240 <span><GrPrevious/><GrNext/></span></div>
        </MainAdminPage>
      </MainAdminContent>
    )
}

const mapStateToProps = (state) =>{
  return {
      users : state.adminReducer.allUsers,
      token : state.authenticateReducer.token,
  }
}

const mapDispatchToProps =  {
  getUser : all.getUserAlowed,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAdmin);
