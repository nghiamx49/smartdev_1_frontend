import React, { useEffect } from 'react'
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
import { connect } from 'react-redux';
import * as all from '../../../../../../actions/adminAction'


function ProviderAdmin({providers, token,...action}) {
  useEffect(() => {
    async function a() {
      await action.getUser(token);
    }
    a()
  }, [])
  console.log(providers)
    return (
        <MainAdminContent>
        <MainAdminAllUser>
          <h3>ALL Provider</h3>
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
            {providers.map((provider) =>(
            <tr>
              <td>
                <MainAdminFlex>
                  <img
                    height="30"
                    width="30"
                    src={provider.avatar_source}
                    alt="dfkjghdfg"
                  />
                  <MainAdminStrong>{provider.username}</MainAdminStrong>
                </MainAdminFlex>
              </td>
              <td>
                <MainAdminStrong>{provider.address}</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>03-06-2020</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>{provider.email}</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>{provider.phone_number}</MainAdminStrong>
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
      providers : state.adminReducer.allProviders,
      token : state.authenticateReducer.token,
  }
}

const mapDispatchToProps =  {
  getUser : all.getProviderAllowed,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderAdmin);

