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
  navbarContainer: {
    backgroundColor: "#fff"
  },
  menuButton: {
    marginLeft: "auto"
  },
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
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navbarContainer}>
        <Toolbar>
          <Link url="/">
            GroundZeroHK
          </Link>

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
