import React, { useState } from 'react'
import { RiStarFill } from "react-icons/ri";
import { GrDeliver } from "react-icons/gr";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { AiTwotoneShop } from 'react-icons/ai'

import imgProduct1 from '../../assests/img/san-pham-1.jpeg'
import imgProduct2 from '../../assests/img/san-pham-2.jpeg'
import imgProduct3 from '../../assests/img/san-pham-3.jpeg'
import imgProduct4 from '../../assests/img/san-pham-4.jpeg'
import imgProvider from '../../assests/img/user-default.png'
import Feedback from './feeback';
import TopProductSale from '../../components/cardProduct'
import * as PD from './style';

const ProductDetail = () => {

    const [imgShow, setImgShow] = useState(imgProduct1)
    const [amount, setAmount] = useState(1)
    const numberComment = 1;

    const listImg = [
        imgProduct1,
        imgProduct2,
        imgProduct3,
        imgProduct4
    ];
    function changeImgShow(number) {
        setImgShow(listImg[number])
    }

    function increasingAmount(e) {
        setAmount(amount + 1)
    }

    function decreaseAmount(e) {
        if (amount >= 1) {
            setAmount(amount - 1)
        }
    }

    return (
        <PD.Layout>
            <PD.Container01>
                <PD.MainLeft>
                    <PD.ImgShow src={imgShow} alt="" />
                    <PD.ListImgProduct>
                        {listImg.map((img) => (
                            <img key={listImg.indexOf(img)} src={img} alt="" onClick={changeImgShow.bind(this, listImg.indexOf(img))} />
                        ))}
                    </PD.ListImgProduct>
                </PD.MainLeft>
                <PD.MainRight>
                    <PD.Title>Dép nữ quai bèo cực xinh Hot Trend 2021. Dép nữ quai ngang đẹp đi chơi Mika Store</PD.Title>
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
                        ₫25.000
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
                            <label>Danh mục</label><span>Giày dép nữ</span>
                        </PD.ProductDetailContainer03Left>
                        <PD.ProductDescriteContainer03Left>
                            <PD.TextDescriceProduct>Mô tả sản phẩm</PD.TextDescriceProduct>
                            <pre>Sunnie Shoes - "Let shop fair - It's Sunnie"
                            Luôn luôn cập nhật những mẫu mã mới , đa dạng – Sunnie Shoes hứa hẹn sẽ luôn đem lại cho bạn những sản phẩm thời trang ưng ý và hoàn hảo nhất !
                            ----------------------------------------------------------------------
                            Mô tả sản phẩm chi tiết:
                            Màu sắc: Trắng/ Đen
                            Phiên bản: Hàn quốc
                            Size: 36, 37, 38, 39, 40, 41
                            Nhãn hiệu : Sunnie Signature
                            Chất liệu : Nhựa dẻo siêu bền
                            Hoa văn:  TRƠN, GỢN MA SÁT CHÂN SIÊU THOẢI MÁI
                            Thời gian giao hàng: HCM : 1- 2 ngày, ngoại tỉnh 3-5 ngày làm việc.
                            Bảo hành: Miễn phí đổi trả trong Hồ Chí Minh, hỗ trợ đổi trả tại các Tỉnh thành khác
                            -------------------------------------------------------------------------
                            SUNNY VIETNAM Co., Ltd</pre>
                        </PD.ProductDescriteContainer03Left>
                    </PD.Container03LeftTop>
                    <PD.Container03LeftBottom>
                        <PD.TitleComment>Đánh giá sản phẩm</PD.TitleComment>
                        <PD.HeaderComment>
                            <PD.Star>
                                <div><PD.NumberStar>5</PD.NumberStar> trên 5</div>
                                <div>
                                    <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarFill />
                                </div>
                            </PD.Star>
                            <PD.CoverButtonStar>
                                <PD.ButtonStar type="button">Tất cả</PD.ButtonStar>
                                <PD.ButtonStar type="button">5 sao({numberComment})</PD.ButtonStar>
                                <PD.ButtonStar type="button">4 sao()</PD.ButtonStar>
                                <PD.ButtonStar type="button">3 sao()</PD.ButtonStar>
                                <PD.ButtonStar type="button">2 sao()</PD.ButtonStar>
                                <PD.ButtonStar type="button">1 sao()</PD.ButtonStar>
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
                        <PD.ProductTopSaleDetail>
                            <TopProductSale />
                        </PD.ProductTopSaleDetail>
                        <PD.ProductTopSaleDetail>
                            <TopProductSale />
                        </PD.ProductTopSaleDetail>
                        <PD.ProductTopSaleDetail>
                            <TopProductSale />
                        </PD.ProductTopSaleDetail>
                    </PD.ProductTopSaleDetailCover>
                </PD.Container03Right>
            </PD.Container03>
        </PD.Layout>
    )
}

export default ProductDetail