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
    ButtonApprove,
    ButtonBan,
    ContainerTable,
    ContainerSearch
  } from "../../style";
import {
  AiOutlineSortDescending,
  AiOutlineSearch
} from "react-icons/ai";
import * as all from '../../../../../../actions/adminAction'
import { connect } from 'react-redux';
import { apiClientPatch } from '../../../../../../apiServices/axiosAdmin';

function NewProduct({products, pagesProduct, token,...action}) {

  const [page, setPage] = useState(0)
  const [searchValue, setSearchValue] = useState("")
  
  async function getData(page) {
    await action.getAllProductPending("Pending",token , page);
    setPage(page)
  }
  useEffect(() => {
    getData(0)
  }, [])

  function handlePage (status) {
    if(status === "next"){
      getData(page+1)
      setPage(page+1)
    }else{
      getData(page-1)
      setPage(page-1)
    }
  }

  async function handleStatusProduct (id , status) {
    console.log(id, status);
    const message = await apiClientPatch("/admin/product_requests/update_status" , token , id , status);
    console.log(message);
    getData(page)
  }

  function handleSearch(e){
    e.preventDefault();
    action.search("Pending" , token , searchValue)
  }
    return (
        <MainAdminContent>
        <MainAdminAllUser>
          <h3>ALL New Product</h3>
          <MainAdminFlex>
            <ContainerSearch>
              <form onSubmit={handleSearch}>
                  <input type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="Name Product" value={searchValue}/>
                  <button><AiOutlineSearch/></button>
              </form>
            </ContainerSearch>
            <MainAdmintextfunction>
              <AiOutlineSortDescending /> <button onClick={action.sort}>Sort</button>
            </MainAdmintextfunction>
          </MainAdminFlex>
        </MainAdminAllUser>
       <ContainerTable>
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
          {(products.length !== 0)  ? (products.map((product, item) =>(
            <tr key={item}>
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
                <ButtonApprove onClick={() => handleStatusProduct( product.id , "Allowed")}>Allowed</ButtonApprove>
                <ButtonBan  onClick={() => handleStatusProduct( product.id , "Rejected")}>Rejected</ButtonBan>
              </td>
            </tr>
          ))) : (
            <tr><td>
              <h3>No Product</h3>
            </td></tr>
          )}
          </tbody>
        </MainAdminTable>
       </ContainerTable>
        <MainAdminPage>
          <span>Page {page +1} of {pagesProduct}</span>
          <button disabled={page === 0} onClick={() => handlePage("prev")}>Prev</button>
          <button disabled={page === pagesProduct-1} onClick={() => handlePage("next")}>Next</button>
        </MainAdminPage>
      </MainAdminContent>
    )
}
const mapStateToProps = (state) =>{
  return {
      products : state.adminReducer.allProducts,
      token : state.authenticateReducer.token,
      pagesProduct : state.adminReducer.pagesProducts,
      sortValue : state.adminReducer.sort
  }
}

NewProduct.prototype = {
  pagesProduct : PropsTypes.number,
  products : PropsTypes.array,
  token : PropsTypes.string,
  sortValue : PropsTypes.string,
  getAllProductPending : PropsTypes.func,
  sort : PropsTypes.func,
  search : PropsTypes.func
}

const mapDispatchToProps =  {
  getAllProductPending : all.getAllProduct,
  sort : all.sortProduct,
  search : all.searchProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
