import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ResponsiveTable from "../../components/ResponsiveTable";
import { CheckBox } from "@material-ui/icons";
import { columnsSalePoint, rowsSalePoint } from "./DefineTableSalePoint";

function Branch() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextField
            id="input-with-icon-textfield"
            variant="outlined"
            size="small"
            fullWidth
            label="Search"
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
      <Box mt={3}>
        <Typography variant="h6">Danh sách chi nhánh</Typography>
      </Box>
      <Box my={3}>
        <ResponsiveTable
          rows={rowsSalePoint}
          columns={columnsSalePoint}
          countResults
          showNumberOrder
          CheckboxAllComponent={CheckBox}
          CheckboxItemComponent={CheckBox}
        />
      </Box>
    </div>
  );
}

export default Branch;

const options = [{ title: "Chọn" }];
