import React from 'react'
import home_img_1 from "../../assests/img/home-img-4.jpg"
import home_img_2 from "../../assests/img/home-img-1.png"
import home_img_3 from "../../assests/img/home-img-2.png"
import home_img_4 from "../../assests/img/home-img-3.png"
import home_shipper_1 from "../../assests/img/home-shipper-1.png"
import home_shipper_2 from "../../assests/img/home-shipper-2.png"
import home_shipper_3 from "../../assests/img/home-shipper-3.png"
import home_shipper_4 from "../../assests/img/home-shipper-4.png"
import home_shipper_5 from "../../assests/img/home-shipper-5.png"
import home_shipper_6 from "../../assests/img/home-shipper-6.png"
import home_shipper_7 from "../../assests/img/home-shipper-7.png"
import home_shipper_8 from "../../assests/img/home-shipper-8.png"
import home_shipper_9 from "../../assests/img/home-shipper-9.png"
import home_shipper_10 from "../../assests/img/home-shipper-10.png"
import home_search_top_1 from "../../assests/img/searchtop-1.JPG"
import home_search_top_2 from "../../assests/img/searchtop-2.JPG"
import home_search_top_3 from "../../assests/img/searchtop-3.JPG"
import * as HOME from "./style"
import {FcSynchronize,FcStumbleupon,FcShipped,FcNext} from "react-icons/fc"

const listEndow = [
    {
        img:home_shipper_1,
        text:"shoppe số gì dây"
    },
    {
        img:home_shipper_2,
        text:"techzone - siêu thị điện tử "
    },
    {
        img:home_shipper_3,
        text:"gi cũng rẻ - từ 1k"
    },
    {
        img:home_shipper_4,
        text:"hoàn xu 15% mỗi ngày"
    },
    {
        img:home_shipper_5,
        text:"freeship xtra"
    },
    {
        img:home_shipper_6,
        text:"nạp thẻ dịch vụ - phim "
    },
    {
        img:home_shipper_7,
        text:"hang hiệu trừ -50%"
    },
    {
        img:home_shipper_8,
        text:"hàng quốc tế - thương hiệu"
    },
    {
        img:home_shipper_9,
        text:"shoppe premium"
    },
    {
        img:home_shipper_10,
        text:"ở nhà không khó"
    },
]
const listCategory = [
    {
        img:"https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
        text:"thời trang nam"
    },
    {
        img:"https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
        text:"điện thoại & phụ kiện"
    },
    {
        img:"https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
        text:"thiết bị điện tử"
    },
    {
        img:"https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
        text:"Máy tính & laptop"
    },
    {
        img:"https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
        text:"Máy ảnh & máy quay phim"
    },
    {
        img:"https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn",
        text:"đồng hồ"
    },
    {
        img:"https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
        text:"giày dép nam"
    },
    {
        img:"https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn",
        text:"thiết bị điện gia dụng"
    },
    {
        img:"https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn",
        text:"thể thao & du lịch"
    },
    {
        img:"https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn",
        text:"ô tô & xe máy & xe đạp"
    },
    {
        img:"https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
        text:"thời trang nữ"
    },
    {
        img:"https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn",
        text:"mẹ và bé"
    },
    {
        img:"https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn",
        text:"nhà cửa và đời sống"
    },
    {
        img:"https://cf.shopee.vn/file/c765998fda99b2be9eb6e348df29af28_tn",
        text:"Sắc đẹp"
    },
    {
        img:"https://cf.shopee.vn/file/bf87b50b463f646bb7fb8a1a606d9ed2_tn",
        text:"sức khỏe"
    },
    {
        img:"https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn",
        text:"giày dép nữ"
    },
    {
        img:"https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn",
        text:"túi ví nữ"
    },
    {
        img:"https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn",
        text:"phụ kiện & trang sức nữ"
    },
    {
        img:"https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn",
        text:"bách hóa online"
    },
    {
        img:"https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn",
        text:"nhà sách online"
    },
]
const listFlashSale = [
    {
        img:"https://cf.shopee.vn/file/b74c0db431bd7a36a8ba5064858b0b9b_tn",
        text:"116.000"
    },
    {
        img:"https://cf.shopee.vn/file/ba46b6f52a37269ed12a8a1399219e2e_tn",
        text:"126.000"
    },
    {
        img:"https://cf.shopee.vn/file/44535a72ac6eb798fb39aa33dcb611d0_tn",
        text:"316.000"
    },
    {
        img:"https://cf.shopee.vn/file/88ce49f85298a58ceb4d7af2acb4cc2e_tn",
        text:"516.000"
    },
    {
        img:"https://cf.shopee.vn/file/622bb4a8f6840ac4a2eaca5eccdd22fd_tn",
        text:"156.000"
    },{
        img:"https://cf.shopee.vn/file/b74c0db431bd7a36a8ba5064858b0b9b_tn",
        text:"716.000"
    },
];
const listShpeeSmall = [
    {
        img:"https://cf.shopee.vn/file/b5d02dd04dcb76202b3d46d71be17094_xhdpi",
        text:"độc quyền tại ..."
    },
    {
        img:"https://cf.shopee.vn/file/eb52c4f748e738a00b51aca5d6e90640_xhdpi",
        text:"mua 1 tặng 4"
    },
    {
        img:"https://cf.shopee.vn/file/0661b3684960315a0606db37af5bf8cd_xhdpi",
        text:"ưu đãi đến 40%"
    },
    {
        img:"https://cf.shopee.vn/file/f25933cb941d1cae14479623a0980f7a_xhdpi",
        text:"tóc đẹp chuẩn salon"
    },
    {
        img:"https://cf.shopee.vn/file/45e87e6906ea7737e23b26a92293265d_xhdpi",
        text:"ưu đãi đến 30%"
    },
    {
        img:"https://cf.shopee.vn/file/de21e3a0a2927af9c15b0c9ccb9e48f1_xhdpi",
        text:"deal sốc từ 19k"
    },
    {
        img:"https://cf.shopee.vn/file/616257fe44a6732cc4b3be5ce8c566a7_xhdpi",
        text:"mua 1 tặng 1"
    },
    {
        img:"https://cf.shopee.vn/file/61d58d7392c6eb0ce0534ebf7c900750_xhdpi",
        text:"da khỏe sạch mụn"
    },
]
const listSearch = [
    {
        textTop:"tai nghe Blu...",
        textBottom:"172k+ sản phẩm",
        img:"https://cf.shopee.vn/file/ffe25b50c0edef17c49bfdf868b4facc"
    },
    {
        textTop:"sandal nữ",
        textBottom:"334k+ sản phẩm",
        img:"https://cf.shopee.vn/file/ce40df60e1033e7bfbe01389fd1773ae"
    },
    {
        textTop:"Croptop nữ",
        textBottom:"250k+ sản phẩm",
        img:"https://cf.shopee.vn/file/45afa271dcbbb68547d51a9f01b995be"
    },
    {
        textTop:"áo-phông nữ",
        textBottom:"172k+ sản phẩm",
        img:"https://cf.shopee.vn/file/0630a9e10123aec153e1fd5c92091ca8"
    },
    {
        textTop:"giày thể th...",
        textBottom:"8k+ sản phẩm",
        img:"https://cf.shopee.vn/file/876e49c18eba6835df035907446afa53"
    },
]
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
                        listEndow.map((item) => (<div>
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
                               listCategory.map(item => (
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
                               listFlashSale.map(item => (
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
                                  listShpeeSmall.map(item=>(
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
                               listSearch.map(item=>(
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
                </HOME.Container>
            </HOME.HomeBgF5F5F5>
         </div>
    )
}

export default Home
