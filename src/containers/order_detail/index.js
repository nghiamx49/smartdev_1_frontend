import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import { useHistory, useParams } from "react-router-dom";

import userService from "../../apiServices/userService";

import Error from "../../containers/page404/";

import { AiFillShop } from "react-icons/ai";
import ProfileSideBar from "../../components/slidebarOfProfile/";
import {
  Container,
  MainContent,
  UserInfoContainer,
  OrderDetailContainer,
  StoreContainer,
  HrCustom,
  ProductDetail,
  ProductName,
  Price,
  Table,
  Button,
} from "./style";
import { connect } from "react-redux";
const OrderDetail = ({ token }) => {
  const [orderDetail, setOrderDetail] = useState({});

  const [error, setError] = useState(false);

  const { getOrderDetail } = userService;

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    const getDetail = async () => {
      const response = await getOrderDetail(id, token);
      if (response.status === 200) {
        setOrderDetail(response.data);
      } else {
        setError(true);
      }
    };
    getDetail();
  }, [token, getOrderDetail, id]);

  const formartPhoneNumber = (phone_number) => {
    if (phone_number) {
      let splitDown = phone_number.split("");
      splitDown.splice(0, 1, "(+84) ");
      return splitDown.join("");
    }
  };

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <Container>
          <ProfileSideBar />
          <MainContent>
            <UserInfoContainer>
              <h2>Địa Chỉ nhận hàng</h2>
              <div>
                <h4>{orderDetail.user_full_name}</h4>
                <p>{formartPhoneNumber(orderDetail.phone_number)}</p>
                <p>{orderDetail.address}</p>
              </div>
            </UserInfoContainer>
            <HrCustom />
            <OrderDetailContainer
              onClick={() =>
                history.push(`/product-detail/${orderDetail.product_id}`)
              }
            >
              <StoreContainer>
                <AiFillShop />
                <b>{orderDetail.store_name}</b>
              </StoreContainer>
              <hr />
              <ProductDetail>
                <img src={orderDetail.image_source} alt="" />
                <ul>
                  <li>
                    <ProductName>{orderDetail.product_name}</ProductName>
                  </li>
                  <li>
                    <p>x{orderDetail.quantity_purchased}</p>
                  </li>
                </ul>
                <Price>
                  <span>
                    {(+orderDetail.unit_price).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </Price>
              </ProductDetail>
            </OrderDetailContainer>
            <HrCustom />
            <Table>
              <div>
                <b>Tổng tiền hàng:</b>
                <b>
                  {(
                    +orderDetail.unit_price * orderDetail.quantity_purchased
                  ).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </b>
              </div>
              <div>
                <b>Phí vận chuyển:</b>
                <b>
                  {(20000).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </b>
              </div>
              <div>
                <b>Phương thức thanh toán:</b>
                <b>{orderDetail.payment_method}</b>
              </div>
              <div>
                <b>Tổng tiền:</b>
                <b>
                  {(
                    +orderDetail.unit_price * orderDetail.quantity_purchased +
                    20000
                  ).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </b>
              </div>
            </Table>
            <Button>Mua Lại</Button>
          </MainContent>
        </Container>
      )}
    </>
  );
};

OrderDetail.propTypes = {
  token: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    token: state.authenticateReducer.token,
  };
};

export default connect(mapStateToProps)(OrderDetail);
