import React from 'react'
import {LayoutAdmin} from "./style"
import SideBar from './component/sidebar'
import MainAdmin from './component/maincontent/' 
import Approve from './component/approvecontent'

function Admin() {
    return (
        <LayoutAdmin>
            <SideBar/>
            {/* <MainAdmin/> */}
            <Approve></Approve>
        </LayoutAdmin>
    )
}

export default Admin
