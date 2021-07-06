import React, { useState } from 'react'
import SideBar from './component/sidebar'
import MainProvider from './component/maincontent' 


import {LayoutProvider} from "./style"
function Provider() {
    const [menu,setMenu] =  useState("User")
    const handleMenu = (value) =>{
        setMenu(value)
    }
    return (
        <LayoutProvider>
            <SideBar handleMenu={handleMenu}/>
            <MainProvider menu={menu}/>
        </LayoutProvider>
    )
}

export default Provider
