import React from 'react'
import "C:/Users/prash/OneDrive/Desktop/linkedin-clone/src/HeaderOption.css";
import {useSelector} from "react-redux";
import { Avatar } from '@mui/material';
import {selectUser} from "./features/counter/userSlice";

function HeaderOption({ avatar, Icon, title, onClick}) {
  const user = useSelector(selectUser);
  return ( 
    <div  onClick={onClick} className="headerOption">
        {Icon && <Icon className="headerOption__icon" />}
       {avatar && (
        <Avatar className="headerOption__icon" >
          {user?.email[0]}
          </Avatar> 
       )}
    <h3 className="headerOption__title">{title}</h3>
      
    </div>
  );
  
}

export default HeaderOption
