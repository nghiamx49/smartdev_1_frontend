import styled from 'styled-components'
export const Container = styled.div`
    max-width: 100%;
    margin:0 auto;
    /* background-color:lightgreen; */
hr{
    width: 900px;
    border: 0.5px solid #D3D3D3;
}
a:hover{
        color: #ee4d2d;
    }
`
export const FooterTop = styled.div`
    display: flex;
    justify-content:center;
    
    `
export const FooterHr = styled.hr`
  
    width: 1000px;
    `
export const FooterBoder_image = styled.li`
  flex-wrap: wrap;
  width: 150px;
  height: 90px;
  display: flex;
  flex-wrap: wrap;
        img{
      width: 40px;
      height: 30px;
      margin:0px 1px 0px 1px ;
  }
`
export const FooterUI = styled.div`
margin-right: 10px;
color: #606060;
h6 {
    margin: 20px 15px -10px 0
}
ul{
    margin-left: -30px;
li {
    list-style-type:none;
    text-align:left;
    a{
        text-decoration:none;
        font-size: 12px;
        color: #808080;
    }
}
}
`
//Footer bottom
export const FooterBottom = styled.div`
display:flex;
justify-content:center;
font-size: 12px;
color: #606060;
ul{
    display:flex;
    li{
        list-style-type:none;
        margin-right: 5px;
    } 
    a{
        text-decoration:none;
        color: #606060 ;
    }
   
}
 `
 export const Footer_bottom = styled.div`
 background-color: #f5f5f5;
 padding: 10px 0px 10px 0px;
 p{
 color: #808080;
 font-size: 12px;
 }
 `