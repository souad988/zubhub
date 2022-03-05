import React from 'react';
import styles from '../../assets/js/styles/components/hamburger_menu/hamburgerSidebarStyles.js';
import commonStyles from '../../assets/js/styles';
import { makeStyles } from '@material-ui/core/styles';
import {logout, handleHamburgerMenuClose, handleProfileMenuOpen} from '../../views/pageWrapperScripts'
import clsx from 'clsx';
import cn from 'classnames';

import {
    Typography,
    Drawer,
    Box,
    Link,
    Avatar,
    Menu,
    MenuItem,
  } from '@material-ui/core';

const useStyles = makeStyles(styles);
const useCommonStyles = makeStyles(commonStyles);

const HamburgerSidebar = ({hamburgerMenuOpen, ham_anchor_el, setState, t, props}) => {
    const classes = useStyles();
    const common_classes = useCommonStyles();
    const handleSetState = obj => {
        if (obj) {
          Promise.resolve(obj).then(obj => {
            setState(state => ({ ...state, ...obj }));
          });
        }
      };
    return (
        <Drawer
            className={classes.hamburgerSidebarStyle}
            id="hamburger_menu"
            open={hamburgerMenuOpen}
            onClose={e => handleSetState(handleHamburgerMenuClose(e))}
            anchor={'top'}
            style={{zIndex: 1250}}
        >
            <MenuItem className={classes.avatarItemStyle}>
                <Avatar
                    className={clsx(classes.avatarStyle)}
                    aria-label={`${props.auth.username}' Avatar`}
                    src={props.auth.avatar}
                    alt={props.auth.username}
                />
                <Typography
                    variant="h6"
                    color="textPrimary"
                    component="span"
                >
                    {props.auth.username}
                </Typography>
            </MenuItem>
            <MenuItem className={classes.menuItemStyle}>
                <a className={classes.textDecorationNone} href="/profile">
                    <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        component="span"
                    >
                      {t('pageWrapper.navbar.profile')}
                    </Typography>
                </a>
            </MenuItem>
            <MenuItem className={classes.menuItemStyle}>
                <a
                    className={classes.textDecorationNone}
                    href="/projects/create"
                >
                    <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        component="span"
                    >
                      {t('pageWrapper.navbar.createProject')}
                    </Typography>
                </a>
            </MenuItem>
            <MenuItem className={classes.menuItemStyle}>
                <a
                    className={classes.textDecorationNone}
                >
                    <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        component="span"
                    >
                      Notifications
                    </Typography>
                </a>
            </MenuItem>
            <MenuItem className={classes.menuItemStyle}>
                <a
                    className={classes.textDecorationNone}
                    href={`/creators/${props.auth.username}/projects`}
                >
                    <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        component="span"
                    >
                        {t('pageWrapper.navbar.projects')}
                    </Typography>
                </a>
            </MenuItem>
            <MenuItem className={classes.menuItemStyle}>
                <a
                    className={classes.textDecorationNone}
                    href={`/creators/${props.auth.username}/followers`}
                >
                    <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        component="span"
                    >
                        {t('pageWrapper.navbar.followers')}
                    </Typography>
               </a>
            </MenuItem>
            <MenuItem className={classes.menuItemStyle}>
                <a
                    className={classes.textDecorationNone}
                    href={`/creators/${props.auth.username}/following`}
                >
                    <Typography
                      variant="subtitle2"
                      color="textPrimary"
                      component="span"
                    >
                      {t('pageWrapper.navbar.following')}
                    </Typography>
                  </a>
            </MenuItem>
            <MenuItem className={classes.menuItemStyle}>
                <a
                    className={classes.textDecorationNone}
                    href="/projects/saved"
                >
                    <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        component="span"
                    >
                        {t('pageWrapper.navbar.savedProjects')}
                    </Typography>
                </a>
            </MenuItem>
            <MenuItem className={cn(classes.menuItemStyle, classes.logOutStyle)}>
                <Typography
                    className={common_classes.colorRed}
                    variant="subtitle2"
                    component="span"
                    onClick={e => logout(e, props)}
                >
                    {t('pageWrapper.navbar.logout')}
                </Typography>
            </MenuItem>
        </Drawer>
    );
}

export default HamburgerSidebar;