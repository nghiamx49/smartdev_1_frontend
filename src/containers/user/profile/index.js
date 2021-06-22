import React from 'react'

import HeaderComponent from './../../../components/header'
import imgUserDefault from '../../../assests/img/user-default.png'
import * as UP from './style'
const UserProfile = () => {
    return (
        <UP.UserProfile>
            <div>Hồ sơ của tôi </div>
            <div>
                <div>
                    <div>
                        <p>Tên đăng nhập:</p>
                        <p>thuytrang123</p>
                    </div>
                    <div>
                        <p>Tên:</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Email:</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Số điện thoại :</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Giới tính :</p>
                        <span><span>Nam</span> <input type="radio" value="Nam" /></span>
                        <span><span>Nữ</span> <input type="radio" value="Nữ" /></span>
                        <span><span>Khác</span> <input type="radio" value="Khác" /></span>
                    </div>
                    <div>
                        <p>Ngày sinh:</p>
                        <input type ="date"/>
                    </div>
                    <input type="button" value="Lưu"/>
                </div>
                <div>
                    <img src={imgUserDefault}/>
                    <input type="button" value="Chọn ảnh"/>
                </div>

            </div>
        </UP.UserProfile>
    )
}

export default UserProfile