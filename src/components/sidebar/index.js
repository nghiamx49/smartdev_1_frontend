import React from "react";
import logo from "../../assests/img/logo.png";
import { SideBarContainer, SideBarLogo, SideBarUl } from "./style";
import LinkSideBar from "./components/LinkSideBar";
import {listLi} from "./contant"
import { connect } from "react-redux";
// sidebar cho admin
function SideBar({authenticateReducer}) {
  const { account } = authenticateReducer;
  return (
    <SideBarContainer>
      <SideBarLogo>
        <img src={logo} alt="" /> <p>Dashborad Provider</p>
      </SideBarLogo>
      <div>
        <SideBarUl>
          {account.role === "provider" && listLi.map((item, index) => (
            <LinkSideBar key={index} Icons={item.icons} text={item.text} link={item.link} />
          ))}
        </SideBarUl>
      </div>
    </SideBarContainer>
  );
}

const mapStateToProps = (state) => {
  const { authenticateReducer } = state;
  return { authenticateReducer: authenticateReducer };
};

export default connect(mapStateToProps)(SideBar);

