import React from 'react'
import { ProductBottom,   DivProductName,ProductImage, ProductFavourite, NameProduct, ProductPrice, ProductDiscount, ProductSold, ProductSimilar, ProductStyle, ProductContainer } from './style'

export default function Product(props) {
    const {item}= props;
    return (
        <ProductContainer to={`product-detail/${item.id}`}>
            <ProductStyle>
                <ProductImage>
                    <img src={item.image_source} alt=""/>
                </ProductImage>
                <ProductDiscount>20% Giảm</ProductDiscount>
                <ProductFavourite>Yêu thích</ProductFavourite>
                <DivProductName>
                <NameProduct>{item.name}</NameProduct>
                </DivProductName>
                <ProductBottom>
                    <ProductPrice>₫{item.unit_price}</ProductPrice>
                    <ProductSold>Đã Bán:10k</ProductSold>
                </ProductBottom>
                <ProductSimilar className="similar">
                    Sản Phẩm Tương Tự
                </ProductSimilar>
            </ProductStyle>
        </ProductContainer>

    )
}
