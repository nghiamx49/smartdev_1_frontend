import  styled from "styled-components"

export const LayoutOrderHistory = styled.div`
    background-color: #f5f5f5;
    padding-bottom : 10rem;
`
export const Container = styled.div`
    display: flex;
    max-width: 1150px;
    justify-content: space-between;
    margin: 0 auto;
`
export const MainHistory = styled.div`
    margin-top: 2rem;
    flex-basis: 80%;
    font-size: 15px;
`
export const OrderHistoryTop = styled.div`
    margin-top : 0px;
    min-height: 5rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
`
export const  OrderHistoryTopLink = styled.div`
    margin : auto;
    &:hover {
        color: #fa4f30;
    }
`
export const  Search = styled.div`
    margin :  2rem 0rem ;
    height: 3rem;
    input {
        width: 90%;
        border: 0rem;
        height: 100%;
        padding: 0rem;
    }
    button {
        width: 10%;
        height: 100%;
        border: 0rem;
        padding: 0rem;
        background-color: #1da1f2;
        &:hover{
            background-color: #fa5230;
        }
    }
`

