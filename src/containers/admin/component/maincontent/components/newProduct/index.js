import React, { useEffect, useState } from 'react'
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
  let pagination = []
  const [page, setpage] = useState(0)
  const [pagina, setpagina] = useState([])
  const [searchValue, setSearchValue] = useState("")
  
  async function getData(page) {
    await action.getAllProductPending("Pending",token , page);
    setpage(page)
  }
  useEffect(() => {
    getData(0)
  }, [])

  useEffect(() => {
    for(var i=0 ; i < pagesProduct ; i++){
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
              </form>
              <button><AiOutlineSearch/></button>
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
                <ButtonBan  onClick={() => handleStatusProduct( product.id , "Rejected")}>Reject</ButtonBan>
              </td>
            </tr>
          ))) : (
            <h3>No Product</h3>
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

const mapDispatchToProps =  {
  getAllProductPending : all.getAllProduct,
  sort : all.sortProduct,
  search : all.searchProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
