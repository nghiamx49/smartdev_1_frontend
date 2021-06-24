import React, { useState } from 'react'
import {LayoutAdmin} from "./style"
import SideBar from './component/sidebar'
import MainAdmin from './component/maincontent/' 

function Admin() {
    const [menu,setMenu] =  useState("User")
    const handleMenu = (value) =>{
        setMenu(value)
    }
    return (
        <LayoutAdmin>
            <SideBar handleMenu={handleMenu}/>
            <MainAdmin menu={menu}/>
        </LayoutAdmin>
    )
}

export default Admin
