import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/js/styles/components/hamburger_menu/hamburgerButtonStyles.js';
import commonStyles from '../../assets/js/styles';
import cn from 'classnames';
import {handleHamburgerMenuOpen, handleHamburgerMenuClose} from '../../views/pageWrapperScripts'

const useStyles = makeStyles(styles);
const useCommonStyles = makeStyles(commonStyles);

const HamburgerButton = ({setState}) => {
    const classes = useStyles()
    const common_classes = useCommonStyles();
    const handleSetState = obj => {
        if (obj) {
          Promise.resolve(obj).then(obj => {
            setState(state => ({ ...state, ...obj }));
          });
        }
      };
    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

    return (
        <IconButton
            className={cn(classes.hamburgerButtonStyle, common_classes.addOnSmallScreen)}
            aria-label="hamburger_menu"
            aria-haspopup="true"
            onClick={e => {handleSetState(hamburgerMenuOpen? handleHamburgerMenuClose(e) : handleHamburgerMenuOpen(e)); setHamburgerMenuOpen(!hamburgerMenuOpen)}}
        >
            <MenuIcon/>
        </IconButton>
    );
}

export default HamburgerButton;