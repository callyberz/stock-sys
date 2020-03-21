/**
 *
 * Footer
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/footer-logo.png';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  linktext: {
    color: "rgb(150, 150, 150)",
    fontWeight: 400,
    fontSize: "12px"
  },
  footerLogo: {
    maxWidth: 200
  }
});

function Footer({ classes, links, onSubmit }) {
  return (
    <div className={classes.root}>
      <Container component="footer" className={classes.footer}>
        <Link to='/'>
          {/* <h5>GroundZeroHK</h5> */}
          <img className={classes.footerLogo} src={logo} alt="logo" />
        </Link>
        <Grid container spacing={1}>
          <Grid container item xs={12} md={6} spacing={2}>
            {links.map(footer => (
              <Grid item xs={6} key={footer.name}>
                <Link to={footer.to} className={classes.linktext}>
                  <span>{footer.name}</span>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Hidden only="xs">
            <Grid container item xs={6} md={6}>
              {/* <h5>Test</h5> */}
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </div >
  )

}

Footer.defaultProps = {
  links: [],
  onSubmit: e => e.preventDefault()
};
Footer.propTypes = {
  links: PropTypes.array,
  onSubmit: PropTypes.func
};

export default withStyles(styles)(Footer);