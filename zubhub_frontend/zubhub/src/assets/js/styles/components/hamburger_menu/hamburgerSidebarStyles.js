const styles = theme => ({
    hamburgerSidebarStyle: {
      '& .MuiDrawer-paper': {
        height: '85%',
        width: '70%',
        top: '3.5em',
      },
    },

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
      pointerEvents: 'none',
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