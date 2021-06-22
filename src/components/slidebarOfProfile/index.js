import React from 'react'

import {SlidebarOfProfileTop, SlidebarProfile , SlidebarOfProfileBottom} from './style'

function SlidebarOfProfile() {
    return (
        <SlidebarProfile>
            <SlidebarOfProfileTop>
                <div>
                    <img src='https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/167787581_2635205683445026_6402980238198222783_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lE9yztxRc08AX-n7G0i&_nc_ht=scontent-hkt1-2.xx&oh=67245e36ffff6b294c6882d2e33ef89a&oe=60D6D37E'></img>
                </div>
                <div>
                    <ul>
                        <li>Ho Thuy Trang</li>
                        <li><a href="abc">Chỉnh Sửa Hồ Sơ</a></li>
                    </ul>
                </div>
                
            </SlidebarOfProfileTop>
            <SlidebarOfProfileBottom>
                <ul>
                    <li><span> icon </span>Tai Khoan Cua Toi</li>
                    <li><span> icon </span>Don Mua</li>
                    <li><span> icon </span>Thong Bao</li>
                    <li><span> icon </span>Kho Voucher</li>
                    <li><span> icon </span>Easiest Xu</li>
                </ul>
            </SlidebarOfProfileBottom>

        </SlidebarProfile>
    )
}

export default SlidebarOfProfile
