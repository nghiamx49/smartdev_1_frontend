import React from "react";
import { HiOutlineBookmark } from "react-icons/hi";

import {
  LeftBottom,
  Right,
  RightBottom,
  RightMid,
  Total,
  TotalCartBottom,
  TotalCartMid,
  TotalCartTop,
} from "./style";

export default function TotalCart(props) {
  const { count, totalMoney } = props;
  return (
    <Total>
      <TotalCartTop>
        <Right>
          <div>
            <span>
              <HiOutlineBookmark style={{ color: "green" }} /> Easiest Voucher
            </span>
          </div>
          <div>
            <span>Chọn Hoặc Nhập Mã</span>
          </div>
        </Right>
      </TotalCartTop>
      <TotalCartMid>
        <RightMid>
          <div>
            <span> Bạn Chưa Có Easiest Xu</span>
          </div>
          <div>
            <span>Trừ ₫0</span>
          </div>
        </RightMid>
      </TotalCartMid>
      <TotalCartBottom>
        <LeftBottom></LeftBottom>
        <RightBottom>
          <div>
            <span>Tổng thanh toán ({count} Sản phẩm):</span>{" "}
          </div>
          <h3>₫{totalMoney}</h3>
          <div>
            <button>Mua Hàng</button>
          </div>
        </RightBottom>
      </TotalCartBottom>
    </Total>
  );
}
