import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/js/styles/components/hamburger_menu/hamburgerMenuStyles.js';
import commonStyles from '../../assets/js/styles';
import cn from 'classnames';
import clsx from 'clsx';
import {
  Typography,
  Drawer,
  Link,
  Avatar,
  MenuItem,
} from '@material-ui/core';
import { logout } from '../../views/pageWrapperScripts';

const useStyles = makeStyles(styles);
const useCommonStyles = makeStyles(commonStyles);

const HamburgerMenu = ({ t, props }) => {
  const classes = useStyles();
  const common_classes = useCommonStyles();

  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  return (
    [
    <IconButton
      className={cn(
        classes.hamburgerButtonStyle,
        common_classes.addOnSmallScreen,
      )}
      aria-label="hamburger_menu"
      aria-haspopup="true"
      onClick={e => {
        setHamburgerMenuOpen(!hamburgerMenuOpen);
      }}
    >
      <MenuIcon />
    </IconButton>,
    <Drawer
      className={classes.hamburgerSidebarStyle}
      id="hamburger_menu"
      open={hamburgerMenuOpen}
      onClose={e => setHamburgerMenuOpen(false)}
      anchor={'top'}
      style={{ zIndex: 1250 }}
    >
      <MenuItem className={classes.avatarItemStyle}>
        <Avatar
          className={clsx(classes.avatarStyle)}
          aria-label={`${props.auth.username}' Avatar`}
          src={props.auth.avatar}
          alt={props.auth.username}
        />
        <Typography variant="h6" color="textPrimary" component="span">
          {props.auth.username}
        </Typography>
      </MenuItem>
      <Link
        href="/profile"
        className={classes.menuItemStyle}
        style={{ textDecoration: 'none' }}
      >
        <MenuItem className={classes.paddingItem}>
          <Typography variant="subtitle2" color="textPrimary" component="span">
            {t('pageWrapper.navbar.profile')}
          </Typography>
        </MenuItem>
      </Link>
      <Link
        href="/projects/create"
        className={classes.menuItemStyle}
        style={{ textDecoration: 'none' }}
      >
        <MenuItem className={classes.paddingItem}>
          <Typography variant="subtitle2" color="textPrimary" component="span">
            {t('pageWrapper.navbar.createProject')}
          </Typography>
        </MenuItem>
      </Link>
      <Link
        className={classes.menuItemStyle}
        style={{ textDecoration: 'none' }}
      >
        <MenuItem className={classes.paddingItem}>
          <Typography variant="subtitle2" color="textPrimary" component="span">
            Notifications
          </Typography>
        </MenuItem>
      </Link>
      <Link
        href={`/creators/${props.auth.username}/projects`}
        className={classes.menuItemStyle}
        style={{ textDecoration: 'none' }}
      >
        <MenuItem className={classes.paddingItem}>
          <Typography variant="subtitle2" color="textPrimary" component="span">
            {t('pageWrapper.navbar.projects')}
          </Typography>
        </MenuItem>
      </Link>
      <Link
        href={`/creators/${props.auth.username}/followers`}
        className={classes.menuItemStyle}
        style={{ textDecoration: 'none' }}
      >
        <MenuItem className={classes.paddingItem}>
          <Typography variant="subtitle2" color="textPrimary" component="span">
            {t('pageWrapper.navbar.followers')}
          </Typography>
        </MenuItem>
      </Link>
      <Link
        href={`/creators/${props.auth.username}/following`}
        className={classes.menuItemStyle}
        style={{ textDecoration: 'none' }}
      >
        <MenuItem className={classes.paddingItem}>
          <Typography variant="subtitle2" color="textPrimary" component="span">
            {t('pageWrapper.navbar.following')}
          </Typography>
        </MenuItem>
      </Link>
      <Link
        href="/projects/saved"
        className={classes.menuItemStyle}
        style={{ textDecoration: 'none' }}
      >
        <MenuItem className={classes.paddingItem}>
          <Typography variant="subtitle2" color="textPrimary" component="span">
            {t('pageWrapper.navbar.savedProjects')}
          </Typography>
        </MenuItem>
      </Link>
      <Link
        className={cn(classes.logOutStyle)}
        style={{ textDecoration: 'none' }}
        onClick={e => logout(e, props)}
      >
        <MenuItem className={classes.paddingItem}>
          <Typography
            className={common_classes.colorRed}
            variant="subtitle2"
            component="span"
          >
            {t('pageWrapper.navbar.logout')}
          </Typography>
        </MenuItem>
      </Link>
    </Drawer>
    ]
  );
}

export default HamburgerMenu;
