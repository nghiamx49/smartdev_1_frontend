import React, { useState } from 'react'
import axios from "axios";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { connect } from 'react-redux';
import { storage } from '../../../firebase/config';
import {InputControls,TitleProducts,BtnCreate} from "./style"




const schema = yup.object().shape({
    name: yup.string().required(),
    quantity: yup.string().required(),
    category_id: yup.string().required(),
    unit_price: yup.string().required(),
    product_description: yup.string().required(),
    images: yup.string().required()
  })

  
function Createproduct({token}) {
   const [description,setDecription] = useState('')
  const [quantity,setQuantity] = useState('')
  const [name,setName] = useState('')
  const [category_id,setCategory_id] = useState('')
  const [price,setPrice] = useState('')
  const [imgUrl,setImgUrl] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
    const onSubmit = async (data) => {
      console.log(data)
      console.log("create products")
        try{
         let result =  await axios.post(`${process.env.REACT_APP_API}/provider/create_product`,
          {
            name: data.name,
            quantity:data.quantity,
            category_id:data.category_id,
            unit_price:data.unit_price,
            product_description:data.product_description,
            images:[
               data.images
            ]
          }
        ,{
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            validateStatus: function (status) {
              return status < 500;
            },
          });
          setName('')
          setQuantity('')
          setCategory_id('')
          setPrice('')
          setDecription('')
          console.log(result);
          return result
        }catch(e){
          console.log(e)
        }
      }



      const handleChange = e => {
        console.log("abc")
        if(e.target.files[0]){
            // setImage(e.target.files[0]);
            // handleUpload()
            const uploadTask = storage.ref(`images/${e.target.files[0].name}`).put(e.target.files[0]);
                uploadTask.on(
                    "state_changed",
                    snapshot => {},
                    error => {
                        console.log(error);
                    },
                    () => {
                        storage
                            .ref("images")
                            .child(e.target.files[0].name)
                            .getDownloadURL()
                            .then(url =>{
                              setImgUrl(url)
                            });
                    }
                )
        }
        console.log("test file")
        console.log(imgUrl)
    }








    return (
        <div>
          <TitleProducts>Tạo một sản phẩm mới</TitleProducts>
             <div style={{margin:"30px"}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputControls>
                      <label>name products:</label>
                      <input {...register('name')} type="text" value={name} onChange={e => setName(e.target.value)} />
                    </InputControls>
                    <InputControls >
                      <label>quantity products</label>
                      <input {...register('quantity')} type="text" value={quantity} onChange={e => setQuantity(e.target.value)} />
                    </InputControls>
                    <InputControls >
                      <label>category products</label>
                      <input {...register('category_id')} type="text" value={category_id} onChange={e => setCategory_id(e.target.value)} />
                    </InputControls>
                    <InputControls>
                      <label>unit_price products</label>
                      <input {...register('unit_price')} type="text" value={price} onChange={e => setPrice(e.target.value)} />
                    </InputControls>
                    <InputControls>
                      <label>description products</label>
                      <input {...register('product_description')} type="text" value={description} onChange={e => setDecription(e.target.value)} />
                    </InputControls>
                    <input  {...register('images')}  value={imgUrl}/>
                    <input type="file" onChange={handleChange}/>
                    <BtnCreate type="submit">create products</BtnCreate>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
  return { 
    token:state.authenticateReducer.token
   };
};
export default connect(mapStateToProps)(Createproduct);
