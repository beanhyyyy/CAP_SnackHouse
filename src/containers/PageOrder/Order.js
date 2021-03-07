import { Box, Typography } from "@material-ui/core";
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
        />
      </Box>
    </div>
  );
}

export default Order;
