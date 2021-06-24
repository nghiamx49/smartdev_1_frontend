import React from 'react'
import { ProductBottom,   DivProductName, ProductFavourite, NameProduct, ProductPrice, Product, ProductDiscount, ProductSold, ProductSimilar } from './style'

export default function CartProduct() {
    return (
        <Product>
            <ProductDiscount>Giảm 20%</ProductDiscount>
            <ProductFavourite>Yêu thích</ProductFavourite>
            <img src="https://halotravel.vn/wp-content/uploads/2020/07/thach_trangg_101029297_573874646879779_1794923475739360981_n.jpg"></img>
            <DivProductName>
             <NameProduct>Bao Da Pu Màu Trơn Chất Lượng Cao</NameProduct>
            </DivProductName>
            <ProductBottom>
                <ProductPrice>₫100.000</ProductPrice>
                <ProductSold>Đã Bán:10k</ProductSold>
            </ProductBottom>
            <ProductSimilar className="similar">
                Sản Phẩm Tương Tự
            </ProductSimilar>
        </Product>

    )
}
