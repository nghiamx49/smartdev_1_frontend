import React from 'react'
import {HeaderLoginContainer} from "./style"
import { useLocation } from 'react-router-dom'

function HeaderLogin() {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <HeaderLoginContainer>
            {
                location.pathname === '/login' ? 
                <h3>Đăng nhập</h3>:
                <h3>register</h3>
            }
            <p>cần trợ giúp</p>
        </HeaderLoginContainer>
    )
}

export default HeaderLogin
