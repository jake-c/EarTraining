import React from "react";
import SideBarItem from "./SideBarItem";

//icons
import { Home, MusicSquare, Sound } from "iconsax-react";

const SideBar = () => {
    return (
        <div className="sidebar">
            <h1 className="sidebar-title">TruEar</h1>

            <SideBarItem icon = {<Home color="#fff" size={24}/>} label="Dashboard"/>
            <SideBarItem icon = {<MusicSquare color="#fff" size={24}/>} label ="Tonic-Interval"/>
            <SideBarItem icon = {<Sound color="#fff" size={24}/>} label ="Chord qualities"/>
        </div>
    )
}

export default SideBar;