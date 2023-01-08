import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from '../src/Pics/logo.png'
function Header() {
    return(
        <div className='Header'>
        <img className="Header_logo"
            src={logo} alt='umma logo' />
        
        

        <div className='Header_search'>
            <input className="Header_search input"
                type="text" />
            <SearchIcon
            className="Header_searchIcon" />
            
        </div>
 
        <div className='Header_nav'>
            <div className='Header_option'>
                {/*sign in*/}
                <span className='header_option_line_1'>
                    Hello user
                </span>
                <span className='header_option_line_2'>
                    Sign in
                </span>

            </div>
            
            <div className='Header_option'>
                {/*sign in*/}
                <span className='header_option_line_1'>
                    Returns 
                </span>
                <span className='header_option_line_2'>
                    & Orders
                </span>

            </div>

            <div className='Header_option'>
                {/*sign in*/}
                <span className='header_option_line_1'>
                    Your
                </span>
                <span className='header_option_line_2'>
                    Account
                </span>

            </div>

            <div className='Header_basket'>
                <AddShoppingCartIcon />
                <span className='header_option_line_2 header_basketCount'>0</span>
                    
            </div>


         
        </div>
    </div>
 
    );
}

export default Header
