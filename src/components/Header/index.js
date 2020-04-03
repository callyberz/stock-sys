/**
 *
 * Header
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';

import Link from '../Link';
import logo from '../../assets/img/logo.png';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    // '&:focus': {
    //   backgroundColor: theme.palette.primary.main,
    //   '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
    //     color: theme.palette.common.white,
    //   },
    // },
  },
}))(MenuItem);

const style = theme => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    textAlign: "center"
  },
  toolbar: {
    // minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    display: 'block'
  },
  navbarContainer: {
    backgroundColor: "#fff",
    background: 'transparent',
    boxShadow: 'none'
  },
  menuButton: {
    display: 'flex',
    alignSelf: 'center',
  },
  homeButton: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  links: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  link: {
  }
});

function Header({ classes, links }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggleCollapse = () => {
    if (window.innerWidth < 768) {
      setAnchorEl(null);
    }
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>

      <AppBar position="static" className={classes.navbarContainer}>
        <Toolbar className={classes.toolbar}>

          <div className={classes.homeButton}>
            <Link url="/">
              GroundZeroHK
          </Link>

            <Hidden smUp>
              <div className={classes.menuButton} >
                <MenuIcon onClick={handleClick} />
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {links.map(link => {
                    return (
                      <StyledMenuItem key={link.to} onClick={toggleCollapse} >
                        <Link
                          url={link.to}
                          active={window.location.pathname === link.to}
                        >
                          <span title={link.name}>{link.name}</span>
                        </Link>
                      </StyledMenuItem>
                    );
                  })}
                </StyledMenu>
              </div>
            </Hidden>
          </div>

          <Hidden only='xs'>
            <div className={classes.links}>
              {links.map(link => {
                return (
                  <div key={link.to} className={classes.link}>
                    <Link
                      url={link.to}
                    >
                      <span title={link.name}>{link.name}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </Hidden>


        </Toolbar>
      </AppBar>

    </div>
  );
}

Header.defaultProps = {
  links: [],
};
Header.propTypes = {
  links: PropTypes.array,
};

export default withStyles(style)(Header);
