import React from "react";

import { submitLogout } from "../../../actions/authenticateAction";
import * as Main from "../style";
import {
  AiOutlineSortAscending,
  AiFillFilter,
  AiFillCaretDown,
} from "react-icons/ai";
import { GrPrevious, GrNext } from "react-icons/gr";
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


function ProviderProductAllowed({ authenticateReducer, logout,token ,menu}) {
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
  const [productUpdate,setProductUpdate] = useState({id:0})

  const handle = (item) =>{
      console.log(item)
      setShowUpdate(!showUpdate)
      setProductUpdate({...productUpdate,id:item.id});
  }
   

  const onSubmit = async (data) => {
    console.log(data)
    try{
     let result =  await axios.put(`${process.env.REACT_APP_API}/provider/update_product`,{
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
      console.log(result.data)
     return result
    }catch(e){
      console.log(e)
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
            <ProductAllowed handle={handle}/>
        <Main.MainAdminPage>
          <p>
            <span>Rows per page : 8 </span> <AiFillCaretDown />
          </p>
          <p>
            <span>1-8 of 1240</span>
            <GrPrevious />
            <GrNext />
          </p>
        </Main.MainAdminPage>
      </Main.MainAdminContent>

      <div style={{display:`${showUpdate?'block':'none'}`,margin:"30px"}}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{marginBottom:"10px"}}>
              <label>description products</label>
              <input {...register('descriptionProducts')} type="text" value={description} onChange={e => setDecription(e.target.value)} />
            </div>
            <div>
              <label>quantity products</label>
              <input {...register('quantity')} type="text" value={quantity} onChange={e => setQuantity(e.target.value)} />
            </div>
            <button type="submit">update</button>
         </form>
      </div>
    </Main.MainAdminContainer>
  );
}
const mapStateToProps = (state) => {
  return { 
    authenticateReducer: state.authenticateReducer,
    token:state.authenticateReducer.token
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(submitLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProviderProductAllowed);