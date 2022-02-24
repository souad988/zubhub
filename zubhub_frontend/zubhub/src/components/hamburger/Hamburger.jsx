import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Hamburger(props) {
    return (
        <IconButton>
            <MenuIcon/>
        </IconButton>
    );
}

export default Hamburger;