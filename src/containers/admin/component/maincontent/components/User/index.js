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
    MainAdminPage,
    ButtonBan
  } from "../../style";
import {
  AiOutlineSortDescending,
  AiFillFilter
} from "react-icons/ai";
import { apiClientPatchUser } from '../../../../../../apiServices/axiosAdmin';


function UserAdmin({users,pagesUser , token,...action}) {
  let pagination = []
  const [pagina, setpagina] = useState([])

  async function getData(page) {
    await action.getUser("not_ban" ,token , page);
  }
  useEffect(() => {
    getData(0)
  }, [])

  useEffect(() => {
    for(var i=0 ; i<pagesUser ; i++){
      pagination.push(i)
      console.log(pagination);
    }
    setpagina(pagination)
  }, [pagesUser])
  async function handleStatusProvider (id) {
    console.log(id);
    const message = await apiClientPatchUser(`/admin/users/${id}/ban` , token);
    console.log(message);
    getData()
  }
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
              <th>Full Name</th>
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
                 <MainAdminStrong>{user.full_name}</MainAdminStrong>
               </td>
               <td>
                 <MainAdminStrong>{user.email}</MainAdminStrong>
               </td>
               <td>
                 <MainAdminStrong>{user.phone_number}</MainAdminStrong>
               </td>
               <td>
                 <ButtonBan  onClick={() => handleStatusProvider( user.id)}>Ban User</ButtonBan>
               </td>
             </tr>
            ))}
          </tbody>
        </MainAdminTable>
        <MainAdminPage>
          {
            pagina.map((page) =>(
              <button onClick={()=> getData(page)} key={page}>{page+1}</button>
            ))
          }
        </MainAdminPage>
      </MainAdminContent>
    )
}

const mapStateToProps = (state) =>{
  return {
      users : state.adminReducer.allUsers,
      token : state.authenticateReducer.token,
      pagesUser : state.adminReducer.pagesUsers
  }
}

const mapDispatchToProps =  {
  getUser : all.getUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAdmin);
