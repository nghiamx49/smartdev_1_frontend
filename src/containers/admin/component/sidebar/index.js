import React from "react";
import logo from "../../../../assests/img/logo.png";
import { SideBarContainer, SideBarLogo, SideBarUl } from "./style";
import LinkSideBar from "./components/LinkSideBar";
import { GrOverview } from "react-icons/gr";
import { ImUsers } from "react-icons/im";
import { FaUsers, FaMagento } from "react-icons/fa";
import {MdContacts,  MdSettingsApplications,  MdSubscriptions,} from "react-icons/md";

const listLi = [
    {
        icons:GrOverview,
        text:"Approveproviders"
    },
    {
        icons:FaUsers,
        text:"Providers"
    },
    {
        icons:ImUsers,
        text:"Users"
    },
   
    {
        icons:MdContacts,
        text:"Products"
    },
    {
        icons:FaMagento,
        text:"NewProduct"
    },
    {
        icons:MdSettingsApplications,
        text:"ProductReject"
    },
    {
        icons:MdSubscriptions,
        text:"Subscriptions"
    },
    
];
// sidebar cho admin
function SideBar(props) {
    const {handle} = props
    return (
        <SideBarContainer>
            <SideBarLogo>
               <img src={logo} alt="" /> <p>Dashborad Admin</p>
            </SideBarLogo>
            <div>
                <SideBarUl>
                   {
                        listLi.map((item,index) => 
                        <LinkSideBar handle={handle} key={index} Icons={item.icons} text={item.text}/>
                        )
                    }
                </SideBarUl>
            </div>
        </SideBarContainer>
    )
}

export default SideBar;
