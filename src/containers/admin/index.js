import React from 'react'
import {LayoutAdmin} from "./style"
import SideBar from './component/sidebar'
import MainAdmin from './component/maincontent/' 

function Admin() {
    return (
        <LayoutAdmin>
            <SideBar/>
            <MainAdmin/>
        </LayoutAdmin>
    )
}

export default Admin
