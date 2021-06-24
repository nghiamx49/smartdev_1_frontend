import styled from "styled-components";
export const OderID = styled.div`
/* background-color:blue; */
display: flex;
justify-content: flex-end;
border: solid 1px;
border-left: none;
border-right: none;
border-color: #DCDCDC;
p{
    margin-right: 20px;
    font-weight: bold;
}
`
export const Container = styled.div`
    width: 1140px;
    height: 500px;
    border: 1px;
    margin-top: 15px;
    justify-content: center;
    /* background-color: lightgreen; */
    position: relative;
        left: 120px;

`
export const ViewshopContainer = styled.div`
    font-size: 12px;
    /* margin: 0px 0px 10px 40px; */
    border: 1px solid #DCDCDC;
    border-left: 0px;
    border-right: 0px;
    border-top: none;
    `
export const Viewshop = styled.div` 
padding: 10px;
    p{
        font-weight: bold;
        display: inline;
        margin-right: 50px;
    }
    span{
        background-color: orange;
        font-weight: bold;
        padding: 5px;
        
    }
    img{
        padding: 10px 0px 0px 30px;
        height: 40px;
        width: 40px;
    }
`
export const  Adress = styled.div`
    margin-top: -10px;
ul{
    list-style-type:none;
    color: #808080;
    margin-top: -10px;
    
}
h4{

}
`
export const  Table = styled.div`
table{
    width: 1140px;
   border: 0px;
    border-collapse: collapse;
    tr{
        td:first-child{
            text-align: right;
            border-left: 0px;
            width: 60%;
            
            p{
                text-align: left;
                margin-right: 10px;
                font-weight: inherit;
            
            }
            span{
                margin-right: 15px;
            }
    }
}
}   

`
export const Picture = styled.div`
display:flex;
align-items: flex-start;
    p{
        margin-left: 10px;
        font-weight: normal;

     }
`