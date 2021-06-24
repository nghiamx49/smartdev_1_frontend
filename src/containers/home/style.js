import styled from "styled-components"


export const HomeSlider = styled.div`
    margin:30px 0 10px;
    box-sizing: border-box;
    display: flex;
    img{
        width: 100%;
    }
`;

export const HomeSliderLeft = styled.div`
    flex-basis: 70%;
    margin-right: 10px;
`;
export const HomeSliderRight = styled.div`
    flex-basis: 30%;
    img{
        height: 115px;
        &:first-child{
            margin-bottom: 7px;
        }
    }
`;
export const HomeEndow = styled.div`
    display: flex;
    div{
        padding: 10px;
        text-align: center;
        p{
            font-size: 12px;
            font-weight: 400;
            text-transform: capitalize;
            margin:5px 0 0;
            line-height: 16px;
            max-width: 150px;
        }
        img{
            height: 60px;
            width: 60px;
        }
    }
`;

export const HomeBgF5F5F5 = styled.div`
    background-color: #F5F5F5;
    padding: 30px 0;
`;
export const HomeDonateImg = styled.div`
    img{
        width: 100%;
    }
`;
export const HomeCategory = styled.div`
    background-color: #fff;
    margin: 20px 0;

`;
export const HomeCategoryTitle = styled.div`
    height: 60px;
    padding: 15px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0,0,0,.05);
    p{
        font-size: 16px;
        margin: 0;
        font-size: 300;
        color: rgba(0,0,0,.54);
    }
`;
export const HomeCategoryList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const HomeCategoryItem = styled.div`
    color: rgba(0,0,0,.8);
    border-right: 1px solid rgba(0,0,0,.05);
    border-bottom: 1px solid rgba(0,0,0,.05);
    text-align: center;
    background-color: #fff;
    height: 130px;
    width: 114px;
    img{
        height:80px;
        width: 80px;
    }
    p{
        font-size: 13px;
        text-transform: capitalize;
        margin:0;
    }
`;

export const HomeFaleSale = styled.div`
    background-color: #fff;
`;
export const HomeFaleSaleTitle = styled.div`
    height: 60px;
    padding: 15px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0,0,0,.05);
`;
export const HomeFaleSaleList = styled.div`
    display: flex;
    justify-content: space-between;
    height: 250px;
`;
export const HomeFaleSaleItem = styled.div`
    position: relative;
    height: 180px;
    width: 180px;
    img{
        height: 180px;
    width: 180px;
    }
    p{
        color: #ee4d2d;
        font-weight: 600;
        font-size: 24px;
        margin:0;
        text-align: center;
        span{
            font-size: 12px;
            margin-right: 5px;
        }
    }
`;
export const HomeFaleSaleItemDiscount = styled.div`
    position: absolute;
        top: 0;
        right: 0;
        background-color: rgba(255, 212, 36, 0.9);
        height: 60px;
        width: 60px;
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 48% 83%, 0 100%);
        span{
            text-align: center;
            font-weight: 400;
            color: rgb(238, 77, 45);
            text-transform: uppercase;
            font-size: 16px;
            display: block;
            &:last-child{
                color:#fff;
                font-size: 15px;
                text-transform: uppercase;
                text-align: center;
            }
        }
`;
export const HomeFaleSaleItemSaled = styled.div`
        height: 20px;
        width: 160px;
        border-radius: 20px;
        margin:0 auto;
        text-align: center;
        position: relative;
        overflow: hidden;
        background-color: RGB(255, 189, 166);
        div{
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            height: 20px;
            width: 100px;
            background-color: red;
        }
        span{
            line-height: 20px;
            text-align: center;
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
            position: relative;
            z-index: 10;
        }
`;
export const HomeImgSale = styled.div`
    display: flex;
    margin:20px 0;
    img{
        width: 33.3%;
    }
`;

export const HomeShoppeSmall = styled.div`
    
`;
export const HomeShoppeSmallTop = styled.div`
    height: 60px;
    padding: 15px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0,0,0,.05);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
`;
export const HomeShoppeSmallTopLeft = styled.div`
   display: flex;
   align-items: center;
   h3{
    color: #d0011b;
    text-transform: uppercase;
    font-size: 20px;
    margin-right: 10px;
   }
   p span{
       display: inline-flex;
       align-items: center;
        font-size: 16px;
        margin-right: 10px;
        svg{
            margin-right: 5px;
        }
    }
`;
export const HomeShoppeSmallTopRight = styled.div`
   span{
       display: inline-flex;
       align-items: center;
        font-size: 16px;
        margin-right: 10px;
        color: #d0011b;
        svg{
            margin-top: 5px;
        }
    }
`;
export const HomeShoppeSmallBottom = styled.div`
    display: flex;
    background-color: #fff;
    padding: 10px;
`;
export const HomeShoppeSmallList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const HomeShoppeSmallItem = styled.div`
    height: 220px;
    width:184px;
    position: relative;
    p{
        position: absolute;
        bottom:0px;
        left: 15%;
        font-size: 16px;
        text-transform: capitalize;
        margin: 0;
        color: #d0011b;
    }
    img{
        width: 100%;
    }
`;
export const HomeSearch = styled.div`
   margin: 20px 0;
`;
export const HomeSearchTop = styled.div`
   margin: 20px 0;
`;
export const HomeSearchList = styled.div`
   display: flex;
`;
export const HomeSearchItem = styled.div`
   display: flex;
   background-color: #fff;
   border-right: 1px solid rgba(0,0,0,.05);
   width: 230px;
   p {
       padding: 0 21px;
    span{
        display: block;
        &:first-child{
            color: #222;
            font-weight: 500;
            text-transform: capitalize;
            font-size: 13px;
        }
        &:last-child{
            margin-top: .3125rem;
            color: #757575;
            font-size: 11px;
        }
   }
   }
   img{
       height: 100px;
       width: 100px;
   }
`;

export const HomeSearchTopList = styled.div`
    
`;
export const HomeSearchTopItem = styled.div`
background-color: #fff;
padding: 20px;
    img{
        width: 100%;
    }
   p{
       margin:10px 0 0;
       font-size: 20px;
       text-transform: capitalize;
   }
`;
export const HomeProduct = styled.div`

`;
export const HomeProductList = styled.div`
    display: flex;
`;


export const Container = styled.div`
    max-width: 1150px;
    margin:0 auto;
    box-sizing: border-box;
`;
