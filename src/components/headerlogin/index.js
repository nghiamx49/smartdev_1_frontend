import React from 'react'
import { HeaderLoginContainer } from "./style"
import { useLocation } from 'react-router-dom'

function HeaderLogin() {
    const location = useLocation();
    console.log(location.pathname);

    const renderTitleHeader = () => {
        switch (location.pathname) {
            case '/login': return <h3>Đăng nhập </h3>
            case '/register/user': return <h3>Đăng ký</h3>
            case '/register/provider': return <h3>Đăng ký</h3>
            case '/forgotpassword': return <h3>Đặt lại mật khẩu</h3>
            case '/verify_otp': return <h3>Đặt lại mật khẩu</h3>
            default: return <h3>Đặt lại mật khẩu</h3>
        }
    }
    return (
        <HeaderLoginContainer>
            {
                renderTitleHeader()
            }
            <p>cần trợ giúp</p>
        </HeaderLoginContainer>
    )
}

export default HeaderLogin
