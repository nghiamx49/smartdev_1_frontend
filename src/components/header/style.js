import styled from "styled-components";
export const Header = styled.header`
  background: #fa4f30;
`;

export const HeaderLink = styled.span`
  color: white;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-right: 10px;
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
export const HeaderUser = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
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
    font-size: 1.2rem;
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
  flex-basis: 60%;
  box-sizing: border-box;
`;
export const HeaderBottomLeft = styled.div`
  flex-basis: 15%;
  text-align: center;
`;
export const HeaderBottomRight = styled.div`
  flex-basis: 15%;
  color:#fff;
  text-align: center;
  svg{
    font-size: 40px;
    margin-top: -25px;
  }
`;
