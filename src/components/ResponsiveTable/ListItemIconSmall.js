import { withStyles } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const ListItemIconSmall = withStyles(
  (theme) => ({
    root: {
      minWidth: theme.spacing(5),
    },
  }),
  { name: "ListItemIconSmall" }
)(ListItemIcon);
export default ListItemIconSmall;
