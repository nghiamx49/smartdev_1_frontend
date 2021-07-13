import styled from "styled-components";
import { theme } from "../../assests/common/color";

export const Container = styled.div`
  display: flex;
  max-width: 1150px;
  margin: 0 auto;
  font-size: 16px;
`;

export const MainContent = styled.div`
  margin: 30px;
  width: 950px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
  border-radius: 0.125rem;
`;

export const UserInfoContainer = styled.div`
  font-weight: 400;
  opacity: 0.7;
  margin: 15px;
  p {
    opacity: 0.5;
  }
`;

export const HrCustom = styled.hr`
  opacity: 0.5;
  margin: 0;
`;

export const OrderDetailContainer = styled.div`
  hr {
    width: 96%;
    opacity: 0.5;
    padding: 0;
    margin: 0 auto;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const StoreContainer = styled.div`
  display: flex;
  margin: 0 15px;
  font-weight: 300;
  align-items: center;
  b {
    margin-left: 10px;
    padding: 10px 0;
  }
`;

export const ProductDetail = styled.div`
  margin: 15px;
  display: flex;
  img {
    width: 80px;
    height: 80px;
    border-style: groove;
  }
  ul {
    margin: 0;
    padding-left: 10px;
    list-style: none;
  }
  justity-content: center;
`;

export const ProductName = styled.h4`
  while-space: wrap;
  width: 400px;
  overflow: hidden;
  text-overflow: clip;
`;

export const Price = styled.div`
  text-align: right;
  margin-top: 30px;
  margin-left: 150px;
  font-weight: bold;
  color: #ee4d2d;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  jusity-content: flex-end;
  opacity: 0.5;
  div {
    display: flex;
    align-items: center;
    b {
      padding-left: 10px;
      margin: 5px 0;
      margin-right: 10px;
    }
  }
`;

export const Button = styled.button`
  padding: 12px 20px;
  margin: 10px;
  float: right;
  border-radius: 5px;
  border: 1px solid ${theme.white};
  box-sizing: border-box;
  background-color: #d73211;
  color: ${theme.white};
  :hover {
    cursor: pointer;
    background-color: ${theme.textRed};
  }
`;
