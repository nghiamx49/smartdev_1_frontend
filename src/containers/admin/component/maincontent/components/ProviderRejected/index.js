import React, { useEffect, useState } from 'react'
import {
    MainAdminContent,
    MainAdminAllUser,
    MainAdmintextfunction,
    MainAdminTable,
    MainAdminStrong,
    MainAdminFlex,
    MainAdminPage,
    ButtonBan,
    ContainerTable
  } from "../../style";
import {
  AiOutlineSortDescending,
} from "react-icons/ai";
import { connect } from 'react-redux';
import * as all from '../../../../../../actions/adminAction'
import { apiClientPatch } from '../../../../../../apiServices/axiosAdmin';
import avatar from   "../../../../../../assests/img/user-default.png"


function ProviderRejected({providers , pagesProvider, token,...action}) {
  let pagination = []
  const [pagina, setpagina] = useState([])
  const [page, setPage] = useState(0)

  async function getData(page) {
    await action.getProvider("Rejected" ,token , page);
    setPage(page)
  }
  useEffect(() => {
    getData(0)
  }, [])
  useEffect(() => {
    for(var i=0 ; i<pagesProvider ; i++){
      pagination.push(i)
    }
    setpagina(pagination)
  }, [pagesProvider,pagination])

  async function handleStatusProvider (id , status) {
    const message = await apiClientPatch("/admin/providers/update_status" , token , id , status);
    getData(page)
  }
    return (
        <MainAdminContent>
        <MainAdminAllUser>
          <h3>ALL Provider Rejected</h3>
          <MainAdminFlex>
            <MainAdmintextfunction>
              <AiOutlineSortDescending />  <button onClick={action.sort}>Sort </button>
            </MainAdmintextfunction>
          </MainAdminFlex>
        </MainAdminAllUser>
        <ContainerTable>
        <MainAdminTable>
          <thead>
            <tr>
              <th>User name</th>
              <th>Address</th>
              <th>Store_name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {(providers.length !== 0)  ? (providers.map((provider) =>(
            <tr>
              <td>
                <MainAdminFlex>
                  <img
                    height="30"
                    width="30"
                    src={provider.avatar_source ? provider.avatar_source :avatar }
                    alt="dfkjghdfg"
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
              <ButtonBan onClick={() => handleStatusProvider( provider.id , "Allowed")}>Allowed</ButtonBan>
              </td>
            </tr>
            ))) : (
              <tr><td>
              <h3>No Provider</h3>
              </td></tr>
            )}
          </tbody>
        </MainAdminTable>
        </ContainerTable>
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
      sortValue : state.adminReducer.sort
  }
}

const mapDispatchToProps =  {
    getProvider : all.getProvider,
    sort : all.sortProvider,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderRejected);

