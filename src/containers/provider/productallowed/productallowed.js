import React, { useEffect } from "react";
import { connect } from "react-redux";
import { listRequest, listRequestProductPending } from "../../../actions/providerAction";
import { MainAdminTable, MainAdminStrong } from "../style";


function ProductAllowed({list,getList,token,handle,getListPending}) {

  useEffect(()=>{
    window.location.pathname === '/provider' && getList(token)
    window.location.pathname === '/provider/products-request' && getListPending(token)
  },[token,getList,getListPending])
  return (
    <MainAdminTable>
      <thead>
        <tr>
          <th>Products Name</th>
          <th>provider name</th>
          <th>price product</th>
          <th>number of sold</th>
          <th>product quantity</th>
          <th>product images</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td>
              <MainAdminStrong>{item.name}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.provider_name}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.unit_price}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.number_of_sold}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>{item.product_quantity}</MainAdminStrong>
            </td>
            <td>
              <MainAdminStrong>
                <img
                  height="60px"
                  width="60px"
                  src={item.image_source}
                  alt="dkjfhgkdjfg"
                />
              </MainAdminStrong>
            </td>
            <td>
              <button onClick={()=>handle(item)}>cap nhat</button>
            </td>
          </tr>
        ))}
      </tbody>
    </MainAdminTable>
  );
}


const mapStateToProps = (state) => {
  return {
      list: state.providerReducer.listProducts,
      token:state.authenticateReducer.token
  }
}

const mapDispatchToProps = (dispatch) =>
    ({
      getList: (token) => dispatch(listRequest(token)),
      getListPending: (token) => dispatch(listRequestProductPending(token))
    })
export default connect(mapStateToProps,mapDispatchToProps)(ProductAllowed);
