import styled from "styled-components";

export const SlidebarProfile = styled.div`
     flex-basis: 20%;
`
export const SlidebarOfProfileTop = styled.div`
    display: flex;
    margin-top: 2rem;
    font-size: 15px;
   
    ul {
        padding: 2px;
        li{
            list-style-type : none;
            a{
                text-decoration: none;
                &:hover{
                    color: #fa4f30;
                }
            }
        }
    }
    img {
        margin: 1rem 1rem;
        height: 6rem;
        border-radius: 50%;
        width: 6rem;
    }
`
export const  SlidebarOfProfileBottom = styled.div`
    margin-top: 2rem;
    font-size: 15px;
    ul {
        padding: 0px;
        li{
            list-style-type : none;
            margin : 1rem ;
           
        }
    }
`