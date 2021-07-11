import React, { useRef, useState } from 'react'
import { RiStarFill } from "react-icons/ri";
import { GrDeliver } from "react-icons/gr";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { AiTwotoneShop } from 'react-icons/ai'
import imgProvider from '../../assests/img/user-default.png'
import Feedback from './feeback';
import Product from '../../components/cardProduct'
import * as PD from './style';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductsRequest,getProductDetailRequest } from "../../actions/productAction";
import { useParams } from 'react-router-dom';

const ProductDetail = ({state,getList,getProductDetail}) => {

    const [amount, setAmount] = useState(1)
    const imgRef = useRef()
    let {idProduct} = useParams();
    
    useEffect(()=>{
        getList()
        getProductDetail(idProduct)
       
      },[getList,getProductDetail,idProduct])
    function getNumberRating () {
        return state.product.rating?.reduce((a,b)=>a.star + b.star,{star:0}) / state.product.rating?.length
    }
    function getNumberRatingChose (star) {
        let count = 0;
         state.product.rating?.forEach(element => {
            element.star === star && count++
        });
        return count
    }
    getNumberRating ()
    function changeImgShow(imgSrc) {
        console.log(imgSrc)
        imgRef.current.src = imgSrc
    }

    function increasingAmount(e) {
        setAmount(amount + 1)
    }

    function decreaseAmount(e) {
        if (amount >= 1) {
            setAmount(amount - 1)
        }
    }
    useEffect(()=>{
       window.scrollTo(0,0);
    },[])
    return (
        <PD.Layout>
            <PD.Container01>
                <PD.MainLeft>
                    <PD.ImgShow ref={imgRef} src={state.product.image_sources && state.product.image_sources[0].image_source} alt="" />
                    <PD.ListImgProduct>
                        {state.product.image_sources?.map((img,index) => (
                            <img  key={index} src={img.image_source} alt="" onClick={()=>changeImgShow(img.image_source)} />
                        ))}
                    </PD.ListImgProduct>
                </PD.MainLeft>
                <PD.MainRight>
                    <PD.Title>{state.product.name}</PD.Title>
                    <PD.StarCommetAmount>
                        <div>
                            <PD.AverageStar>4.9</PD.AverageStar>
                            <RiStarFill color="#ee4d2d" />
                            <RiStarFill color="#ee4d2d" />
                            <RiStarFill color="#ee4d2d" />
                            <RiStarFill color="#ee4d2d" />
                            <RiStarFill color="#ee4d2d" />
                        </div>
                        <PD.StarCommetAmountDiv>
                            <PD.TotalComment>74</PD.TotalComment>
                            <PD.StarCommetAmountText>Đánh giá</PD.StarCommetAmountText>
                        </PD.StarCommetAmountDiv>
                        <PD.StarCommetAmountDiv>
                            <PD.TotalSold>310</PD.TotalSold>
                            <PD.StarCommetAmountText>Đã bán</PD.StarCommetAmountText>
                        </PD.StarCommetAmountDiv>
                    </PD.StarCommetAmount>
                    <PD.Price>
                        ₫{state.product.unit_price}.00
                        </PD.Price>
                    <PD.Delivery>
                        <PD.LeftText>Vận chuyển</PD.LeftText>
                        <GrDeliver />
                        <div>
                            <span>Vận chuyển toàn quốc</span>
                            <PD.FeeDelivery>
                                <span>Phí Vận Chuyển</span>
                                <span>₫25.000</span>
                            </PD.FeeDelivery>
                        </div>
                    </PD.Delivery>
                    <PD.Amount>
                        <PD.LeftText>Số lượng</PD.LeftText>
                        <PD.PlusAndMinus onClick={decreaseAmount}>
                            <CgMathMinus />
                        </PD.PlusAndMinus>
                        <PD.NumberBetweenPlusMinus>{amount}</PD.NumberBetweenPlusMinus>
                        <PD.PlusAndMinus onClick={increasingAmount}>
                            <CgMathPlus />
                        </PD.PlusAndMinus>
                    </PD.Amount>
                    <PD.CoverButton>
                        <PD.AddCartButton type="button"><FaCartPlus /> &nbsp;Thêm vào giỏ hàng</PD.AddCartButton>
                        <PD.BuyNowButton type="button">Mua ngay</PD.BuyNowButton>
                    </PD.CoverButton>
                </PD.MainRight>
            </PD.Container01>
            <PD.Container02>
                <PD.ShopInforLeft>
                    <PD.ImgProvider src={imgProvider} alt="" />
                    <PD.CoverNameShop>
                        <p>mikastore95</p>
                        <PD.ShowShopButton type="button"><AiTwotoneShop /> &nbsp;Xem shop</PD.ShowShopButton>
                    </PD.CoverNameShop>
                </PD.ShopInforLeft>
                <PD.ShopInforRight>
                    <div><label>Đánh Giá</label><span>1,5k</span></div>
                    <div><label>Sản Phẩm</label><span></span></div>
                    <div><label>Tham gia </label><span>6 tháng trước</span></div>
                </PD.ShopInforRight>
            </PD.Container02>
            <PD.Container03>
                <PD.Container03Left>
                    <PD.Container03LeftTop>
                        <PD.ProductDetailContainer03Left>
                            <PD.TextDescriceProduct>Chi tiết sản phẩm</PD.TextDescriceProduct>
                            <label>Danh mục</label><span>{state.product.category_name}</span>
                        </PD.ProductDetailContainer03Left>
                        <PD.ProductDescriteContainer03Left>
                            <PD.TextDescriceProduct>Mô tả sản phẩm</PD.TextDescriceProduct>
                            <pre>
                                {state.product.product_description}
                            </pre>
                        </PD.ProductDescriteContainer03Left>
                    </PD.Container03LeftTop>
                    <PD.Container03LeftBottom>
                        <PD.TitleComment>Đánh giá sản phẩm</PD.TitleComment>
                        <PD.HeaderComment>
                            <PD.Star>
                                <div><PD.NumberStar>{getNumberRating()||0}</PD.NumberStar> trên 5</div>
                                <div>
                                    {new Array(getNumberRating()||0).fill(0).map((item, index)=>  <RiStarFill key={index} />)}
                                </div>
                            </PD.Star>
                            <PD.CoverButtonStar>
                                <PD.ButtonStar type="button">Tất cả</PD.ButtonStar>
                                <PD.ButtonStar type="button">5 sao({getNumberRatingChose(5)})</PD.ButtonStar>
                                <PD.ButtonStar type="button">4 sao({getNumberRatingChose(4)})</PD.ButtonStar>
                                <PD.ButtonStar type="button">3 sao({getNumberRatingChose(3)})</PD.ButtonStar>
                                <PD.ButtonStar type="button">2 sao({getNumberRatingChose(2)})</PD.ButtonStar>
                                <PD.ButtonStar type="button">1 sao({getNumberRatingChose(1)})</PD.ButtonStar>
                            </PD.CoverButtonStar>
                        </PD.HeaderComment>
                        <div>
                            <Feedback />
                        </div>
                    </PD.Container03LeftBottom>
                </PD.Container03Left>
                <PD.Container03Right>
                    <PD.TitleProductTopSale>Top sản phẩm bán chạy</PD.TitleProductTopSale>
                    <PD.ProductTopSaleDetailCover>
                        {
                            state.allProducts.slice(0,3).map((item,index)=><Product key={index} item={item}/>)
                        }
                    </PD.ProductTopSaleDetailCover>
                </PD.Container03Right>
            </PD.Container03>
        </PD.Layout>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.productReducer,
    }
  }
  const mapDispatchToProps = (dispatch) =>
    ({
        getList: () => dispatch(getProductsRequest()),
        getProductDetail: id => dispatch(getProductDetailRequest(id)),
    })
  
ProductDetail.propTypes = {
    getList: PropTypes.func,
    getProductDetail:PropTypes.func,
    state:PropTypes.object,
  };
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)
