const styles = theme => ({
    hamburgerSidebarStyle: {
        '& .MuiMenu-root': {
          paddingTop: 0,
          '& .MuiMenuItem-root': {
            '&:first-child': {
              backgroundColor: '#ffffff',
              paddingTop: '12px',
              paddingBottom: '8px',
            },
          },
        },
        [theme.breakpoints.up('1600')]: {
          '& .MuiMenu-paper': {
            width: '10em',
            '& .MuiTypography-root': {
              fontSize: '1.2rem',
            },
        },
      },
    },

    textDecorationNone: {
      textDecoration: 'none',
    },

    logOutStyle: {
      borderTop: '1px solid #C4C4C4',
    },

    menuItemStyle: {
      //backgroundColor: '#ededed',
      '& .MuiMenuItem': {
        backgroundColor: 'black',
      },
      height: '100px',
      width: '100%',
    },

    avatarItemStyle: {
      height: '200px',
      justifyContent: "space-evenly",
    },
});

export default styles;