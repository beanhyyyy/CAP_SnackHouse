import React from "react";
import { Tab, withStyles } from "@material-ui/core";

// const useStyle = makeStyles((theme) => ({
//   indicator: {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "transparent",
//     height: 3,
//     "& > span": {
//       maxWidth: 50,
//       width: "100%",
//       backgroundColor: theme.palette.primary.main,
//     },
//   },
// }));
/* tabs có indicator căn giữa */
const TabIndicatorCenter = withStyles(
  (theme) => ({
    root: {
      minHeight: theme.spacing(4),
    },
    // indicator: {
    //   display: "flex",
    //   justifyContent: "center",
    //   backgroundColor: "transparent",
    //   height: 3,
    //   "& > span": {
    //     maxWidth: 50,
    //     width: "100%",
    //     backgroundColor: theme.palette.primary.main,
    //   },
    // },
  }),
  {
    name: "AtomTabsIndicatorCenter",
  }
)((props) => {
  // const classes = useStyle();
  return <Tab {...props} tabindicatorprops={{ children: <span /> }} />;
});
export default TabIndicatorCenter;
