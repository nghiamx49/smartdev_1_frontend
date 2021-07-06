import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import imgUserDefault from '../../assests/img/user-default.png'
import SlidebarOfProfile from '../../components/slidebarOfProfile'
import * as UP from './style'
const UserProfile = (props) => {
    const [User, setUser] = useState({})
    const token = {
        token : props.token
    }
    useEffect(() => {
        try{
            axios.get(`${process.env.REACT_APP_API}/user/profile`, token).then(reponse => console.log(reponse))
        }
        catch(e){
            console.log(e);
        }
        

    }, [])
    return (
            <UP.Layout>
                <UP.Container>
                    <SlidebarOfProfile />
                    <UP.Main>
                        <UP.ProfileTop>
                            <UP.ProfileTilte>Hồ sơ của tôi </UP.ProfileTilte>
                            <UP.ProfileDescribe>Quản lý thông tin hồ sơ để bảo mật tài khoản</UP.ProfileDescribe>
                        </UP.ProfileTop>
                        <UP.ProfileBottom>
                            <UP.ProfileBottomLeft>
                                <form>
                                    <UP.ProfileFormRow>
                                        <UP.ProfileFormName>Tên đăng nhập:</UP.ProfileFormName>
                                        <p>thuytrang123</p>
                                    </UP.ProfileFormRow>
                                    <UP.ProfileFormRow>
                                        <UP.ProfileFormName>Tên:</UP.ProfileFormName>
                                        <UP.ProfileInput type="text" />
                                    </UP.ProfileFormRow>
                                    <UP.ProfileFormRow>
                                        <UP.ProfileFormName>Email:</UP.ProfileFormName>
                                        <UP.ProfileInput type="text" />
                                    </UP.ProfileFormRow>

                                    <UP.ProfileFormRow>
                                        <UP.ProfileFormName>Số điện thoại :</UP.ProfileFormName>
                                        <UP.ProfileInput type="text" />
                                    </UP.ProfileFormRow>
                                    <UP.ProfileFormRow>
                                        <UP.ProfileFormName>Giới tính :</UP.ProfileFormName>
                                        <UP.ProfileRadio><input type="radio" name="gender" /><span>Nam</span> </UP.ProfileRadio>
                                        <UP.ProfileRadio><input type="radio" name="gender" /><span>Nữ</span></UP.ProfileRadio>
                                        <UP.ProfileRadio><input type="radio" name="gender" /><span>Khác</span></UP.ProfileRadio>
                                    </UP.ProfileFormRow>
                                    <UP.ProfileFormRow>
                                        <UP.ProfileFormName>Ngày sinh:</UP.ProfileFormName>
                                        <UP.ProfileInput type="date" />
                                    </UP.ProfileFormRow>
                                    <UP.ProfileFormRow>
                                        <UP.ProfileFormName></UP.ProfileFormName>
                                        <UP.ProfileButton type="button" value="Lưu" />
                                    </UP.ProfileFormRow>
                                </form>
                            </UP.ProfileBottomLeft>
                            <UP.ProfileBottomRight>
                                <UP.ProfileAvata src={imgUserDefault} alt="" />
                                <label htmlFor="avatar">Chọn ảnh</label>
                                <input type="file" name="avatar" id="avatar" accept="image/*"/>
                                <p>Dụng lượng file tối đa 1 MB </p>
                                <p>Định dạng:.JPEG, .PNG</p>
                            </UP.ProfileBottomRight>

                        </UP.ProfileBottom>

                    </UP.Main>
                </UP.Container>
            </UP.Layout>
    )
}

const mapStateToProp = state =>{
    return {
        token: state.authenticateReducer.token
    }
}


export default connect(mapStateToProp, )(UserProfile)