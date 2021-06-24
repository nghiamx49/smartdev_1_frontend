import {Header, 
    HeaderLink,
    HeaderTop,
    HeaderLinkBoder,
    HeaderUser,HeaderSearch,
    HeaderInput,HeaderUl,
    HeaderBottom,HeaderBottomCenterTop,HeaderBottomCenter,HeaderBottomRight,HeaderBottomLeft} from './style'
import imgLogo from "../../assests/img/logo.png"
import {Container} from "../../assests/common/stylecomon" 
import {BiCart} from "react-icons/bi"
import {BsBell,BsQuestionSquare} from "react-icons/bs"
import {Link} from "react-router-dom"
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
        <Header>
            <Container>
                <HeaderTop>
                    <div>
                        <HeaderLink>Kênh người bán</HeaderLink>
                        <HeaderLinkBoder>Tải ứng dụng</HeaderLinkBoder>
                        <HeaderLink>
                            Kết nối 
                        </HeaderLink>
                    </div>
                    <div>
                        <HeaderLink>
                            <BsBell/>
                            Thông báo 
                        </HeaderLink>
                        <HeaderLink>
                            <BsQuestionSquare/>
                            Hổ trợ 
                        </HeaderLink>
                        <HeaderUser>
                            <p>trang ho</p>
                            <div>
                                <Link to="profile">tài khoản của tôi</Link>
                                <Link to="orderhistory">Đơn mua</Link>
                                <Link to="">Đăng xuất</Link>
                            </div>
                        </HeaderUser>
                    </div>
                </HeaderTop>
               
                <HeaderBottom>
                    <HeaderBottomLeft>
                        <img src={imgLogo} alt=""/> 
                        <span>
                            Easiest
                        </span>
                    </HeaderBottomLeft>
                    <HeaderBottomCenter>
                        <HeaderBottomCenterTop>
                            <HeaderInput type="text"/>
                            <HeaderSearch>
                                search
                            </HeaderSearch>
                        </HeaderBottomCenterTop>
                        <div>
                            <HeaderUl>
                                {
                                    listTextHeaderBottom.map((item)=>(<li>{item}</li>))
                                }
                            </HeaderUl>
                        </div>
                    </HeaderBottomCenter>
                    <HeaderBottomRight>
                        <Link to="cart"><BiCart/></Link>
                        <div>
                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png" alt=""/>
                            <p>chưa có sản phẩm</p>
                        </div>
                    </HeaderBottomRight>
                </HeaderBottom>
            </Container>
            <div>
            </div>
        </Header>
    );
};
export default HeaderComponent;