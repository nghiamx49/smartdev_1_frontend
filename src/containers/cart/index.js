import React, { useState } from 'react'
import { FcShipped } from "react-icons/fc";
import CartItem from './cartItem';
import TotalCart from './cartTotal';


import { CartSlibar, ColumnDiv, Container, LayoutCart, Left, Message, Right } from './style'

const products =[{
    id :0,
    shopName : "shop Hoang 1",
    linkImage : "https://cdn.mediamart.vn/Product/tai-nghe-chup-dau-co-mic-kanen-ip2050-mau-do-den-y72Dcj.png",
    name : "tai nghe 0 day",
    price : 100,
    number : 1,
    },
    {
    id : 1 ,
    shopName : "shop Hoang 1",
    linkImage : "https://cdn.mediamart.vn/Product/tai-nghe-chup-dau-co-mic-kanen-ip2050-mau-do-den-y72Dcj.png",
    name : "tai nghe 0 day",
    price : 100,
    number : 1,
    }
]
export default function Cart() {
    const [listProduct,setListProduct] = useState(products);
    const handleNumberProduct = (number , id) =>{
        const newListProducts = [...listProduct];
        console.log(id)
        for (let p of newListProducts) {
            if (p.id === id) {
                const index = newListProducts.indexOf(p)
                if(p.number === 1 && number === -1){
                    newListProducts.splice(index, 1);
                    break;
                }else{
                    p.number+=number
                }
               
            }
        }
        console.log(newListProducts)
        setListProduct(newListProducts)
    }
    return (
        <LayoutCart>
            <Container>
                <Message>
                    <div><FcShipped></FcShipped>  Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</div> 
                </Message>
              
                <CartSlibar>
                    <Left>
                        <input type="checkbox"></input> <span>Sản Phẩm</span>
                    </Left>
                    <Right>
                        <ColumnDiv>Đơn Giá</ColumnDiv>
                        <ColumnDiv>Số Lượng</ColumnDiv>
                        <ColumnDiv>Thành TIền</ColumnDiv>
                        <ColumnDiv>Thao Tác</ColumnDiv>
                    </Right>
                </CartSlibar>
                {
                    (listProduct.length !==0 ) && listProduct.map((product) =>(
                        <CartItem product = {product} handleNumberProduct={handleNumberProduct}></CartItem>
                    ))
                }
                {/* <CartItem></CartItem>
                <CartItem></CartItem>
                <CartItem></CartItem>
                <CartItem></CartItem> */}
                <TotalCart>
                    
                </TotalCart>
            </Container>

        </LayoutCart>
    )
}
