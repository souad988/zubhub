const styles = theme => ({
    hamburgerSidebarStyle: {
      '& .MuiDrawer-paper': {
        height: '85%',
        width: '70%',
        top: '3.5em',
        left: '30%',
        borderRadius: '10px',
      },
    },

    textDecorationNone: {
      textDecoration: 'none',
    },

    logOutStyle: {
      borderTop: '1px solid #C4C4C4',
      backgroundColor: '#ededed',
      height: '10%',
      width: '100%',
      paddingTop: '2%',
      paddingBottom: '2%',
      paddingLeft: '3%',
      paddingRight: '3%',
    },

    menuItemSelected: {
      backgroundColor: 'black',
    },

    menuItemStyle: {
      backgroundColor: '#ededed',
      height: '10%',
      width: '100%',
      paddingTop: '2%',
      paddingBottom: '2%',
      paddingLeft: '3%',
      paddingRight: '3%',
    },

    paddingItem: {
      borderRadius: '10px',
      paddingLeft: '15%',
      height: '100%',

      '&:hover': {
        backgroundColor: '#00B8C4',
        '& .MuiTypography-root': {
          color: 'white',
        },
        
      },
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
    },

    menuItemHeader: {
      marginLeft: '40%',
    }
});

export default styles;