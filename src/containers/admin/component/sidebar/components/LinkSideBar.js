import React from 'react'
import {SideBarLi} from "./style"
import PropTypes from 'prop-types'


function LinkSideBar(props) {
    const { icons,text} = props 
    return (
        <SideBarLi>
            {icons} <span>{text}</span>
        </SideBarLi>
    )
}
LinkSideBar.propTypes = {
    icons: PropTypes.object,
    text: PropTypes.string
};
LinkSideBar.defaultProps = {
    icons: {},
    text:'text'
  };

export default LinkSideBar
