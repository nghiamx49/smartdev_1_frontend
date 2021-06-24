import React, { useEffect, useState } from 'react'
import { FcShipped } from "react-icons/fc";
import CartItem from './cartItem';
import TotalCart from './cartTotal';


import { CartSlibar, ColumnDiv, Container, LayoutCart, Left, Message, Right } from './style'

const products =[{
    id :0,
    shopName : "shop Hoang 0",
    linkImage : "https://cdn.mediamart.vn/Product/tai-nghe-chup-dau-co-mic-kanen-ip2050-mau-do-den-y72Dcj.png",
    name : "tai nghe 0 day",
    price : 100,
    number : 1,
    status : false,
    },
    {
    id : 1 ,
    shopName : "shop Hoang 1",
    linkImage : "https://cdn.mediamart.vn/Product/tai-nghe-chup-dau-co-mic-kanen-ip2050-mau-do-den-y72Dcj.png",
    name : "tai nghe 0 day",
    price : 100,
    number : 1,
    status : false,
    },
    {
    id : 2 ,
    shopName : "shop Hoang 2",
    linkImage : "https://cdn.mediamart.vn/Product/tai-nghe-chup-dau-co-mic-kanen-ip2050-mau-do-den-y72Dcj.png",
    name : "tai nghe 0 day",
    price : 100,
    number : 1,
    status : false,
    },
    {
        id : 3 ,
        shopName : "shop Hoang 3",
        linkImage : "https://cdn.mediamart.vn/Product/tai-nghe-chup-dau-co-mic-kanen-ip2050-mau-do-den-y72Dcj.png",
        name : "tai nghe 0 day",
        price : 100,
        number : 1,
        status : false,
        },
        {
            id : 4 ,
            shopName : "shop Hoang 4",
            linkImage : "https://cdn.mediamart.vn/Product/tai-nghe-chup-dau-co-mic-kanen-ip2050-mau-do-den-y72Dcj.png",
            name : "tai nghe 0 day",
            price : 100,
            number : 1,
            status : false,
            }
    
]
export default function Cart() {
    const [listProduct,setListProduct] = useState(products);
    const [count, setcount] = useState(0)
    const [totalMoney, settotalMoney] = useState(0)
    const handleNumberProduct = (number , id) =>{
        const newListProducts = [...listProduct];
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
        setListProduct(newListProducts)
    }
    const DeleteProduct = (id) =>{
        const newListProducts = [...listProduct];
        for (let p of newListProducts) {
            if (p.id === id) {
                const index = newListProducts.indexOf(p)
                newListProducts.splice(index, 1);
            }
        }
        setListProduct(newListProducts)
    }
    const HandlerStatusProductElement = (id, status)=> {
        const newListProducts = [...listProduct];
        for (let p of newListProducts) {
            if (p.id === id) {
                p.status = status
            }
        }
        setListProduct(newListProducts)
    }
    const HandlerCheckboxTotalTop = () => {
        let checkbox = document.getElementById("checkboxCartTotalOnTop");
        const newListProducts = [...listProduct];
        if(checkbox.checked) {
            for (const p of newListProducts ) {
                p.status = true ;
            }
        }else{
            for (const p of newListProducts ) {
                p.status = false ;
            }
        }
        setListProduct(newListProducts)
        
    }
    const HandlerCheckboxTotalBottom = () => {
        let checkboxTotalBottom = document.getElementById("checkboxCartTotalOnBottom");
        const newListProducts = [...listProduct];
        if(checkboxTotalBottom.checked) {
            for (const p of newListProducts ) {
                p.status = true ;
            }
            setcount(listProduct.length)
        }else{
            for (const p of newListProducts ) {
                p.status = false ;
            }
            setcount(0)
        }
        setListProduct(newListProducts)
        
    }
    const DeleteProductOnBottom = ()=> {
        let newListProducts = [...listProduct];
        for( let i =0 ; i < newListProducts.length ; i++) {
            if(newListProducts[i].status === true){
                    newListProducts.splice(i, 1);
                    --i;
                }
        }
        setListProduct(newListProducts)
    }
    useEffect(() => {
        let checkboxTotalTop = document.getElementById("checkboxCartTotalOnTop");
        let checkboxTotalBottom = document.getElementById("checkboxCartTotalOnBottom");
        if(count === listProduct.length){
            checkboxTotalTop.checked = true
            checkboxTotalBottom.checked = true
        }else{
            checkboxTotalTop.checked = false
            checkboxTotalBottom.checked = false
        }
        settotalMoney(0)
        let temp = 0
        let tempCount = 0
        for (const p of listProduct) {
            if(p.status === true){
                temp = temp +p.number*p.price
                tempCount = tempCount +1
            }
        }
        settotalMoney(temp)
        setcount(tempCount)
    }, [count,listProduct])
    return (
        <LayoutCart>
            <Container>
                <Message>
                    <div><FcShipped></FcShipped>  Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</div> 
                </Message>
              
                <CartSlibar>
                    <Left>
                        <input type="checkbox" id="checkboxCartTotalOnTop" onClick={HandlerCheckboxTotalTop}></input> <span>Sản Phẩm</span>
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
                        <CartItem product = {product} handleNumberProduct={handleNumberProduct}  key={product.id}
                        HandlerStatusProductElement ={HandlerStatusProductElement}
                        DeleteProduct= {DeleteProduct}></CartItem>
                    ))
                }
                <TotalCart  HandlerCheckboxTotalBottom= { HandlerCheckboxTotalBottom} total ={listProduct.length} count={count} totalMoney={totalMoney}
                            deleteProductOnBottom ={DeleteProductOnBottom}></TotalCart>
            </Container>
        </LayoutCart>
    )
}
