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
import * as all from '../../../../../../actions/adminAction'
import { connect } from 'react-redux';

function NewProduct({products, token,...action}) {
  useEffect(() => {
    async function a() {
      await action.getAllProductPending(token);
    }
    a()
  }, [])
  console.log(products)
    return (
        <MainAdminContent>
        <MainAdminAllUser>
          <h3>ALL New Product</h3>
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
              <th>Name</th>
              <th>ShopName</th>
              <th>Price</th>
              <th>Date Create</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {products.map((product) =>(
            <tr>
              <td>
                <MainAdminFlex>
                  <img
                    height="30"
                    width="30"
                    src={product.image_source}
                    alt="dfkjghdfg"
                  />
                  <MainAdminStrong>{product.name}</MainAdminStrong>
                </MainAdminFlex>
              </td>
              <td>
                <MainAdminStrong>{product.provider_name}</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>{product.unit_price}</MainAdminStrong>
              </td>
              <td>
                <MainAdminStrong>03-04-2021</MainAdminStrong>
              </td>
              <td>
                <button>Allowed</button>
                <button>Reject</button>
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
      products : state.adminReducer.allProducts,
      token : state.authenticateReducer.token,
  }
}

const mapDispatchToProps =  {
  getAllProductPending : all.getAllProductPending,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
