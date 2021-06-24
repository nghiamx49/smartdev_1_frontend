import styled from "styled-components";


export const MainAdminContainer = styled.div`
    flex-basis: 80%;
`;
export const MainAdminHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    height: 30px;
    margin:20px 0;
    overflow: hidden;
`;
export const MainAdminHeaderRight = styled.div`
    display: flex; 
`;
export const MainAdminHeaderUser = styled.div`
    display: flex; 
    align-items: center;
    img{
        height: 30px;
        width: 30px;
        margin-left: 10px;
    }
`;
export const MainAdminHeaderSearch = styled.div`
    margin-right: 15px;
    padding-right: 15px;
    border-right: solid 1px #777777;
    p{
        font-size: 18px;
    }
`;
export const MainAdminContent = styled.div`
   border:1.5px solid #DFE0EB;
   margin:20px;
   border-radius: 10px;
`;
export const MainAdminTable = styled.table`
    width: 100%;
    background: #FFFFFF;
    box-sizing: border-box;
    border-collapse: collapse;
    th{
        text-align: left;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        padding: 10px;
        color:#9FA2B4;
        padding: 10px 20px;
    }
    tbody tr{
        border-top: 1.5px solid #DFE0EB;
        &:hover{
            background-color:  #E5E5E5;
        }
    }
    td{
        padding:15px 20px; 
        button{
            background-color: #FEC400;
            border: none;
            outline: none;
            padding: 5px 10px;
            margin-right: 5px;
            text-transform: capitalize;
            color:#fff;
            cursor: pointer;
            &:first-child{
                background-color: #29CC97;
            }
        } 
    }
`;

export const MainAdminText = styled.div`
    display:flex;
    flex-direction: column;
`;
export const MainAdminFlex = styled.div`
    display:flex;
    img{
        margin-right: 15px;
    }
`;
export const MainAdminAllUser = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;
export const MainAdminStrong = styled.strong`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color:#000;
    
`;
export const MainAdmintextfunction = styled.p`
display: flex;
align-items: center;
margin-right: 15px;
span{
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #4B506D;
    margin-left: 5px;
}
`;

export const MainAdminPage =styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    border-top: 1.5px solid #DFE0EB;
    div{
        margin-left: 20px;
        display: flex;
        align-items: center;
        font-size: 14px;
        span{
            margin-top: 5px;
            margin-left: 7px;
        }
    }
`;