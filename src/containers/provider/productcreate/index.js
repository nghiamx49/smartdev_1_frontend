import React, { useRef, useState } from 'react'
import axios from "axios";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { connect } from 'react-redux';
import { storage } from '../../../firebase/config';
import {TiTick} from "react-icons/ti"
import {InputControls,TitleProducts,BtnCreate,InputFile, ContainerInputFile} from "./style"




const schema = yup.object().shape({
    name: yup.string().required(),
    quantity: yup.string().required(),
    category_id: yup.string().required(),
    unit_price: yup.string().required(),
    product_description: yup.string().required(),
    images: yup.string().required(),
    images1: yup.string().required(),
    images2: yup.string().required(),
    images3: yup.string().required()
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
  const imgRef1 = useRef();
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
               data.images,
               data.images1,
               data.images2,
               data.images3,
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
                    </InputControls>
                    <InputControls >
                      <label>số lượng sản phẩm :</label>
                      <input {...register('quantity')} type="text" value={quantity} onChange={e => setQuantity(e.target.value)} />
                    </InputControls>
                    <InputControls >
                      <label>số kho sản phẩm :</label>
                      <input {...register('category_id')} type="text" value={category_id} onChange={e => setCategory_id(e.target.value)} />
                    </InputControls>
                    <InputControls>
                      <label>giá cả của sản phẩm :</label>
                      <input {...register('unit_price')} type="text" value={price} onChange={e => setPrice(e.target.value)} />
                    </InputControls>
                    <InputControls>
                      <label>mô tả sản phẩm :</label>
                      <input {...register('product_description')} type="text" value={description} onChange={e => setDecription(e.target.value)} />
                    </InputControls>
                      <div>
                        <input style={{visibility:"hidden"}}   {...register('images')}  value={imgUrl} />
                        <InputFile inputTitle="chọn hình ảnh sản phẩm 1" style={{marginLeft:"15px"}} type="file" onChange={handleChange} placeholder="dlfgjdfl"/>
                      
                      </div>
                      <div>
                        <input style={{visibility:"hidden"}}  {...register('images1')}  value={imgUrl1} />
                        <InputFile inputColor="chọn hình ảnh sản phẩm 2" style={{marginLeft:"15px"}} type="file" onChange={handleChange} placeholder="dlfgjdfl"/>
                      </div>
                      <div>
                        <input style={{visibility:"hidden"}}  {...register('images2')}  value={imgUrl2} />
                        <InputFile inputTitle="chọn hình ảnh sản phẩm 3" style={{marginLeft:"15px"}} type="file" onChange={handleChange} placeholder="dlfgjdfl"/>
                      </div>
                      <ContainerInputFile>
                        <input style={{visibility:"hidden"}}  {...register('images3')}  value={imgUrl3} />
                        <InputFile inputTitle="chọn hình ảnh sản phẩm 4" style={{marginLeft:"15px"}} type="file" onChange={handleChange} placeholder="dlfgjdfl"/>
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
