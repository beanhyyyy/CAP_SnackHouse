import React from "react";
import { Tabs, withStyles } from "@material-ui/core";

/* tabs có indicator căn giữa */
const TabsIndicatorCenter = withStyles(
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
)((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
export default TabsIndicatorCenter;
