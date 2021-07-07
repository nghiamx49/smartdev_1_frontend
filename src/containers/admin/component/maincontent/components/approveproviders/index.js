import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    MainAdminContent,
    MainAdminAllUser,
    MainAdmintextfunction,
    MainAdminTable,
    MainAdminStrong,
    MainAdminFlex,
    MainAdminPage,
    ButtonBan,
    ButtonApprove
  } from "../../style";
import {
  AiOutlineSortDescending,
  AiFillFilter,AiFillCaretDown
} from "react-icons/ai";
import {GrNext,GrPrevious} from 'react-icons/gr'
import * as all from '../../../../../../actions/adminAction'
import { connect } from 'react-redux';
import avatar from   "../../../../../../assests/img/user-default.png"
import { apiClientPatch } from '../../../../../../apiServices/axiosAdmin';

function ApproveProvider({providers, token, ...action}) {
  async function getData() {
    await action.getUser(token);
  }
  useEffect(() => {
    getData()
  }, []);

  async function handleStatusProvider (id , status) {
    console.log(id, status);
    const message = await apiClientPatch("/admin/providers/update_status" , token , id , status);
    console.log(message);
    getData()
  }
    return (
        <MainAdminContent>
        <MainAdminAllUser>
          <h3>ALL ApproveProvider</h3>
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
              <th>Shop name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Date Create</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {(providers.length !== 0)  ? (providers.map((provider) =>(
            <tr key={provider.id}>
              <td>
                <MainAdminFlex>
                  <img
                    height="30"
                    width="30"
                    src={provider.avatar_source ? provider.avatar_source : avatar }
                    alt="avatar"
                  />
                  <MainAdminStrong>{provider.username}</MainAdminStrong>
                </MainAdminFlex>
              </td>
              <td>
                <MainAdminStrong>{provider.address}</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>{provider.store_name}</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>{provider.email}</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>{provider.phone_number}</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>03-04-2021</MainAdminStrong>
              </td>
              <td>
                <ButtonApprove onClick={() => handleStatusProvider( provider.id , "Allowed")}>Approve</ButtonApprove>
                <ButtonBan onClick={() => handleStatusProvider( provider.id , "Reject")}>Reject</ButtonBan>
              </td>
            </tr> 
          ))) : (
            <h3>No Provider</h3>
          )}
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
      providers : state.adminReducer.allProviders,
      token : state.authenticateReducer.token,
  }
}

const mapDispatchToProps =  {
  getUser : all.getProviderPending,
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveProvider);
