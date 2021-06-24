import React from 'react'
import { FcBusinessman,FcKindle,FcAdvertising,FcStackOfPhotos ,FcStumbleupon} from "react-icons/fc";
import {SlidebarOfProfileTop, SlidebarProfile , SlidebarOfProfileBottom} from './style'

function SlidebarOfProfile() {
    return (
        <SlidebarProfile>
            <SlidebarOfProfileTop>
                <div>
                    <img src='https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/167787581_2635205683445026_6402980238198222783_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lE9yztxRc08AX-n7G0i&_nc_ht=scontent-hkt1-2.xx&oh=67245e36ffff6b294c6882d2e33ef89a&oe=60D6D37E' alt=""></img>
                </div>
                <div>
                    <h3>Ho Thuy Trang</h3>
                    <a href="abc">Chỉnh Sửa Hồ Sơ</a>
                </div>
                
            </SlidebarOfProfileTop>
            <SlidebarOfProfileBottom>
                <ul>
                    <li><FcBusinessman/> <span>Tai Khoan Cua Toi</span></li>
                    <li><FcKindle/><span> Don Mua</span></li>
                    <li><FcAdvertising/><span> Thông Báo</span></li>
                    <li><FcStackOfPhotos /><span> Kho Voucher</span></li>
                    <li><FcStumbleupon/><span> Easiest Xu</span></li>
                </ul>
            </SlidebarOfProfileBottom>
        </SlidebarProfile>
    )
}

export default SlidebarOfProfile
