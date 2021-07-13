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



function Product({products, pagesProduct, token,...action}) {
  let pagination = []
  const [pagina, setpagina] = useState([])
  const [page, setpage] = useState(0)
  const [searchValue, setSearchValue] = useState("")

  async function getData(page) {
    await action.getAllProduct("Allowed",token , page);
    setpage(page)
  }
  useEffect(() => {
   getData(0)
  }, [])

  useEffect(() => {
    for(var i=0 ; i<pagesProduct ; i++){
      pagination.push(i)
      console.log(pagination);
    }
    setpagina(pagination)
  }, [pagesProduct])

  async function handleStatusProduct (id , status) {
    console.log(id, status);
    const message = await apiClientPatch("/admin/product_requests/update_status" , token , id , status);
    console.log(message);
    getData(page)
  }

  function handleSearch(e){
    e.preventDefault();
    action.search("Allowed" , token , searchValue)
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
            {(products.length !== 0)  ? (products.map((product) =>(
              <tr>
                <td>
                  <MainAdminFlex>
                    <img
                      height="30"
                      width="30"
                      src={product.image_source}
                      alt="images"
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
                  <ButtonBan onClick={() => handleStatusProduct( product.id , "Rejected")}>Rejected</ButtonBan>
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
      products : state.adminReducer.allProducts,
      token : state.authenticateReducer.token,
      pagesProduct : state.adminReducer.pagesProducts,
      sortValue : state.adminReducer.sort
  }
}

Product.prototype = {
  products : PropsTypes.array,
  token : PropsTypes.string,
  pagesProduct : PropsTypes.number,
  sortValue : PropsTypes.string,
  getAllProduct : PropsTypes.func,
  search : PropsTypes.func,
  sort : PropsTypes.func
}

const mapDispatchToProps =  {
  getAllProduct : all.getAllProduct,
  search : all.searchProduct,
  sort : all.sortProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
