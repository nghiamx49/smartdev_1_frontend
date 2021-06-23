import React from 'react'
import { LayoutOrderHistory, Container, MainHistory, OrderHistoryTop, OrderHistoryTopLink, Search } from './style'
import SlidebarOfProfile from '../../components/slidebarOfProfile'
import OrderHistoryTag from './orderHistoryTag'

export default function OrderHistory() {
  const orderHistorys = [{
    shop_Name: "Shop thời trang hover",
    productName: "Áo hai Dây tay dài cổ rộng",
    linkimage: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    num: 2,
    price: 100,
    total: 200,
  }, {
    shop_Name: "abc",
    productName: "Áo hai Dây",
    linkimage: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    num: 2,
    price: 100,
    total: 200,
  }, {
    shop_Name: "abc",
    productName: "Áo hai Dây",
    linkimage: "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    num: 2,
    price: 100,
    total: 200,
  }]
  return (
      <LayoutOrderHistory>
        <Container>
          <SlidebarOfProfile>
          </SlidebarOfProfile>
          <MainHistory>
            <OrderHistoryTop>
              < OrderHistoryTopLink> Tất Cả</ OrderHistoryTopLink>
              < OrderHistoryTopLink> Chờ Xác Nhận</ OrderHistoryTopLink>
              < OrderHistoryTopLink> Chờ Lấy Hàng</ OrderHistoryTopLink>
              < OrderHistoryTopLink> Đang giao</ OrderHistoryTopLink>
              < OrderHistoryTopLink> Đã giao</ OrderHistoryTopLink>
              < OrderHistoryTopLink> Đã Hủy</ OrderHistoryTopLink>
            </OrderHistoryTop>
            <Search>
              <input placeholder="Tìm kiếm theo shop, ID đơn Hàng hoặc Tên Sẳn Phẩm"></input>
              <button>Search</button>
            </Search>
            {
              orderHistorys.map((orderHistory) => (
                <OrderHistoryTag orderHistory={orderHistory}>

                </OrderHistoryTag>
              ))}
          </MainHistory>
        </Container>
      </LayoutOrderHistory>
  )
}
