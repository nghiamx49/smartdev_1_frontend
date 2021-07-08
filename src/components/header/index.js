import * as HEADER from "./style";
import imgLogo from "../../assests/img/logo.png";
import { Container } from "../../assests/common/stylecomon";
import { BiCart } from "react-icons/bi";
import { BsBell, BsQuestionSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { connect } from "react-redux";

import { submitLogout } from "../../actions/authenticateAction";

import userDefault from "../../assests/img/user-default.png";

const listTextHeaderBottom = [
  "Guốc xỏ ngón",
  "istore hcm",
  "Note 20 Utra 5g",
  "Cường lực chống vân tay",
  "Ruột gối",
  "giày kiểu",
  "Khăn đa năng",
];

const HeaderComponent = ({ authenticateReducer, logout }) => {
  return (
    <HEADER.Header>
      <Container>
        <HEADER.HeaderTop>
          <HEADER.HeaderTopLeft>
            <HEADER.HeaderLink to="">Kênh người bán</HEADER.HeaderLink>
            <HEADER.HeaderLink to="">Tải ứng dụng</HEADER.HeaderLink>
            <HEADER.HeaderLink to=""> Kết nối </HEADER.HeaderLink>
            <HEADER.HeaderLink to="">
              <FaFacebook />
              <FaInstagramSquare />
            </HEADER.HeaderLink>
          </HEADER.HeaderTopLeft>
          <HEADER.HeaderTopRight>
            <HEADER.HeaderLink to="">
              <BsBell />
              Thông báo
            </HEADER.HeaderLink>
            <HEADER.HeaderLink to="">
              <BsQuestionSquare />
              Hổ trợ
            </HEADER.HeaderLink>
            {authenticateReducer.isLoggedIn ? (
              <HEADER.HeaderUser>
                <img
                  src={authenticateReducer.account.avatar_source || userDefault}
                  alt=""
                />
                <p>{authenticateReducer.account.username}</p>
                <div>
                  <Link to="profile">tài khoản của tôi</Link>
                  <Link to="orderhistory">Đơn mua</Link>
                  <Link to="" onClick={() => logout()}>
                    Đăng xuất
                  </Link>
                </div>
              </HEADER.HeaderUser>
            ) : (
              <HEADER.HeaderLink to="/login">Đăng nhập</HEADER.HeaderLink>
            )}
          </HEADER.HeaderTopRight>
        </HEADER.HeaderTop>

        <HEADER.HeaderBottom>
          <HEADER.HeaderBottomLeft>
            <Link to="/">
            <img src={imgLogo} alt="" />
            <span>Shop Easiest</span>
            </Link>
          </HEADER.HeaderBottomLeft>
          <HEADER.HeaderBottomCenter>
            <HEADER.HeaderBottomCenterTop>
              <HEADER.HeaderInput type="text" />
              <HEADER.HeaderSearch>
                <FiSearch />
              </HEADER.HeaderSearch>
            </HEADER.HeaderBottomCenterTop>
            <div>
              <HEADER.HeaderUl>
                {listTextHeaderBottom.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </HEADER.HeaderUl>
            </div>
          </HEADER.HeaderBottomCenter>
          <HEADER.HeaderBottomRight>
            {authenticateReducer.isLoggedIn && (
              <>
                <Link to="cart">
                  <BiCart />
                </Link>
              </>
            )}
          </HEADER.HeaderBottomRight>
        </HEADER.HeaderBottom>
      </Container>
      <div></div>
    </HEADER.Header>
  );
};

const mapStateToProps = (state) => {
  const { authenticateReducer } = state;
  return { authenticateReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(submitLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
