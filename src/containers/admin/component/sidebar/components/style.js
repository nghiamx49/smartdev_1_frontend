import styled from "styled-components";

export const SideBarLi = styled.li`
    list-style: none;
    background-color: transparent;
    padding: 15px 0 15px 30px;
    cursor: pointer;
    color: #A4A6B3;
    span{
        font-size: 16px;
        font-weight: 400;
        text-transform: capitalize;
        margin-left:10px;
        
    }
    &:hover{
        background-color: #9FA2B4;
        border-left: 3px solid #E5E5E5;
        color: #fff;
    }
`;