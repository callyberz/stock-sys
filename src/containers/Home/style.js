import { createMuiTheme } from "@material-ui/core/styles";

const style = {
  root: {
    // paddingLeft: "20px",
    // paddingRight: "20px"
    height: "100%"
  },

  container: {
    margin: "0 auto",
    padding: "0 0 40px",
    maxWidth: "var(--max-content-width)"
  }
};

const theme = createMuiTheme({
  // overrides: {
  //   MuiOutlinedInput: {
  //     root: {
  //       "& $notchedOutline": {
  //         borderColor: "#FFE401"
  //       },
  //       "&:hover $notchedOutline": {
  //         borderColor: "#FFE401"
  //       },
  //       "&.Mui-focused $notchedOutline": {
  //         borderColor: "#FFE401"
  //       }
  //     }
  //   },
  //   MuiFormLabel: {
  //     root: {
  //       color: "#000",
  //       "&.Mui-focused": {
  //         color: "#000"
  //       }
  //     }
  //   }
  // }
});

export { style, theme };
