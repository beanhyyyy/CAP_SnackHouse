import { TableRow, withStyles } from "@material-ui/core";

/* striped row background color */
const TableRowStriped = withStyles(
  (theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.grey[50],
      },
    },
  }),
  { name: "AtomTableRowStriped" }
)(TableRow);

export default TableRowStriped;
