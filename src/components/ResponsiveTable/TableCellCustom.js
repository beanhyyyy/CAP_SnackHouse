import { TableCell, withStyles } from "@material-ui/core";

/* style table cell */
const TableCellCustom = withStyles(
  (theme) => ({
    head: {
      fontWeight: theme.typography.fontWeightBold,
      backgroundColor: "#f0f6fc",
    },
    body: {
      fontSize: theme.typography.fontSize,
    },
  }),
  { name: "AtomTableCellCustom" }
)(TableCell);

export default TableCellCustom;
