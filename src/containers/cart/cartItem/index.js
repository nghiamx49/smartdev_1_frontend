import React, { useEffect} from 'react'
import { FcShipped } from 'react-icons/fc'
import {MdAccountBalanceWallet} from'react-icons/md'
import PropTypes from 'prop-types';

import { BtnDelete, BtnPlus, CartItemLayout, ColumnDiv, Left, Magess, Right, ShopName } from './style'

CartItem.prototype = {
    product : PropTypes.shape({
        id : PropTypes.number,
        shopName : PropTypes.string,
        linkImage : PropTypes.string,
        name : PropTypes.string,
        price : PropTypes.number,
        number : PropTypes.number,
        status : PropTypes.bool,
    })
}

export default function CartItem(props) {
    const {product,handleNumberProduct,HandlerStatusProductElement , DeleteProduct} = props;
    useEffect(() => {
        const checkbox = document.getElementById(product.id)
        checkbox.checked = product.status
    }, [product.id,product.status])

    const HandlerCheckBox = () => {
        const checkbox = document.getElementById(product.id)
        HandlerStatusProductElement(product.id , checkbox.checked)        
    }
    return (
        < CartItemLayout>
            <ShopName>
                <Left>
                    <input type="checkbox" id={product.id}  onClick={HandlerCheckBox}></input><span>Yêu Thích</span><p>{product.shopName}</p>
                </Left>
                <Right>
                    
                </Right>
            </ShopName>
            <ShopName>
                <Left>
                   
                    <img src={product.linkImage} alt=""/>
                    <p>{product.name}</p>
                </Left>
                <Right>
                    <ColumnDiv>{product.price}</ColumnDiv>
                    <ColumnDiv> <BtnPlus onClick={handleNumberProduct.bind(product,1,product.id)} >+</BtnPlus><input value={product.number}></input>
                                <BtnPlus onClick={handleNumberProduct.bind(product,-1,product.id)}>-</BtnPlus></ColumnDiv>
                    <ColumnDiv>{product.price*product.number}</ColumnDiv>
                    <ColumnDiv><BtnDelete  onClick={DeleteProduct.bind(product,product.id)}>Xóa</BtnDelete></ColumnDiv>
                </Right>
            </ShopName>
            <Magess>
                <div> <MdAccountBalanceWallet></MdAccountBalanceWallet> Shop Voucher giảm đến ₫10k</div> 
            </Magess>
            <Magess>
                <div><FcShipped></FcShipped> Miễn Phí Vận Chuyển cho đơn hàng từ ₫50.000 (giảm tối đa ₫25.000); Miễn Phí Vận Chuyển cho đơn hàng từ ₫300.000 (giảm tối đa ₫70.000)</div> 
            </Magess>
        </ CartItemLayout>
    )
}
