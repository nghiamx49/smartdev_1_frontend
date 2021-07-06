import React from 'react'
import { ProductBottom,   DivProductName,ProductImage, ProductFavourite, NameProduct, ProductPrice, ProductDiscount, ProductSold, ProductSimilar, ProductStyle, ProductContainer } from './style'

export default function Product(props) {
    const {nameContent,img,price}= props;
    return (
        <ProductContainer to="product-detail">
            <ProductStyle>
                <ProductImage>
                    <img src={img} alt=""/>
                </ProductImage>
                <ProductDiscount>20% Giảm</ProductDiscount>
                <ProductFavourite>Yêu thích</ProductFavourite>
                <DivProductName>
                <NameProduct>{nameContent}</NameProduct>
                </DivProductName>
                <ProductBottom>
                    <ProductPrice>₫{price}</ProductPrice>
                    <ProductSold>Đã Bán:10k</ProductSold>
                </ProductBottom>
                <ProductSimilar className="similar">
                    Sản Phẩm Tương Tự
                </ProductSimilar>
            </ProductStyle>
        </ProductContainer>

    )
}
