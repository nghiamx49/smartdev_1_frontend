import React from "react";
import { Link } from "react-router-dom";

import defaultAvt from "../../assests/img/user-default.png";
import { FcKindle } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import {
  SlidebarOfProfileTop,
  SlidebarProfile,
  SlidebarOfProfileBottom,
} from "./style";

function SlidebarOfProfile({ account }) {
  return (
    <SlidebarProfile>
      <SlidebarOfProfileTop>
        <div>
          <img src={account.avatar_source || defaultAvt} alt="avatar"></img>
        </div>
        <div>
          <h3>{account.username}</h3>
          <Link to="/profile">Chỉnh Sửa Hồ Sơ</Link>
        </div>
      </SlidebarOfProfileTop>
      <SlidebarOfProfileBottom>
        <ul>
          <li>
            <FcKindle />
            <Link to="/orderhistory">Đơn Mua</Link>
          </li>
          <li>
            <FaShoppingCart color="#FD5F32" />
            <Link to="/cart">Giỏ Hàng</Link>
          </li>
        </ul>
      </SlidebarOfProfileBottom>
    </SlidebarProfile>
  );
}

const mapStateToProps = (state) => {
  return {
    account: state.authenticateReducer.account,
  };
};

export default connect(mapStateToProps)(SlidebarOfProfile);
