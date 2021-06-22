import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    margin-top: 2rem;
`
export const OrderHistoryTagTop = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fd5d32;
    max-width: 95%;
    margin: auto;
  
`
export const TopLeft = styled.div`
    flex-basis: 40%;
    button {
        margin: 1rem 3rem ;
        padding: 0.5em;
        background-color: #fd5d32 ;
        border : 0;
        background-color: #f3836c;
        border-radius: 5px;
        padding: 5px;
        color: white;
        &:hover{
            background-color: #346abe;
        }
    }
`
export const TopRight = styled.div`
    flex-basis: 40%;
    h3{
        margin: 1rem 0rem ;
    }
`
export const MiddleLeft = styled.div`
    flex-basis: 40%;
    display: flex;
    img{
        max-height : 5rem;
    }
    span{
        max-width: 80%;
    }
    ul{
        padding: 0rem 2rem;
        margin: 0px;
        li{
            list-style-type: none;
        }
    }
`
export const MiddleRight = styled.div`
    flex-basis: 40%;
    h3{
        margin: 1rem 0rem ;
    }
`
export const OrderHistoryTagBottom = styled.div`
    justify-content: space-between;
    color: #fd5d32;
    max-width: 95%;
    margin: auto;
    align-items: flex-end;
    button {
        margin-right : 2rem;
        margin-bottom :1rem;
        margin-top: 1rem;
        background-color: white;
        height: 3rem;
        border-top: 0.5px solid #ff0000;
        background-color: #f3836c;
        border-radius: 5px;
        padding: 5px;
        border : none;
        color: white;
        &:hover{
            background: #fd5d32;
        }
    }

`
export const BottomLeft = styled.div`
    display: flex;
    flex-direction: row-reverse;
    div {
        flex-basis: 40%;
    }
`
