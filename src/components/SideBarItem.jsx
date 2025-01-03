import React from "react";

const SideBarItem = (props) => {

    //Properties passed in to the component in parent component. Props is an object
    const { icon, label, handleClick } = props

    return (
        <div className="sidebar-item">
            <a href="#dashboard" className="sidebar-item-link" onClick={handleClick}>
                <span className="sidebar-item-icon">{icon}</span> 
                <span className="sidebar-item-text">{label}</span> 
            </a>
            <div className="sidebar-item-indicator"></div>
        </div>
    )
}

export default SideBarItem;