import React from 'react';
import styles from '../../assets/js/styles/views/page_wrapper/pageWrapperStyles';
import { makeStyles } from '@material-ui/core/styles';
import {handleHamburgerMenuClose} from '../../views/pageWrapperScripts'

import {
    Typography,
    Menu,
    MenuItem,
  } from '@material-ui/core';

const useStyles = makeStyles(styles);

const HamburgerSidebar = ({hamMenuOpen, ham_anchor_el, setState}) => {
    const classes = useStyles();
    const handleSetState = obj => {
        if (obj) {
          Promise.resolve(obj).then(obj => {
            setState(state => ({ ...state, ...obj }));
          });
        }
      };
    return (
        <Menu
            className={classes.profileMenuStyle}
            open={hamMenuOpen}
            onClose={e => handleSetState(handleHamburgerMenuClose(e))}
            anchorEl={ham_anchor_el}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <MenuItem>
                hello
            </MenuItem>
        </Menu>
    );
}

export default HamburgerSidebar;