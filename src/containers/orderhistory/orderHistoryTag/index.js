import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import {
  BottomLeft,
  Container,
  MiddleLeft,
  MiddleRight,
  OrderHistoryTagBottom,
  ListItemContainer,
  CustomButton,
  CustomHr,
  StoreContainer,
  CustomImg,
  Detail,
  CustomProductName,
  TotalContainer,
} from "./style";
import PropTypes from "prop-types";

OrderHistoryTag.propTypes = {
  orderHistory: PropTypes.shape({
    store_name: PropTypes.string,
    product_name: PropTypes.string,
    image_source: PropTypes.string,
    quantity_purchased: PropTypes.number,
    unit_price: PropTypes.string,
    product_id: PropTypes.number,
  }),
};

export default function OrderHistoryTag(props) {
  const { orderHistory } = props;
  return (
    <Container>
      <StoreContainer>
        <AiOutlineShop />
        <span>{orderHistory.store_name}</span>
      </StoreContainer>

      <CustomHr />
      <ListItemContainer>
        <MiddleLeft>
          <div>
            <CustomImg src={orderHistory.image_source} alt="" />
          </div>
          <Detail>
            <ul>
              <li>
                <CustomProductName>
                  {orderHistory.product_name}
                </CustomProductName>
              </li>
              <li>
                <span>x{orderHistory.quantity_purchased}</span>
              </li>
            </ul>
          </Detail>
        </MiddleLeft>
        <MiddleRight>
          <span>
            {(+orderHistory.unit_price).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </MiddleRight>
      </ListItemContainer>
      <CustomHr />
      <OrderHistoryTagBottom>
        <TotalContainer>
          <h3 style={{ color: "#d73211" }}>
            {(
              +orderHistory.unit_price * orderHistory.quantity_purchased
            ).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </h3>
          <label style={{ paddingRight: "10px" }}>Tông tiền: </label>{" "}
        </TotalContainer>
        <BottomLeft>
          <CustomButton>Mua Lần Nữa</CustomButton>
        </BottomLeft>
      </OrderHistoryTagBottom>
    </Container>
  );
}
