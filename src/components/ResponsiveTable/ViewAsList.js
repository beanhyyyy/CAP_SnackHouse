import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

import ResultNumber from "./ResultNumber";
import { tableDefaultProps, tablePropTypes } from "./tableConfig";
import ListItemIconSmall from "./ListItemIconSmall";
/* table xem dạng list */
export default function ViewAsList(props) {
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

  return (
    <div>
      {showResultNumber && <ResultNumber length={rows.length} />}
      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      <Paper variant="outlined">
        <List dense={dense} disablePadding>
          {/* checkbox all */}
          {CheckboxAllComponent && (
            <ListItem divider>
              <ListItemText primary={<CheckboxAllComponent />} />
            </ListItem>
          )}

          {rows.map((rowData, rowIndex) => {
            const rowKey = rowIndex;
            return (
              <ListItem
                key={rowKey}
                alignItems="flex-start"
                divider={rowIndex < rows.length - 1}
                selected={striped && rowIndex % 2 === 0}
              >
                {/* số thứ tự */}
                {showNumberOrder && (
                  <ListItemIconSmall>
                    <Typography>{rowIndex + 1}</Typography>
                  </ListItemIconSmall>
                )}

                {/* checkbox item */}
                {CheckboxItemComponent && (
                  <ListItemIconSmall>
                    <CheckboxItemComponent {...rowData} />
                  </ListItemIconSmall>
                )}

                <ListItemText
                  primary={
                    <React.Fragment>
                      {columns.map((column, colIndex) => {
                        const colKey = colIndex;
                        const value = rowData[column.id];
                        return (
                          <Typography component="div" gutterBottom key={colKey}>
                            {column.label}:&nbsp;
                            {column.format ? column.format(value) : value}
                          </Typography>
                        );
                      })}
                      {RowActionComponent && (
                        <RowActionComponent {...rowData} />
                      )}
                    </React.Fragment>
                  }
                  primaryTypographyProps={{
                    component: "div",
                  }}
                />
              </ListItem>
            );
          })}

          {/* Không có dữ liệu */}
          {rows.length === 0 && (
            <ListItem>
              <ListItemText
                primary={noDataText}
                primaryTypographyProps={{
                  align: "center",
                }}
              />
            </ListItem>
          )}
        </List>
      </Paper>
    </div>
  );
}

ViewAsList.propTypes = tablePropTypes;
ViewAsList.defaultProps = tableDefaultProps;
