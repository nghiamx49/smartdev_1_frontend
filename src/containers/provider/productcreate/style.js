import styled from "styled-components"
import { theme } from "../../../assests/common/color";

export const InputControls = styled.div`
   label{
       font-size: 16px;
       text-transform: capitalize;
       margin-right: 10px;
       display: inline-block;
       width: 170px;
       font-size: 15px;
   font-weight: 500;
   }
   input{
      margin:15px 0;
      padding:15px 10px;
      width:400px;
      outline:none;
      border:1px solid #bbb;
      border-radius:3px;
      display:inline-block;
      box-sizing:border-box;
      transition:0.2s ease all;
   }
`;
export const TitleProducts = styled.h3`
   font-size: 20px;
   text-transform: capitalize;
   margin-left: 30px;
`;
export const BtnCreate = styled.button`
   background-color: ${theme.textRed};
   color:${theme.white};
   font-size: 15px;
   font-weight: 500;
   display: block;
   padding: 10px 30px;
   border: none;
   outline: none;
   border-radius: 3px;
   margin-top: 30px;
   margin-left: 380px;
   text-transform: capitalize;
`;
export const InputFile = styled.input`
      color: transparent;
      margin-bottom: 10px;
      &::-webkit-file-upload-button {
      visibility: hidden;
      }
      &::before {
      content:"thêm ảnh vào sản phẩm";
      color: black;
      display: inline-block;
      background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
      border: 1px solid #999;
      border-radius: 3px;
      padding: 5px 8px;
      outline: none;
      white-space: nowrap;
      -webkit-user-select: none;
      cursor: pointer;
      text-shadow: 1px 1px #fff;
      font-weight: 700;
      font-size: 10pt;
      }
      &:hover::before {
         border-color: black;
         
      &:active::before {
      background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9); 
      }
}

`;
export const  ContainerInputFile = styled.div`
 
   width: 450px;
   position: relative;
   height:30px;
`;
