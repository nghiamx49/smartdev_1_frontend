import React, { useState } from 'react'
import {LayoutAdmin} from "./style"
import SideBar from './component/sidebar'
import MainAdmin from './component/maincontent/' 

function Admin() {
    const [menu,setMenu] =  useState("")
    const handle = (value) =>{
        setMenu(value)
    }
    return (
        <LayoutAdmin>
            <SideBar handle={handle}/>
            <MainAdmin menu={menu}/>
        </LayoutAdmin>
    )
}

export default Admin
