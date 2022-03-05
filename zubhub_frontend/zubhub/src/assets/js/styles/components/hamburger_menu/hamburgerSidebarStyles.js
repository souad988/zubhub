const styles = theme => ({
    // hamburgerSidebarStyle: {
      //   '& .MuiMenu-root': {
      //     paddingTop: 0,
      //     '& .MuiMenuItem-root': {
      //       '&:first-child': {
      //         backgroundColor: '#ffffff',
      //         paddingTop: '12px',
      //         paddingBottom: '8px',
      //       },
      //     },
      //   },
      //   [theme.breakpoints.up('1600')]: {
      //     '& .MuiMenu-paper': {
      //       width: '10em',
      //       '& .MuiTypography-root': {
      //         fontSize: '1.2rem',
      //       },
      //   },
      // },
    // },

    textDecorationNone: {
      textDecoration: 'none',
    },

    logOutStyle: {
      borderTop: '1px solid #C4C4C4',
    },

    menuItemSelected: {
      backgroundColor: 'black',
    },

    menuItemStyle: {
      backgroundColor: '#ededed',
      '&:hover': {
        backgroundColor: '#00B8C4',
        '& .MuiTypography-root': {
          color: 'white',
        },
      },
      paddingLeft:'15%',
      height: '10%',
      width: '100%',
    },

    avatarItemStyle: {
      height: '20%',
      paddingLeft:'15%',
      paddingRight:'15%',
    },

    avatarStyle: {
      height: '50%',
      width: '25%',
      marginRight: '10%',
      backgroundColor: 'black',
    },

    menuItemHeader: {
      marginLeft: '40%',
    }
});

export default styles;