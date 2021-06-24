import React from 'react'
import home_img_1 from "../../assests/img/home-img-4.jpg"
import home_img_2 from "../../assests/img/home-img-1.png"
import home_img_3 from "../../assests/img/home-img-2.png"
import home_img_4 from "../../assests/img/home-img-3.png"
import home_search_top_1 from "../../assests/img/searchtop-1.JPG"
import home_search_top_2 from "../../assests/img/searchtop-2.JPG"
import home_search_top_3 from "../../assests/img/searchtop-3.JPG"
import * as HOME from "./style"
import * as LIST from "./contants"
import {FcSynchronize,FcStumbleupon,FcShipped,FcNext} from "react-icons/fc"


function Home() {
    return (
        <div>
            <HOME.Container>
                <HOME.HomeSlider>
                    <HOME.HomeSliderLeft>
                        <img src={home_img_1} alt="" />
                    </HOME.HomeSliderLeft>
                    <HOME.HomeSliderRight>
                        <img src={home_img_2} alt="" />
                        <img src={home_img_3} alt="" />
                    </HOME.HomeSliderRight>
                </HOME.HomeSlider>
                <HOME.HomeEndow>
                    {
                        LIST.listEndow.map((item) => (<div>
                            <img src={item.img} alt="" />
                            <p>{item.text}</p>
                        </div>))
                    }
                </HOME.HomeEndow>
            </HOME.Container>
            <HOME.HomeBgF5F5F5>
                <HOME.Container>
                    <HOME.HomeDonateImg>
                        <img src={home_img_4} alt="" />
                    </HOME.HomeDonateImg>
                    <HOME.HomeCategory>
                        <HOME.HomeCategoryTitle>
                            <p>DANH MỤC</p>
                        </HOME.HomeCategoryTitle>
                        <HOME.HomeCategoryList>
                           {
                               LIST.listCategory.map(item => (
                                <HOME.HomeCategoryItem>
                                    <img src={item.img} alt="" />
                                    <p>{item.text}</p>
                                </HOME.HomeCategoryItem>
                               ))
                           }
                        </HOME.HomeCategoryList>
                    </HOME.HomeCategory>
                    <HOME.HomeFaleSale>
                        <HOME.HomeFaleSaleTitle>
                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/fb1088de81e42c4e538967ec12cb5caa.png" alt="" />
                        </HOME.HomeFaleSaleTitle>
                        <HOME.HomeFaleSaleList>
                           {
                               LIST.listFlashSale.map(item => (
                                <HOME.HomeFaleSaleItem>
                                    <HOME.HomeFaleSaleItemDiscount>
                                        <span>27%</span>
                                        <span>giảm</span>
                                    </HOME.HomeFaleSaleItemDiscount>
                                    <img src={item.img} alt="" />
                                    <p><span>₫</span>{item.text}</p>
                                    <HOME.HomeFaleSaleItemSaled>
                                        <div></div>
                                        <span>đã bán 240</span>
                                    </HOME.HomeFaleSaleItemSaled>
                                </HOME.HomeFaleSaleItem>
                               ))
                           }
                        </HOME.HomeFaleSaleList>
                    </HOME.HomeFaleSale>
                    <HOME.HomeImgSale>
                        <img src="https://cf.shopee.vn/file/2519150f4c997665a01472197cbc32f7" alt="" />
                        <img src="https://cf.shopee.vn/file/8781d862e458d0c573013a43d307793c" alt="" />
                        <img src="https://cf.shopee.vn/file/20109bbe686faeb80e6d4639b620767d" alt="" />
                    </HOME.HomeImgSale>
                    <HOME.HomeShoppeSmall>
                         <HOME.HomeShoppeSmallTop>
                                <HOME.HomeShoppeSmallTopLeft>
                                    <h3>shopee small</h3>
                                    <p>
                                        <span>
                                            <FcSynchronize/>
                                            7 Ngày Miễn Phí Trả Hàng
                                        </span>
                                        <span>
                                            <FcStumbleupon/>
                                            Hàng Chính Hãng 100%
                                        </span>
                                        <span>
                                            <FcShipped/>
                                            Miễn Phí Vận Chuyển
                                        </span>
                                    </p>
                                </HOME.HomeShoppeSmallTopLeft>
                                <HOME.HomeShoppeSmallTopRight>
                                    <span>xem tất cả <FcNext/></span>
                                </HOME.HomeShoppeSmallTopRight>
                        </HOME.HomeShoppeSmallTop>
                        <HOME.HomeShoppeSmallBottom>
                            <div>
                                <img src="https://cf.shopee.vn/file/3d3c2c1e0331fb9ce7535090cd41a3e0" alt="" />
                            </div>
                           <HOME.HomeShoppeSmallList>
                              {
                                  LIST.listShpeeSmall.map(item=>(
                                    <HOME.HomeShoppeSmallItem>
                                        <img src={item.img}alt="" />
                                        <p>{item.text}</p>
                                    </HOME.HomeShoppeSmallItem>
                                  ))
                              }
                           </HOME.HomeShoppeSmallList>
                        </HOME.HomeShoppeSmallBottom>
                    </HOME.HomeShoppeSmall>
                    <HOME.HomeSearch>
                        <HOME.HomeShoppeSmallTop>
                                <HOME.HomeShoppeSmallTopLeft>
                                    <h3>XU HƯỚNG TÌM KIẾM</h3>
                                </HOME.HomeShoppeSmallTopLeft>
                                <HOME.HomeShoppeSmallTopRight>
                                    <span>xem tất cả <FcNext/></span>
                                </HOME.HomeShoppeSmallTopRight>
                        </HOME.HomeShoppeSmallTop>
                        <HOME.HomeSearchList>
                           {
                               LIST.listSearch.map(item=>(
                                <HOME.HomeSearchItem>
                                    <p>
                                        <span>{item.textTop}</span>
                                        <span>{item.textBottom}</span>
                                    </p>
                                    <img src={item.img} alt="" />
                                </HOME.HomeSearchItem>
                               ))
                           }
                        </HOME.HomeSearchList>
                        
                    </HOME.HomeSearch>
                    <HOME.HomeSearchTop>
                        <HOME.HomeShoppeSmallTop>
                                <HOME.HomeShoppeSmallTopLeft>
                                    <h3>TÌM KIẾM HÀNG ĐẦU</h3>
                                </HOME.HomeShoppeSmallTopLeft>
                                <HOME.HomeShoppeSmallTopRight>
                                    <span>xem tất cả <FcNext/></span>
                                </HOME.HomeShoppeSmallTopRight>
                        </HOME.HomeShoppeSmallTop>
                        <HOME.HomeSearchList>
                                <HOME.HomeSearchTopItem>
                                    <img src={home_search_top_1} alt="" />
                                    <p>Kẹp tóc phụ kiện tóc</p>
                                </HOME.HomeSearchTopItem>
                                <HOME.HomeSearchTopItem>
                                    <img src={home_search_top_2} alt="" />
                                    <p>áo thun nam</p>
                                </HOME.HomeSearchTopItem>
                                <HOME.HomeSearchTopItem>
                                    <img src={home_search_top_3} alt="" />
                                    <p>quần short thể thao</p>
                                </HOME.HomeSearchTopItem>
                        </HOME.HomeSearchList>
                    </HOME.HomeSearchTop>
                    <HOME.HomeProduct>
                        <HOME.HomeShoppeSmallTop>
                                <HOME.HomeShoppeSmallTopLeft>
                                    <h3>Gợi ý hôm nay</h3>
                                </HOME.HomeShoppeSmallTopLeft>
                                <HOME.HomeShoppeSmallTopRight>
                                    <span>xem tất cả <FcNext/></span>
                                </HOME.HomeShoppeSmallTopRight>
                        </HOME.HomeShoppeSmallTop>
                        <HOME.HomeProductList>
                            
                        </HOME.HomeProductList>
                    </HOME.HomeProduct>
                </HOME.Container>
            </HOME.HomeBgF5F5F5>
         </div>
    )
}

export default Home
