import React, { useEffect, useState } from 'react'
import PropsTypes from "prop-types";

import {
    MainAdminContent,
    MainAdminAllUser,
    MainAdmintextfunction,
    MainAdminTable,
    MainAdminStrong,
    MainAdminFlex,
    MainAdminPage,
    ButtonBan,
    ButtonApprove,
    ContainerTable
  } from "../../style";
import {
  AiOutlineSortDescending,
} from "react-icons/ai";
import * as all from '../../../../../../actions/adminAction'
import { connect } from 'react-redux';
import avatar from   "../../../../../../assests/img/user-default.png"
import { apiClientPatch } from '../../../../../../apiServices/axiosAdmin';

function ApproveProvider({providers, token , pagesProvider,getProvider,sort}) {

  const [page, setPage] = useState(0)
  function getData(page) {
    getProvider("Pending", token , page);
    setPage(page)
  }
  useEffect(() => {
    function getDataA(page) {
      getProvider("Pending", token , page);
      setPage(page)
   }
    getDataA(0)
  }, [token,getProvider]);
  function handlePage (status) {
    if(status === "next"){
      getData(page+1)
      setPage(page+1)
    }else{
      getData(page-1)
      setPage(page-1)
    }
  }
  async function handleStatusProvider (id , status) {
    await apiClientPatch("/admin/providers/update_status" , token , id , status);
    getData(page)
  }
    return (
        <MainAdminContent>
        <MainAdminAllUser>
          <h3>ALL New Provider</h3>
          <MainAdminFlex>
            <MainAdmintextfunction>
              <AiOutlineSortDescending /> <button onClick={sort}>Sort </button>
            </MainAdmintextfunction>
           
          </MainAdminFlex>
        </MainAdminAllUser>
       <ContainerTable>
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
                <ButtonApprove onClick={() => handleStatusProvider( provider.id , "Allowed")}>Allowed</ButtonApprove>
                <ButtonBan onClick={() => handleStatusProvider( provider.id , "Rejected")}>Rejected</ButtonBan>
              </td>
            </tr> 
          ))) : (
            <tr><td><h3>No Provider</h3></td></tr>
          )}
          </tbody>
        </MainAdminTable>
       </ContainerTable>
        <MainAdminPage>
          <span>Page {page +1} of {pagesProvider}</span>
          <button disabled={page === 0} onClick={() => handlePage("prev")}>Prev</button>
          <button disabled={page === pagesProvider-1} onClick={() => handlePage("next")}>Next</button>
        </MainAdminPage>
      </MainAdminContent>
    )
}
const mapStateToProps = (state) =>{
  return {
      pagesProvider : state.adminReducer.pagesProvider,
      providers : state.adminReducer.allProviders,
      token : state.authenticateReducer.token,
      sortValue : state.adminReducer.sort
  }
}
ApproveProvider.prototype ={
  pagesProvider : PropsTypes.number,
  providers : PropsTypes.array,
  token : PropsTypes.string,
  sortValue : PropsTypes.string,
  getProvider : PropsTypes.func,
  sort : PropsTypes.func
}
const mapDispatchToProps =  {
  getProvider : all.getProvider,
  sort : all.sortProvider,
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveProvider);
