import * as HEADER from './style'
import imgLogo from "../../assests/img/logo.png"
import {Container} from "../../assests/common/stylecomon" 
import {BiCart} from "react-icons/bi"
import {BsBell,BsQuestionSquare} from "react-icons/bs"
import {Link} from "react-router-dom"
import {FaFacebook,FaInstagramSquare} from "react-icons/fa"
import {FiSearch} from "react-icons/fi"
const listTextHeaderBottom = [
    'Guốc xỏ ngón',
    'istore hcm',
    'Note 20 Utra 5g',
    'Cường lực chống vân tay',
    'Ruột gối',
    'giày kiểu',
    'Khăn đa năng'
]


const HeaderComponent = props => {
    return (
        <HEADER.Header>
            <Container>
                <HEADER.HeaderTop>
                    <HEADER.HeaderTopLeft>
                        <HEADER.HeaderLink>Kênh người bán</HEADER.HeaderLink>
                        <HEADER.HeaderLink>Tải ứng dụng</HEADER.HeaderLink>
                        <HEADER.HeaderLink> Kết nối </HEADER.HeaderLink>
                        <HEADER.HeaderLink>
                            <FaFacebook/>  
                            <FaInstagramSquare/>  
                        </HEADER.HeaderLink>
                    </HEADER.HeaderTopLeft>
                    <HEADER.HeaderTopRight>
                        <HEADER.HeaderLink>
                            <BsBell/>
                            Thông báo 
                        </HEADER.HeaderLink>
                        <HEADER.HeaderLink>
                            <BsQuestionSquare/>
                            Hổ trợ 
                        </HEADER.HeaderLink>
                        <HEADER.HeaderUser>
                            <img  src="https://cf.shopee.vn/file/fc22e9d2391995025c3c0e24b879288c_tn" alt=""/>
                            <p>trang ho</p>
                            <div>
                                <Link to="profile">tài khoản của tôi</Link>
                                <Link to="orderhistory">Đơn mua</Link>
                                <Link to="">Đăng xuất</Link>
                            </div>
                        </HEADER.HeaderUser>
                    </HEADER.HeaderTopRight>
                </HEADER.HeaderTop>
               
                <HEADER.HeaderBottom>
                    <HEADER.HeaderBottomLeft>
                        <img src={imgLogo} alt=""/> 
                        <span>
                           Shop Easiest
                        </span>
                    </HEADER.HeaderBottomLeft>
                    <HEADER.HeaderBottomCenter>
                        <HEADER.HeaderBottomCenterTop>
                            <HEADER.HeaderInput type="text"/>
                            <HEADER.HeaderSearch>
                                <FiSearch/>
                            </HEADER.HeaderSearch>
                        </HEADER.HeaderBottomCenterTop>
                        <div>
                            <HEADER.HeaderUl>
                                {
                                    listTextHeaderBottom.map((item)=>(<li>{item}</li>))
                                }
                            </HEADER.HeaderUl>
                        </div>
                    </HEADER.HeaderBottomCenter>
                    <HEADER.HeaderBottomRight>
                        <Link to="cart"><BiCart/></Link>
                        <div>
                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png" alt=""/>
                            <p>chưa có sản phẩm</p>
                        </div>
                    </HEADER.HeaderBottomRight>
                </HEADER.HeaderBottom>
            </Container>
            <div>
            </div>
        </HEADER.Header>
    );
};
export default HeaderComponent;