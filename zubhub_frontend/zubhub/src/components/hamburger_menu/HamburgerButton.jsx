import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/js/styles/views/page_wrapper/pageWrapperStyles';
import commonStyles from '../../assets/js/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import cn from 'classnames';

const useStyles = makeStyles(styles);
const useCommonStyles = makeStyles(commonStyles);

const HamburgerButton = ({setHamburgerMenuOpen}) => {
    const classes = useStyles()
    const common_classes = useCommonStyles();

    return (
        <IconButton
            className={cn(classes.hamburgerMenuStyle, common_classes.addOnSmallScreen)}
            aria-label="hamburger_menu"
            aria-haspopup="true"
            onClick={e => setHamburgerMenuOpen(true)}
        >
            <MenuIcon/>
        </IconButton>
    );
}

export default HamburgerButton;