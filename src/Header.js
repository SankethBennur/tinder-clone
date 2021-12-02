import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
     return (  // Header Component. Header Block-code comes here.
          <div className='header'>

               <IconButton>
                    <PersonIcon fontSize='large' className='header__class' />
               </IconButton>

               <img className='header__logo'
                src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-Logo-2012.png' />

               <IconButton>
                    <ForumIcon fontSize='Large' className='header__class' />
               </IconButton>

          </div>
     );
}

export default Header
