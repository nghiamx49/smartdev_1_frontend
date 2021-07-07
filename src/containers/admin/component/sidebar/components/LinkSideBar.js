import React from 'react'
import {SideBarLi} from "./style"
import PropTypes from 'prop-types'



function LinkSideBar(props) {
    const { Icons, text,handle} = props 
    return (
        <SideBarLi onClick={()=>handle(text)}>
             {Icons && <Icons/>}<span>{text}</span>
        </SideBarLi>
    )
}
LinkSideBar.propTypes = {
    icons: PropTypes.oneOfType([PropTypes.any]),
    text: PropTypes.string,
    handle:PropTypes.func
};
LinkSideBar.defaultProps = {
    icons: null,
    text:'text',
    handle:()=>{
        console.log("dfkjhdfgdf");
    },
  };

export default LinkSideBar
