import styled from "styled-components";
export const Header = styled.header`
  background: #fa4f30;
  position: relative;
  a{
    color:#fff;
  }
`;

export const HeaderLink = styled.span`
  color: white;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-right: 10px;
  display: inline-flex;
  align-items: center;
  svg{
    margin-right: 5px;
  }
`;
export const HeaderLinkBoder = styled.span`
  color: white;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-right: 10px;
  padding: 0 10px;
  border-left: 1px solid hsla(0, 0%, 100%, 0.22);
  border-right: 1px solid hsla(0, 0%, 100%, 0.22);
`;
export const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
export const HeaderUser = styled.div`
  display: inline;
  position: relative;
  cursor: pointer;
  p{
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    display: inline;
  }
  div {
    display: flex;
    flex-direction: column;
    position: absolute;
    top:30px;
    right: 10px;
    height: 90px;
    width: 200px;
    background-color: #fff;
    z-index: 10;
    visibility: hidden;
    &::after{
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      top: -10px;
      right: 27px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #fff;
    }
    a{
      text-decoration: none;
      padding: 5px 15px;
      background-color: #f5f5f5;
      text-transform: capitalize;
      color:#000;
      &:hover{
        color:green;
      }
    }
  }
  &:hover div{
    visibility: visible;
  }
`;
export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const HeaderUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  li {
    font-size: 13px;
    font-weight: 500;
    color: #fff;
    text-transform: capitalize;
    margin-right: 10px;
  }
`;

export const HeaderInput = styled.input`
  width: 100%;
  padding: 5px;
  background-color: #fff;
  outline: none;
  height: 20px;
  border: none;
`;
export const HeaderSearch = styled.button`
  position: absolute;
  top: 5px;
  right: 0;
  background-color: #fb5533;
  border: none;
  outline: none;
  border-radius: 3px;
`;
export const HeaderBottomCenterTop = styled.div`
  position: relative;
  margin-bottom: 10px;
`;
export const HeaderBottomCenter = styled.div`
  flex-basis: 70%;
  box-sizing: border-box;
`;
export const HeaderBottomLeft = styled.div`
  flex-basis: 15%;
  text-align: center;
  display: flex;
  align-items: center;
  img{
    height:60px;
    width: 60px;
    margin-right: 10px;
  }
  span{
    color:#fff;
    font-size: 20px;
  }
`;
export const HeaderBottomRight = styled.div`
  flex-basis: 40px;
  color:#fff;
  height: 30px;
  position: relative;
  top: -4px;
  left: -20px;
  svg{
    font-size: 40px;
  }
  div{
    background-color: #fff;
    position: absolute;
    top: 60px;
    right: 0px;
    height: 0px;
    width: 0px;
    border-radius: 4px;
    box-shadow: 0 1px 3.125rem 0 rgb(0 0 0 / 20%);
    text-align: center;
    transition: all 0.2s ease;
    visibility: hidden;
    opacity: 0;
    &::after{
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      top: -15px;
      right: 27px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 15px solid #fff;
    }
    img{
      height: 70px;
      width: 70px;
      margin-top:50px;
    }
    p{
      color:#000;
    }
  }
  &:hover div{
    height: 300px;
    width: 400px;
    visibility: visible;
    opacity: 1;
  }
`;
