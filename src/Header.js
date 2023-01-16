import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
      <h1>Hello</h1>

        <div classname="header__left">
                <img src="https://www.flaticon.com/free-icon/linkedin_174857?term=linked+in&page=1&position=13&origin=search&related_id=174857"/>

                <div classname="header__search">
                    <SearchIcon /> 
                    <input type="text"/>

                </div>


        </div>

            <div classname="header__left">


        </div>


    </div>
  )
}

export default Header
