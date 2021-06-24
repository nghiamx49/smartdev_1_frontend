import styled from "styled-components";

export const Layout = styled.div`
    background-color: #f5f5f5;
    padding-bottom : 10rem;
    padding-top: 2rem;
`;

export const Container01 = styled.div`
    max-width: 1150px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 3px;
    font-size: 15px;
    display: flex;
`;

export const MainLeft = styled.div`
    margin: 15px;
`;

export const ImgShow = styled.img`
    width: 430px;
    height: 430px;
`;

export const ListImgProduct = styled.div`
    display: flex;
    img {
        width: 100px;
        height: 100px;
        margin-right: 8px;
        border: 1px solid #f5f5f5;
    }
`;

export const MainRight = styled.div`
    margin: 15px;
`;

export const Title = styled.p`
    font-size: 23px;
    font-weight: 500;
    line-height: 23px;
    margin-top: 5px;
`;

export const StarCommetAmount = styled.div`
    display: flex;
    align-items: center;
  
`;

export const StarCommetAmountDiv = styled.div`
    border-left : 1px solid rgba(0,0,0,.14) ;
    margin-left: 10px;
    padding: 7px 10px;
`;

export const AverageStar = styled.span`
    color: #ee4d2d;
    border-bottom: 1px solid #ee4d2d;
    margin-right: 5px;
    font-size: 18px;
    font-weight: 400;
`;

export const TotalComment = styled.span`
    border-bottom: 1px solid black;
    margin-right: 5px;
    font-size: 18px;
    font-weight: 400;
`;

export const TotalSold = styled.span`
    margin-right: 5px;
    font-size: 18px;
    font-weight: 400;
`;

export const StarCommetAmountText = styled.span`
    font-size: 15px;
    color: #767676;
    text-transform: capitalize;
`;

export const Price = styled.div`
    padding: 15px 20px;
    margin-top: 15px;
    background: #fafafa;
    font-size: 30px;
    font-weight: 700;
    color: #ee4d2d;
`;

export const Delivery = styled.div`
    display: flex;
    padding-top: 30px;
    span{
        margin-left: 5px;
        font-size: 15px;
    color: #767676;
    text-transform: capitalize;
    }
`;

export const FeeDelivery = styled.div`
    display: flex;
    margin-top: 5px;
    span{
        margin-right: 15px;  
    }
`;

export const LeftText = styled.p`
    font-size: 15px;
    color: #767676;
    text-transform: capitalize;
    margin-right: 30px;
    margin-top: 0px;
`;

export const Amount = styled.div`
    display: flex;
    padding: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: rgb(253, 245, 245);
`;

export const PlusAndMinus = styled.div`
  width: 32px;
    height: 32px;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid rgba(0,0,0,.14);
    cursor: text;
    color: rgba(0,0,0,.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NumberBetweenPlusMinus = styled.div`
    width: 50px;
    height: 32px;
    font-size: 16px;
    font-weight: 400;
    border-top: 1px solid rgba(0,0,0,.14);
    border-bottom: 1px solid rgba(0,0,0,.14);
    color: rgba(0,0,0,.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CoverButton = styled.div`
    display: flex;
`;


export const AddCartButton = styled.button`
    margin-right: 15px;
    min-width: 11.25rem;
    max-width: 250px;
    height: 48px;
    padding: 0 .75rem;
    font-size: 14px;
    background: rgba(255,87,34,0.1);
    color: #ee4d2d;
    border: 1px solid #ee4d2d;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const BuyNowButton = styled.button`
    margin-right: 15px;
    min-width: 11.25rem;
    padding: 0 .75rem;
    font-size: 14px;
    color: #fff;
    background: #ee4d2d;
    max-width: 250px;
    height: 48px;
    border: none;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Container02 = styled.div`
    max-width: 1150px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 3px;
    font-size: 15px;
    display: flex;
    margin-top: 1.4rem;
`;

export const ShopInforLeft = styled.div`
    display: flex;
    padding: 25px;
    justify-content: center;
    align-items: center;
`;

export const ImgProvider = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 25px;
`;

export const CoverNameShop = styled.div`
    border-right: 1px solid rgba(0,0,0,.14);
    padding-right: 100px;
    margin-right: 30px;

`;

export const NameShop = styled.p`
    font-weight: 500;
    font-size: 1.4rem;
    color: rgba(0,0,0,.87);
    margin: 0;
`;

export const ShowShopButton = styled.button`
    margin-right: 15px;
    min-width: 11.25rem;
    max-width: 250px;
    height: 34px;
    padding: 0 .75rem;
    font-size: 14px;
    background: rgba(255,87,34,0.1);
    color: #ee4d2d;
    border: 1px solid #ee4d2d;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ShopInforRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 60%;
    padding-right: 120px;
    label{
        text-transform: capitalize;
        color: rgba(0,0,0,.4);
        margin-right: .625rem;
        cursor: default;
    }
    span{
        color: #ee4d2d;
        cursor: pointer;
        
    }
`;

export const Container03 = styled.div`
    max-width: 1150px;
    margin: 0 auto;
    font-size: 15px;
    display: flex;
    margin-top: 1.4rem;
`;

export const Container03Left = styled.div`
    flex-basis: 80%;
    /* background-color: #ffffff;
    border-radius: 3px; */
`;

export const Container03Right = styled.div`
    flex-basis: 20%;
    background-color: #ffffff;
    border-radius: 3px;
    margin-left: 1.2rem;
`;

export const Container03LeftTop = styled.div`
    padding: 25px;
    background-color: #ffffff;
    border-radius: 3px;
`;

export const ProductDetailContainer03Left = styled.div`
    margin-bottom: 30px;
label{
    padding-left: .875rem;
    color: rgba(0,0,0,.4);
    font-size: 1.5rem;
    width: 6.25rem;
    margin-right: 2.5rem;
    cursor: default;
}
span{
    color: rgba(0,0,0,.8);
}
`;

export const ProductDescriteContainer03Left = styled.div`
pre{
    white-space: pre-wrap;
    color: rgba(0,0,0,.8);
    font-size: 1.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.875rem;
}
`;

export const TextDescriceProduct = styled.div`
    background: rgba(0,0,0,.02);
    color: rgba(0,0,0,.87);
    font-size: 1.8rem;
    padding: .875rem;
    text-transform: uppercase;
    margin-bottom: 25px;
`;

export const Container03LeftBottom = styled.div`
    background-color: #ffffff;
    border-radius: 3px;
`;



