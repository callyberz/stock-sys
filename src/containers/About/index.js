/**
 *
 * About
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Img from '../../components/Img';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import img from '../../assets/img/family.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const style = theme => ({
  textContainer: {
    padding: 16
  },
  socialIcon: {
    display: "inline-block",
    marginRight: 8,
    borderRadius: "calc(12px)"
  },
});

function About({ classes }) {
  const networks = {
    facebook: {
      img: <InstagramIcon />,
      href: 'https://www.instagram.com/groundzero.lab'
    },
    instagram: {
      img: <FacebookIcon />,
      href: 'https://www.facebook.com/groundzerohk'
    },
  };

  return (
    <div>
      <Box>
        <div>
          <Img
            src={img}
            alt="cover"
          />
        </div>
        <div className={classes.textContainer}>
          <div className="container">
            <h1>About us</h1>
            <div>
              <p>
                GroundZeroHK is a place where you can find vintage, hype products. We hope everyone gets a better
                life by having our lifestlye.
              <br /><br />

              </p>
            </div>
            <div>
              <p>
                If you have any question, a partnership, or just need some help, reach out to us. We’re available.
            </p>
              <a mailto="grdzerohk@gmail.com">
                <p>grdzerohk@gmail.com</p>
              </a>
            </div>

            <h5>Follow</h5>
            <div>
              <p>
                Stay up to date on upcoming products!
            </p>
              <div>
                {Object.keys(networks).map(key => {
                  return (
                    <a href={networks[key].href} key={key} className={classes.socialIcon}>
                      <div>
                        {networks[key].img}
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

      </Box>
    </div>
  );
}

export default withStyles(style)(About);
