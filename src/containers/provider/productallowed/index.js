import React, { useEffect } from "react";

import { submitLogout } from "../../../actions/authenticateAction";
import * as Main from "../style";
import {
  AiOutlineSortAscending,
  AiFillFilter,
} from "react-icons/ai";
import ProductAllowed from "./productallowed";
import { connect } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  quantity: yup.string().required(),
  descriptionProducts: yup.string().required()
})


function ProviderProductAllowed({ authenticateReducer, logout,token ,menu,page}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const [description,setDecription] = useState('')
  const [quantity,setQuantity] = useState('')
  const [showUpdate,setShowUpdate] = useState(false)
  const [productUpdate,setProductUpdate] = useState({id:0,name:""})
  const [listPage,setListPage] = useState([])
  const [pagePra,setPagePra] = useState(0)
  console.log(page);
  const handle = (item) =>{
      console.log(item)
      setShowUpdate(!showUpdate)
      setProductUpdate({...productUpdate,id:item.id,name:item.name});
  }
  useEffect(()=>{
    let a = [];
    for(let i = 0;i<page;i++){
      a.push(i)
    }
    setListPage(a)
  },[page])
  console.log(listPage);
  const onSubmit = async (data) => {
    console.log(data)
    try{
      await axios.put(`${process.env.REACT_APP_API}/provider/update_product`,{
        product_description:data.descriptionProducts,
        quantity:data.quantity,
        id:productUpdate.id
      },{
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        validateStatus: function (status) {
          return status < 500;
        },
      });
    }catch(e){
      console.log(e)
    }
    window.location.reload();
  }
  const changePage = (index) =>{
    setPagePra(index)
  }
  const changePagePrev = () =>{
    if(pagePra !== 0){
     setPagePra(pagePra - 1)
    }
  }
  const changePageNext = () =>{
    if(pagePra < page - 1){
      setPagePra(pagePra + 1)
    }
  }
  return ( 
    <Main.MainAdminContainer>
      <Main.MainAdminContent>
        <Main.MainAdminAllUser>
          <h3>ALL PRODUCTS</h3>
          <Main.MainAdminFlex>
            <Main.MainAdmintextfunction>
              <AiOutlineSortAscending /> <span>sort</span>
            </Main.MainAdmintextfunction>
            <Main.MainAdmintextfunction>
              <AiFillFilter /> <span>filter</span>
            </Main.MainAdmintextfunction>
          </Main.MainAdminFlex>
        </Main.MainAdminAllUser>
           <Main.ContainerTable>
              <ProductAllowed handle={handle} pageParent={pagePra}/>
           </Main.ContainerTable>
        <Main.MainAdminPage>
        <Main.Pagination>
        <button onClick={changePagePrev}>&laquo;</button>
          {
            listPage.map((index)=><button onClick={()=>changePage(index)} key={index}>{index + 1}</button>)
          }
          <button onClick={changePageNext}>&raquo;</button>
        </Main.Pagination>
        </Main.MainAdminPage>
      </Main.MainAdminContent>
      <Main.ContainerUpdateForm showUpdate={showUpdate && "flex"} onClick={()=>setShowUpdate(!showUpdate)}>
      </Main.ContainerUpdateForm>
      <Main.UpdateForm showUpdate={showUpdate && "block"}>
          <h3>cập nhập sản phẩm {productUpdate.name}</h3>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Main.InputControls>
              <label>mô tả sản phẩm mới :</label>
              <input {...register('descriptionProducts')} type="text" value={description} onChange={e => setDecription(e.target.value)} />
              {
                errors.descriptionProducts && (
                  <div>
                    {errors.descriptionProducts.message}
                  </div>
                )
              }
            </Main.InputControls>
            <Main.InputControls>
              <label>số lượng sản phẩm mới :</label>
              <input {...register('quantity')} type="text" value={quantity} onChange={e => setQuantity(e.target.value)} />
              {
                errors.quantity && (
                  <div>
                    {errors.quantity.message}
                  </div>
                )
              }
            </Main.InputControls>
            <Main.BtnCreate type="submit">update</Main.BtnCreate>
         </form>
      </Main.UpdateForm>
    </Main.MainAdminContainer>
  );
}
const mapStateToProps = (state) => {
  return { 
    authenticateReducer: state.authenticateReducer,
    token:state.authenticateReducer.token,
    page:state.providerReducer.totalPage
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(submitLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProviderProductAllowed);