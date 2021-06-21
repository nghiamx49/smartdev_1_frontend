import React from 'react'
import logo from "../../../../assests/img/logo.png";
import {SideBarContainer,SideBarLogo,SideBarUl} from "./style"
import LinkSideBar from './components/LinkSideBar';

const listLi = [
    {
        icons:"icon",
        text:"overview"
    },
    {
        icons:"icon",
        text:"Tickets"
    },
    {
        icons:"icon",
        text:"Ideas"
    },
    {
        icons:"icon",
        text:"Contacts"
    },
    {
        icons:"icon",
        text:"Agents"
    },
    {
        icons:"icon",
        text:"Settings"
    },
    {
        icons:"icon",
        text:"Subscriptions"
    },
];
// sidebar cho admin
function SideBar() {
    return (
        <SideBarContainer>
            <SideBarLogo>
               <img src={logo} alt="" /> <p>Dashborad Admin</p>
            </SideBarLogo>
            <div>
                <SideBarUl>
                    {
                        listLi.map((item,index) => 
                        <LinkSideBar icons={item.icons} text={item.text}/>
                        )
                    }
                
                </SideBarUl>
            </div>
        </SideBarContainer>
    )
}

export default SideBar
