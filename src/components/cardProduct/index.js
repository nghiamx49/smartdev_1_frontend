import React from 'react'
import { ProductBottom,   DivProductName, ProductFavourite, NameProduct, ProductPrice, Product, ProductDiscount, ProductSold, ProductSimilar } from './style'

export default function CartProduct(props) {
    const {name,price,img}  = props;
    return (
        <Product to="orderdetail">
            <ProductDiscount>Giảm 20%</ProductDiscount>
            <ProductFavourite>Yêu thích</ProductFavourite>
            <img src={img}alt="" />
            <DivProductName>
             <NameProduct>{name}</NameProduct>
            </DivProductName>
            <ProductBottom>
                <ProductPrice>₫{price}</ProductPrice>
                <ProductSold>Đã Bán:10k</ProductSold>
            </ProductBottom>
            <ProductSimilar className="similar">
                Sản Phẩm Tương Tự
            </ProductSimilar>
        </Product>

    )
}
