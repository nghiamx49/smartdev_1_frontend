import React from "react";
import logo from "../../../../assests/img/logo.png";
import { SideBarContainer, SideBarLogo, SideBarUl } from "./style";
import LinkSideBar from "./components/LinkSideBar";
import { GrOverview } from "react-icons/gr";
import { ImUsers } from "react-icons/im";
import { FaUsers, FaMagento } from "react-icons/fa";
import {
  MdContacts,
  MdSettingsApplications,
  MdSubscriptions,
} from "react-icons/md";

const listLi = [
  {
    icons: GrOverview,
    text: "Products",
  },
  {
    icons: ImUsers,
    text: "Products sold",
  },
  {
    icons: FaUsers,
    text: "Products waiting request",
  },
  {
    icons: MdContacts,
    text: "Contacts",
  },
  {
    icons: FaMagento,
    text: "Agents",
  },
  {
    icons: MdSettingsApplications,
    text: "Settings",
  },
  {
    icons: MdSubscriptions,
    text: "Subscriptions",
  },
];
// sidebar cho admin
function SideBar(props) {
  return (
    <SideBarContainer>
      <SideBarLogo>
        <img src={logo} alt="" /> <p>Dashborad Provider</p>
      </SideBarLogo>
      <div>
        <SideBarUl>
          {listLi.map((item, index) => (
            <LinkSideBar key={index} Icons={item.icons} text={item.text} />
          ))}
        </SideBarUl>
      </div>
    </SideBarContainer>
  );
}

export default SideBar;
