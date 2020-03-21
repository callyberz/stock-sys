/**
 *
 * About
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Img from '../../components/Img';

import img from '../../assets/img/family.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const style = theme => ({
  socialIcon: {
    display: "inline-block",
    marginRight: 8,
    borderRadius: "calc(12px)"
  },
});

function About({ classes }) {
  const functionnalities = [
    'List of products',
    'Filters',
    'Reviews',
    'Votes',
    'Comments',
    'Static Page',
    'Image Management',
  ];

  const networks = {
    facebook: {
      img: <InstagramIcon />,
      href: 'https://www.facebook.com/groundzerohk'
    },
    instagram: {
      img: <FacebookIcon />,
      href: 'https://www.instagram.com/groundzero.lab'
    },
  };

  return (
    <div id="about-page">
      <div>
        <Img
          src={img}
          alt="cover"
        />
      </div>
      <div>
        <div className="container">
          <h1>About us</h1>
          <div>
            <p>
              GroundZeroHK is a place where you can find vintage, hype products. We hope everyone gets a better
              life by having our lifestlye.
              <br /><br />
              And based in Hong Kong because we’re from here.
              {/* We produce Strapi, a collaborative open-source headless CMS fueled by a community of amazing developers,
              designers and users.
              We use the word “food” a lot, because food is sharing and sharing is caring
              so come be our friend and see if we mean it. */}
            </p>
          </div>
          <h5>Our Mission</h5>
          <div>
            <p>
              Better life
              <br /><br />
            </p>
          </div>
          <h5>Say Hello</h5>
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
    </div>
  );
}

export default withStyles(style)(About);
