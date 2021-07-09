import React from "react";

import { LeftBottom, RightBottom, Total, TotalCartBottom } from "./style";

export default function TotalCart(props) {
  const { count, totalMoney } = props;
  return (
    <Total>
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
