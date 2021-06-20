import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import ResponsiveTable from "../../components/ResponsiveTable";
import { rowsOrderStatus, columnsOrderStatus } from "./DefineTableOrder";

function OrderStatus() {
  return (
    <div>
      <Box mb={2}>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              id="input-with-icon-textfield"
              variant="outlined"
              size="small"
              fullWidth
              label="Tìm kiếm"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Autocomplete
              options={options}
              getOptionLabel={(option) => option.title}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Chi nhánh"
                  variant="outlined"
                  size="small"
                />
              )}
            />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Autocomplete
              options={options}
              getOptionLabel={(option) => option.title}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Chức vụ"
                  variant="outlined"
                  size="small"
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h6">Trạng thái đơn hàng</Typography>
      <Box mt={2}>
        <ResponsiveTable
          rows={rowsOrderStatus}
          columns={columnsOrderStatus}
          countResults
          showNumberOrder
          CheckboxAllComponent={CheckBox}
          CheckboxItemComponent={CheckBox}
        />
      </Box>
    </div>
  );
}

export default OrderStatus;

const options = [{ title: "Chọn" }];
