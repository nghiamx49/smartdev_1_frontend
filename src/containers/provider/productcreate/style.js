import styled from "styled-components"
import { theme } from "../../../assests/common/color";

export const InputControls = styled.div`
   label{
       font-size: 16px;
       text-transform: capitalize;
       margin-right: 10px;
       display: inline-block;
       width: 170px;
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
   margin-left: 410px;
`;