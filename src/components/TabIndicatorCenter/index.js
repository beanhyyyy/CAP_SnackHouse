import React from "react";
import { Tab, withStyles } from "@material-ui/core";

<<<<<<< HEAD
/* tabs có indicator căn giữa */
const TabIndicatorCenter = withStyles(
  (theme) => ({
    root: {
      minHeight: theme.spacing(4),
    },
    indicator: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      height: 3,
      "& > span": {
        maxWidth: 50,
        width: "100%",
        backgroundColor: theme.palette.primary.main,
      },
    },
  }),
  {
    name: "AtomTabsIndicatorCenter",
  }
)((props) => <Tab {...props} TabIndicatorProps={{ children: <span /> }} />);
=======
/* tab item có indicator custom căn giữa */
const TabIndicatorCenter = withStyles(
  (theme) => ({
    root: {
      textTransform: "none",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.subtitle1.fontSize,
      marginRight: theme.spacing(6),
      minWidth: 0,
      minHeight: theme.spacing(4),
      paddingRight: 0,
      paddingLeft: 0,
      "&:focus": {
        opacity: 1,
      },
    },
    selected: {
      fontWeight: theme.typography.fontWeightMedium,
    },
  }),
  {
    name: "TabIndicatorCenter",
  }
)((props) => <Tab disableRipple {...props} />);
>>>>>>> 15fdd893217c049d35aba22d770e8cccea35594a
export default TabIndicatorCenter;
