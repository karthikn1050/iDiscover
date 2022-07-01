

import React from 'react';
import {NavLink} from 'react-router-dom'
import iDiscover from '../idiscover.jpg'
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
const User = localStorage.getItem('twittertoken')
const Header = ({history,isLogged}) =>{
    const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }
    
    return(
        <nav>
            <div className='div-header'>
                <div className='' style={{display:'flex'}} onClick={() => history.push('/')}>
                     <h3 style={{color:'white',marginRight:"20px"}}>IDiscover</h3>
                     
                <input style={{width:"300px",height:"30px",marginTop:"4px",borderRadius:"8px"}} placeholder = "Search Tags" type = "text" />
                </div>
               
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <NavLink exact to='/home' activeClassName='active' style={{marginRight:"20px"}}><HomeIcon style={{color:'white'}} /></NavLink>
                    <NavLink exact to='/trending' activeClassName='active' style={{marginRight:"20px"}}><WhatshotIcon style={{color:'white'}} /></NavLink>
                    <NavLink exact to='/profile' activeClassName='active'  style={{marginRight:"20px"}}><PersonIcon style={{color:'white'}}  /></NavLink>
                    {!User &&<button className='logoutbutton' onClick={handleClick}>Logout</button> }
                    {User &&  <button  className='button' onClick={handleClick}>Login</button> }
                    
                </div>
            </div>
        </nav>
    )
}

export default Header;