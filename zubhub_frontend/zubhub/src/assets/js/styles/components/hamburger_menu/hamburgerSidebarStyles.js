const styles = theme => ({
    hamburgerSidebarStyle: {
        '& .MuiList-root': {
          paddingTop: 0,
          '& .MuiListItem-root': {
            '&:first-child': {
              backgroundColor: '#ededed',
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
});

export default styles;