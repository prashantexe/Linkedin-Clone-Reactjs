import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            
            <img src="" alt= "" />
            <Avatar />
            <h2>D Prashant</h2>
            <h4>prashantd049@gmail.com</h4>
        </div>
        <div className= "sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__number">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on Post</p>
                <p className="sidebar__number">2,423</p>
            </div>
        </div>
        <div className="sidebar__bottom">
             <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar
