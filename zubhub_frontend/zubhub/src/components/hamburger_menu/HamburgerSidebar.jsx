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
            <Link href='/profile' className={classes.menuItemStyle} style={{ textDecoration: 'none' }}>
                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    component="span"
                >
                  {t('pageWrapper.navbar.profile')}
                </Typography>
            </Link>
            <Link href="/projects/create" className={classes.menuItemStyle} style={{ textDecoration: 'none' }}>
                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    component="span"
                >
                  {t('pageWrapper.navbar.createProject')}
                </Typography>
            </Link>
            <Link className={classes.menuItemStyle} style={{ textDecoration: 'none' }}>
                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    component="span"
                >
                  Notifications
                </Typography>
            </Link>
            <Link href={`/creators/${props.auth.username}/projects`} className={classes.menuItemStyle} style={{ textDecoration: 'none' }}>
                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    component="span"
                >
                  {t('pageWrapper.navbar.projects')}
                </Typography>
            </Link>
            <Link href={`/creators/${props.auth.username}/followers`} className={classes.menuItemStyle} style={{ textDecoration: 'none' }}>
                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    component="span"
                >
                  {t('pageWrapper.navbar.followers')}
                </Typography>
            </Link>
            <Link href={`/creators/${props.auth.username}/following`} className={classes.menuItemStyle} style={{ textDecoration: 'none' }}>
                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    component="span"
                >
                  {t('pageWrapper.navbar.following')}
                </Typography>
            </Link>
            <Link href="/projects/saved" className={classes.menuItemStyle} style={{ textDecoration: 'none' }}>
                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    component="span"
                >
                  {t('pageWrapper.navbar.savedProjects')}
                </Typography>
            </Link>
            <MenuItem className={cn(classes.logOutStyle)}>
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