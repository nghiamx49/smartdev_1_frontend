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
  AiFillFilter
} from "react-icons/ai";
import * as all from '../../../../../../actions/adminAction'
import { connect } from 'react-redux';
import avatar from   "../../../../../../assests/img/user-default.png"
import { apiClientPatch } from '../../../../../../apiServices/axiosAdmin';

function ApproveProvider({providers, token , pagesProvider, ...action}) {

  let pagination = []
  const [pagina, setpagina] = useState([])

  async function getData(page) {
    await action.getProvider("Pending", token , page);
  }

  useEffect(() => {
    getData(0)
  }, []);

  useEffect(() => {
    for(var i=0 ; i < pagesProvider ; i++){
      pagination.push(i)
      console.log(pagination);
    }
    setpagina(pagination)
  }, [pagesProvider])

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
            <td><h3>No Provider</h3></td>
          )}
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
      pagesProvider : state.adminReducer.pagesProvider,
      providers : state.adminReducer.allProviders,
      token : state.authenticateReducer.token,
  }
}

const mapDispatchToProps =  {
  getProvider : all.getProvider,
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveProvider);
