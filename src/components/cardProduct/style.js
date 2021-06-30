import styled from "styled-components";
import { theme } from "../../assests/common/color";

export const Product = styled.div`
    height: 300px;
    width: 200px;

    img{
        width: 100%;
    }
    position: relative;
    box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 10%);
    z-index: 20;
    &:hover .similar{
        display: block;
    }
`

export const ProductBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 2%;
    span{
        padding: 10px;
    }
    position: absolute;
`
export const ProductDiscount = styled.div`
    top: 0%;
    right: 0%;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 51% 86%, 0 100%);
    background-color: #f6cf32;
    width: 20%;
    height: 15%;
    position: absolute;
    text-align: center;
    color: ${theme.textRed};
`
export const ProductFavourite = styled.div`
    top: 5%;
    left: -1%;
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    background-color: ${theme.textRed};
    width: 30%;
    height: 5%;
    position: absolute;
    text-align: center;
    color: ${theme.white};
    font-size: 10px;
`
export const DivProductName = styled.div`
    padding: 10px;
`
export const NameProduct = styled.span`
    color: rgba(0,0,0,.8);
    font-size: .75rem;
`
export const ProductPrice = styled.span`
    color:${theme.textRed};
`
export const ProductSold = styled.span`
    color: ${theme.gray};
    font-size: .75rem;
`
export const ProductSimilar = styled.div`
    background-color: ${theme.textRed};
    font-size: 20px;
    text-align: center;
    position: absolute;
    bottom: -40px;
    width: 100%;
    color: white;
    height: 40px;
    /* border: 2px solid  #f94b2f; */
    display: none;
`
