import React from 'react';
import styles from '../../assets/js/styles/views/page_wrapper/pageWrapperStyles';
import { makeStyles } from '@material-ui/core/styles';

import {
    Typography,
    Menu,
    MenuItem,
  } from '@material-ui/core';

const useStyles = makeStyles(styles);

const HamburgerSidebar = ({hamburgerMenuOpen, setHamburgerMenuOpen}) => {
    const classes = useStyles();
    return (
        <Menu
            className={classes.profileMenuStyle}
            open={hamburgerMenuOpen}
            onClose={e => setHamburgerMenuOpen(false)}
        >
            <MenuItem>
                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    component="span"
                    className={classes.profileStyle}
                  >
                    hello
                </Typography>
            </MenuItem>
        </Menu>
    );
}

export default HamburgerSidebar;