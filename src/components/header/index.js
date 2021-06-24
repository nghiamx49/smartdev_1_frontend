import {Header, 
    HeaderLink,
    HeaderTop,
    HeaderLinkBoder,
    HeaderUser,HeaderSearch,
    HeaderInput,HeaderUl,
    HeaderBottom,HeaderBottomCenterTop,HeaderBottomCenter,HeaderBottomRight,HeaderBottomLeft} from './style'
import imgLogo from "../../assests/img/logo.png"
import {Container} from "../../assests/common/stylecomon" 
import HeaderCart from "./HeaderCart"
import {BiCart} from "react-icons/bi"

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
                            Thông báo 
                        </HeaderLink>
                        <HeaderLink>
                            Hổ trợ 
                        </HeaderLink>
                        <HeaderUser>
                            trang ho
                        </HeaderUser>
                    </div>
                </HeaderTop>
               
                <HeaderBottom>
                    <HeaderBottomLeft>
                        <img src={imgLogo} alt=""/>
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
                        <span>cart</span>
                        <BiCart/>
                    </HeaderBottomRight>
                </HeaderBottom>
            </Container>
            <div>
            </div>
        </Header>
    );
};
export default HeaderComponent;