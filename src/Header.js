import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
      <h1>Hello</h1>

        <div classname="header__left">
                <img src=''alt=""/>

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
