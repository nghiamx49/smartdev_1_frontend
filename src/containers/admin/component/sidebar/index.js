import React from 'react'
import logo from "../../../../assests/img/logo.png";
import {SideBarContainer,SideBarLogo,SideBarUl} from "./style"
import LinkSideBar from './components/LinkSideBar';
import {GrStackOverflow} from "react-icons/gr"
import {GiTicket,GiTeamIdea} from "react-icons/gi"
import {RiContactsBook2Fill} from "react-icons/ri"
import {MdViewAgenda,MdSubscriptions} from "react-icons/md"

const listLi = [
    {
        icons:GrStackOverflow,
        text:"Users"
    },
    {
        icons:GiTicket,
        text:"Providers"
    },
    {
        icons:GiTeamIdea,
        text:"ApproveProviders"
    },
    {
        icons:RiContactsBook2Fill,
        text:"Contacts"
    },
    {
        icons:MdViewAgenda,
        text:"Agents"
    },
    {
        icons:MdViewAgenda,
        text:"Settings"
    },
    {
        icons:MdSubscriptions,
        text:"Subscriptions"
    },
];
// sidebar cho admin
function SideBar(props) {
    const {handleMenu} = props
    return (
        <SideBarContainer>
            <SideBarLogo>
               <img src={logo} alt="" /> <p>Dashborad Admin</p>
            </SideBarLogo>
            <div>
                <SideBarUl>
                    {
                        listLi.map((item,index) => 
                        <LinkSideBar handleMenu={handleMenu}  key={index} Icons={item.icons} text={item.text}/>
                        )
                    }
                
                </SideBarUl>
            </div>
        </SideBarContainer>
    )
}

export default SideBar
