import React, { useState } from "react";
import SideBarItem from "./SideBarItem";

//icons
import { Home, MusicSquare, Sound } from "iconsax-react";

const SideBar = () => {
    const [ activeItem, setActiveItem ] = useState('Dashboard')

    const menuItems = [
        { label: "Dashboard", icon: <Home size={24}/> },
        { label: "Tonic-interval", icon: <MusicSquare size={24}/> },
        { label: "Chord Visualizer", icon: <Sound size={24}/> }   
    ]

    return (
        <div className="sidebar">
            <h1 className="sidebar-title">TruEar</h1>

            {menuItems.map((item) => (
                <SideBarItem    
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    isActive={activeItem === item.label}
                    handleClick={() => setActiveItem(item.label)}
                />
            )
                
            )}
            {/* <SideBarItem icon = {<Home size={24}/>} label="Dashboard" isActive={false} />
            <SideBarItem icon = {<MusicSquare size={24}/>} label ="Tonic-Interval" isActive={true}/>
            <SideBarItem icon = {<Sound size={24}/>} label ="Chord qualities" isActive={false}/> */}

        </div>
    )
}

export default SideBar;