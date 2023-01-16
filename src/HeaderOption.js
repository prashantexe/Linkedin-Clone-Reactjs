import React from 'react'
import "C:/Users/prash/OneDrive/Desktop/linkedin-clone/src/HeaderOption.css";


function HeaderOption({Icon, title}) {
  return ( 
    <div className="headerOption">
        {Icon && <Icon className="headerOption__icon" />}
    <h3 className="headerOption__title">{title}</h3>
      
    </div>
  );
  
}

export default HeaderOption
