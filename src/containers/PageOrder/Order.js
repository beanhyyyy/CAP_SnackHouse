import { Box, Typography } from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
import React from "react";
import ResponsiveTable from "../../components/ResponsiveTable";
import { rowsOrder, columnsOrder } from "./DefineTableOrder";

function Order() {
  return (
    <div>
      <Typography variant="h6">Đơn hàng</Typography>
      <Box mt={2}>
        <ResponsiveTable
          rows={rowsOrder}
          columns={columnsOrder}
          countResults
          showNumberOrder
          CheckboxAllComponent={CheckBox}
          CheckboxItemComponent={CheckBox}
        />
      </Box>
    </div>
  );
}

export default Order;
