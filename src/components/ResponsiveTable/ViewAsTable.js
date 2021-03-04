import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
// dùng check responsive table

import ResultNumber from "./ResultNumber";
import TableCellCustom from "./TableCellCustom";

import { tableDefaultProps, tablePropTypes } from "./tableConfig";
import TableRowStriped from "./TableRowStriped";

/* table xem dạng thường */
export default function ViewAsTable(props) {
  const {
    rows,
    columns,
    title,
    showResultNumber,
    showNumberOrder,
    dense,
    striped,
    CheckboxAllComponent,
    CheckboxItemComponent,
    RowActionComponent,
    noDataText,
  } = props;

  const MyTableRow = striped ? TableRowStriped : TableRow; // check striped style

  return (
    <div>
      {showResultNumber && <ResultNumber length={rows.length} />}
      <TableContainer component={Paper} elevation={0} variant="outlined">
        <Table
          stickyHeader
          aria-label={title}
          size={dense ? "small" : undefined}
        >
          <TableHead>
            <TableRow>
              {/* checkbox all */}
              {CheckboxAllComponent && (
                <TableCellCustom padding="checkbox">
                  <CheckboxAllComponent />
                </TableCellCustom>
              )}

              {/* số thứ tự */}
              {showNumberOrder && <TableCellCustom>No.</TableCellCustom>}

              {columns.map((column, colIndex) => {
                const colKey = colIndex;
                return (
                  <TableCellCustom key={colKey} {...column.props}>
                    {column.label}
                  </TableCellCustom>
                );
              })}

              {/* row action */}
              {RowActionComponent && <TableCellCustom>#</TableCellCustom>}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((rowData, rowIndex) => {
              const rowKey = rowIndex;
              return (
                <MyTableRow key={rowKey} hover tabIndex={-1}>
                  {/* checkbox item */}
                  {CheckboxItemComponent && (
                    <TableCell padding="checkbox">
                      <CheckboxItemComponent {...rowData} />
                    </TableCell>
                  )}

                  {/* số thứ tự */}
                  {showNumberOrder && <TableCell>{rowIndex + 1}</TableCell>}

                  {columns.map((column, colIndex) => {
                    const colKey = colIndex;
                    const value = rowData[column.id];
                    return (
                      <TableCell key={colKey} {...column.props}>
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}

                  {/* row action */}
                  {RowActionComponent && (
                    <TableCell>
                      <RowActionComponent {...rowData} />
                    </TableCell>
                  )}
                </MyTableRow>
              );
            })}

            {/* Không có dữ liệu */}
            {rows.length === 0 && (
              <MyTableRow>
                <TableCell
                  colSpan={
                    columns.length +
                    (CheckboxItemComponent ? 1 : 0) +
                    (showNumberOrder ? 1 : 0)
                  }
                  align="center"
                >
                  {noDataText}
                </TableCell>
              </MyTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
ViewAsTable.propTypes = tablePropTypes;
ViewAsTable.defaultProps = tableDefaultProps;
