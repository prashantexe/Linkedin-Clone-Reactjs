import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";

function Sidebar() {

        const recentItems = (topic) => (
            <div className="sidebar__recentItems">
               <span className="sidebar__hash"></span> 
                <p>{topic}</p>
                
            </div>
        )



  return (
    <div className="sidebar">
        <div className="sidebar__top">
            
            <img src="https://images.unsplash.com/photo-1614849286521-4c58b2f0ff15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt= "" />
            <Avatar className="sidebar__avatar"/>
            <h2>D Prashant</h2>
            <h4>prashantd049@gmail.com</h4>
        </div>
        <div className= "sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on Post</p>
                <p className="sidebar__statNumber">2,423</p>
            </div>
        </div>
        <div className="sidebar__bottom">
             <p>Recent</p>
             {recentItems("# UI/UI Designer")}
             {recentItems("# Front-end Developer")}
             {recentItems("# Programming")}
             {recentItems("# Developer")}
             {recentItems("# Designer")}

        </div>
    </div>
  )
}

export default Sidebar
