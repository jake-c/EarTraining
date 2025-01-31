import React from "react";
import SideBarItemIndicator from "./SideBarItemIndicator";

const SideBarItem = (props) => {

    //Properties passed in to the component in parent component. Props is an object
    const { icon, label, handleClick, isActive } = props;

    return (
        <div className="sidebar-item">
            {isActive && <SideBarItemIndicator/>}
            <a href="#" className={`sidebar-item-link ${isActive? "active" : "inactive"}`} onClick={handleClick}>
                <span className="sidebar-item-icon">{icon}</span> 
                <span className="sidebar-item-text">{label}</span> 
            </a>
            
        </div>
    )
}

export default SideBarItem;