import React, { useState } from "react";
import PropTypes from "prop-types";

import { HiLocationMarker } from "react-icons/hi";
import {
  Container,
  SectionContainer,
  AdressContainer,
  UserInformation,
  Decoration,
  Product,
  ProductInfo,
  ProductNameAndImg,
  PaymentMethod,
  MethodContainer,
  MethodDetail,
  PaymentDetail,
  Total,
  PaymentButton,
  ButtonContainer,
} from "./style";

const chosenStyled = {
  border: "1px solid #ee4d2d",
  color: "#ee4d2d",
  fontWeight: 600,
};

const Checkout = () => {
  const [method, setMethod] = useState("COD");

  const handleChosen = (e) => {
    e.preventDefault();
    setMethod(e.target.value);
  };

  console.log(method);

  return (
    <Container>
      <SectionContainer>
        <Decoration />
        <AdressContainer>
          <HiLocationMarker size="20" />
          <h2>Địa chỉ nhận hàng</h2>
        </AdressContainer>
        <UserInformation>
          <h3>Mai Xuan Nghia</h3>
          <h3>{"(+84) 977831551"}</h3>
          <span>84 Cao Xuan Duc, Hai Chau, Da Nang</span>
        </UserInformation>
      </SectionContainer>
      <SectionContainer>
        <Product>
          <h2>Sản phẩm</h2>
          <hr />
          <ProductInfo>
            <span>Đơn giá</span>
            <span>Số Lượng</span>
            <span>Thành tiền</span>
          </ProductInfo>
        </Product>
        <Product>
          <ProductNameAndImg>
            <img
              src="https://cf.shopee.vn/file/5d9ad43b692b660edd70bbff67bbda8e_tn"
              alt=""
            />
            <h3>Tên sản phẩm ở đây</h3>
          </ProductNameAndImg>
          <ProductInfo>
            <span>100.000</span>
            <span>1</span>
            <span>100.000</span>
          </ProductInfo>
        </Product>
      </SectionContainer>
      <SectionContainer>
        <MethodContainer>
          <h2>Phương Thức Thanh Toán</h2>
          <PaymentMethod
            value="COD"
            onClick={handleChosen}
            style={method === "COD" ? chosenStyled : null}
          >
            Thanh toán khi nhận hàng
          </PaymentMethod>
          <PaymentMethod
            value="Paypal"
            onClick={handleChosen}
            style={method === "Paypal" ? chosenStyled : null}
          >
            Thanh toán bằng Paypal
          </PaymentMethod>
        </MethodContainer>
        <hr />
        <MethodDetail>
          <h1>Thanh Toán khi nhận hàng</h1>
        </MethodDetail>
        <hr />
        <PaymentDetail>
          <div>
            <span>Tổng tiền hàng:</span>
            <span>100.000</span>
          </div>
          <div>
            <span>Phí vận chuyển:</span>
            <span>20.000</span>
          </div>
          <div>
            <span>Tổng tiền hàng:</span>
            <Total>120.000</Total>
          </div>
        </PaymentDetail>
        <hr />
        <ButtonContainer>
          <PaymentButton>Đặt hàng</PaymentButton>
        </ButtonContainer>
      </SectionContainer>
    </Container>
  );
};

Checkout.propTypes = {};

export default Checkout;
