import React, {  useState } from 'react'
import axios from "axios";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { connect } from 'react-redux';
import {TiTick} from "react-icons/ti"
import { storage } from '../../../firebase/config';
import {InputControls,TitleProducts,BtnCreate,InputFile, ContainerInputFile} from "./style"




const schema = yup.object().shape({
    name: yup.string().required("không được để trống"),
    quantity: yup.string().required("không được để trống"),
    category_id: yup.string().required("không được để trống"),
    unit_price: yup.string().required("không được để trống"),
    product_description: yup.string().required("không được để trống"),
   
  })

  
function Createproduct({token}) {
   const [description,setDecription] = useState('')
  const [quantity,setQuantity] = useState('')
  const [name,setName] = useState('')
  const [category_id,setCategory_id] = useState('')
  const [price,setPrice] = useState('')
  const [imgUrl,setImgUrl] = useState('')
  const [imgUrl1,setImgUrl1] = useState('')
  const [imgUrl2,setImgUrl2] = useState('')
  const [imgUrl3,setImgUrl3] = useState('')
  const [countImg,setCountImg] = useState(0)
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
               imgUrl,imgUrl1,imgUrl2,imgUrl3,
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
          setImgUrl('')
          setImgUrl1('')
          setImgUrl2('')
          setImgUrl3('')
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
                              switch (countImg){
                                case 3:
                                  imgUrl3 === "" && setImgUrl3(url)
                                  break;
                                case 2:
                                    imgUrl2 === "" && setImgUrl2(url)
                                    setCountImg(countImg +1)
                                    break;
                                case 1:
                                    imgUrl1 === "" && setImgUrl1(url)
                                    setCountImg(countImg +1)
                                    break;
                                default:
                                    imgUrl === "" && setImgUrl(url)
                                    setCountImg(countImg +1)
                                    break;
                              }
                            });
                    }
                )
        }
    }
    return (
        <div>
          <TitleProducts>Tạo một sản phẩm mới</TitleProducts>
             <div style={{margin:"30px"}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputControls>
                      <label>tên của sản phẩm :</label>
                      <input {...register('name')} type="text" value={name} onChange={e => setName(e.target.value)} />
                      {
                      errors.name && (
                        <div style={{marginLeft:"180px"}}>
                          {errors.name.message}
                        </div>
                      )
                    }
                    </InputControls>
                    <InputControls >
                      <label>số lượng sản phẩm :</label>
                      <input {...register('quantity')} type="text" value={quantity} onChange={e => setQuantity(e.target.value)} />
                      {
                      errors.quantity && (
                        <div style={{marginLeft:"180px"}}>
                          {errors.quantity.message}
                        </div>
                      )
                    }
                    </InputControls>
                    <InputControls >
                      <label>số kho sản phẩm :</label>
                      <input {...register('category_id')} type="text" value={category_id} onChange={e => setCategory_id(e.target.value)} />
                      {
                      errors.category_id && (
                        <div style={{marginLeft:"180px"}}>
                          {errors.category_id.message}
                        </div>
                      )
                    }
                    </InputControls>
                    <InputControls>
                      <label>giá cả của sản phẩm :</label>
                      <input {...register('unit_price')} type="text" value={price} onChange={e => setPrice(e.target.value)} />
                      {
                      errors.unit_price && (
                        <div style={{marginLeft:"180px"}}>
                          {errors.unit_price.message}
                        </div>
                      )
                    }
                    </InputControls>
                    <InputControls>
                      <label>mô tả sản phẩm :</label>
                      <input {...register('product_description')} type="text" value={description} onChange={e => setDecription(e.target.value)} />
                      {
                      errors.product_description && (
                        <div style={{marginLeft:"180px"}}>
                          {errors.product_description.message}
                        </div>
                      )
                    }
                    </InputControls>
                      <ContainerInputFile>
                        <input style={{visibility:"hidden"}}   value={imgUrl} onChange={e => setImgUrl(imgUrl)}/>
                        <InputFile inputTitle="chọn hình ảnh sản phẩm 1" style={{marginLeft:"15px"}} type="file" onChange={handleChange} placeholder="dlfgjdfl"/>
                        {imgUrl && <TiTick/>}
                      </ContainerInputFile>
                      <ContainerInputFile>
                        <input  style={{visibility:"hidden"}}    value={imgUrl1}  onChange={e => setImgUrl1(imgUrl1)}/>
                        <InputFile inputColor="chọn hình ảnh sản phẩm 2" style={{marginLeft:"15px"}} type="file" onChange={handleChange} placeholder="dlfgjdfl"/>
                        {imgUrl1 && <TiTick/>}
                      </ContainerInputFile>
                      <ContainerInputFile>
                        <input style={{visibility:"hidden"}}     value={imgUrl2} onChange={e => setImgUrl2(imgUrl2)} />
                        <InputFile inputTitle="chọn hình ảnh sản phẩm 3" style={{marginLeft:"15px"}} type="file" onChange={handleChange} placeholder="dlfgjdfl"/>
                        {imgUrl2 && <TiTick/>}
                      </ContainerInputFile>
                      <ContainerInputFile>
                        <input style={{visibility:"hidden"}}    value={imgUrl3} onChange={e => setImgUrl3(imgUrl3)} />
                        <InputFile inputTitle="chọn hình ảnh sản phẩm 4" style={{marginLeft:"15px"}} type="file" onChange={handleChange} placeholder="dlfgjdfl"/>
                        {imgUrl3 && <TiTick/>}
                      </ContainerInputFile>
                     
                    <BtnCreate type="submit">tạo sản phẩm mới</BtnCreate>
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
