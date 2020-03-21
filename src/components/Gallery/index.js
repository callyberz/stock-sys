import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

const images = [
  "/uploads/35d916ac9b2a4676b7d4fea370604c6a.jpg",
  "/uploads/9cc0affa1e99480e8f331a0030792dfd.jpg"
];

const style = theme => ({
  root: {
    // maxWidth: "100%"
  },
  galleryImage: {
    maxWidth: "100%"
  }
});

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { classes } = this.props;
    const { photoIndex, isOpen } = this.state;
    const images = this.props.slides.map(
      i => `${process.env.REACT_APP_BACKEND_URL}${i.url}`
    );

    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          {images.map((item, index) => {
            return (
              <Grid item xs={12} key={item}>
                <img
                  src={images[index]}
                  className={classes.galleryImage}
                  onClick={() =>
                    this.setState({ isOpen: true, photoIndex: index })
                  }
                />
              </Grid>
            );
          })}
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
          )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(style)(Gallery);
