import React from 'react'
import { BottomLeft, Container, MiddleLeft, MiddleRight, OrderHistoryTagBottom, OrderHistoryTagTop, TopLeft, TopRight } from './style'
import PropTypes from 'prop-types';

OrderHistoryTag.propTypes = {
    orderHistory :  PropTypes.shape({
        Shop_Name : PropTypes.string,
        productName : PropTypes.string,
        linkimage :PropTypes.string,
        num : PropTypes.number,
        price : PropTypes.number,
        total : PropTypes.number,
    })
}

export default function OrderHistoryTag(props) {
    console.log(props);
    const {orderHistory} = props;
    return (
        <Container>
            <OrderHistoryTagTop>
                <TopLeft>
                    <span>{orderHistory.Shop_Name}</span>
                    <button>Đi Đến Shop</button>
                </TopLeft>
                <TopRight>
                    <h3>Đã giao</h3>
                </TopRight>
            </OrderHistoryTagTop>
            <OrderHistoryTagTop>
                <MiddleLeft>
                    <div>
                        <img src={orderHistory.linkimage}></img>
                    </div>
                    <div>
                        <ul>
                            <li><span>{orderHistory.productName}</span></li>
                            <li><span>x{orderHistory.num}</span></li>
                        </ul>
                    </div>
                </MiddleLeft>
                <MiddleRight>
                    <span>
                        Giá : {orderHistory.price}
                    </span>
                </MiddleRight>
            </OrderHistoryTagTop>
            <OrderHistoryTagBottom>
                <BottomLeft>
                    <div>
                        <span>
                        Tông tiền : {orderHistory.total}
                        </span>
                    </div>
                </BottomLeft>
                <BottomLeft>
                    <div>
                        <button>
                            Mua Lần Nữa
                        </button>
                        <button>
                            Liên Hệ Người Bán
                        </button>
                    </div>
                </BottomLeft>
            </OrderHistoryTagBottom>
        </Container>
    )
}
