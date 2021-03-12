import { Box, Grid, InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import CardShadow from "../../components/Card/CardShadow";
import { Autocomplete } from "@material-ui/lab";
import ResponsiveTable from "../../components/ResponsiveTable";
import {
  columnsInventoryReport,
  rowsInventoryReport,
} from "./DefineTableInventoryReport";

const options = [{ title: "Chọn" }];

function PageInventoryReport() {
  return (
    <div>
      <CardShadow>
        <Box>
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
        </Box>
        <Box mt={2}>
          <ResponsiveTable
            rows={rowsInventoryReport}
            columns={columnsInventoryReport}
            countResults
            showNumberOrder
          />
        </Box>
      </CardShadow>
    </div>
  );
}

export default PageInventoryReport;
