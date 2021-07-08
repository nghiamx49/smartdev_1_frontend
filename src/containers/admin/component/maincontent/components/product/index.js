import React, { useEffect, useState } from 'react'

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
          <h3>ALL Product</h3> 
          <div>
            <form onSubmit={handleSearch}>
                <input type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="Name Product" value={searchValue}></input>
                <button >Search</button>
            </form>
          </div>
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
            <h3>No Product</h3>
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
      products : state.adminReducer.allProducts,
      token : state.authenticateReducer.token,
      pagesProduct : state.adminReducer.pagesProducts
  }
}

const mapDispatchToProps =  {
  getAllProduct : all.getAllProduct,
  search : all.searchProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
