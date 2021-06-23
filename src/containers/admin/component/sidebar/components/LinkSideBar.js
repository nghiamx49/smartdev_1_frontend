import React from 'react'
import {SideBarLi} from "./style"
import PropTypes from 'prop-types'


function LinkSideBar(props) {
    const { Icons,text} = props 
    return (
        <SideBarLi>
            {Icons && <Icons/>} <span>{text}</span>
        </SideBarLi>
    )
}
LinkSideBar.propTypes = {
    icons: PropTypes.any,
    text: PropTypes.string
};
LinkSideBar.defaultProps = {
    icons: null,
    text:'text'
  };

export default LinkSideBar
