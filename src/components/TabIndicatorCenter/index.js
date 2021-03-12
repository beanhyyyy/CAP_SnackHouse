import React from "react";
import { Tab, withStyles } from "@material-ui/core";

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
export default TabIndicatorCenter;
