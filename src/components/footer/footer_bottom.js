import React, { Component } from "react";
import {FooterBottom, Footer_bottom
} from "./style";

function footer_bottom() {
    return (
        <div>  
            <div>
            <FooterBottom>
            {/* <hr></hr> */}
                <div>
                   <p> @2021 Shopee. Tất cả các quyền được bảo lưu.</p>
                </div>
                <div>
                    <ul>
                        <li>Quốc gia & Khu vực:</li>
                        <li><a href="#"> Việt Nam | </a></li>
                        <li><a href=""> Indonesia | </a></li>
                        <li><a href=""> Đài Loan | </a></li>
                        <li><a href=""> Thái Lan | </a></li>
                        <li><a href=""> Malaysia | </a></li>
                        <li><a href=""> Singapore | </a></li>
                        <li><a href=""> Chile | </a></li>
                        <li><a href=""> Philipine | </a></li>
                        <li><a href=""> Brazil | </a></li>
                        <li><a href=""> Colombia</a></li>                    </ul>
                </div>
                </FooterBottom>
                <Footer_bottom>
                <div>
                    <p>Công ty TNHH Shopee</p>
                    <p>Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai, phường Cống Vị, Quận Ba Đình, Hà Nội. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</p>
                    <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</p>
                    <p>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015 </p>
                    <p> 2015 - Bản quyền thuộc về Công ty TNHH Shopee </p>
                </div>
                </Footer_bottom>
            </div> 
        </div>
    );
}

export default footer_bottom;