import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";

function CreateAuthorization() {
  return (
    <div>
      <Typography variant="h6">Tạo phân quyền</Typography>
      <Box>
        <Grid container>
          <Grid item lg={3} sm={2} xs={false}></Grid>
          <Grid item lg={6} sm={8} xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Tên quyền"
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="email"
                  label="E-mail"
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Password"
                  placeholder="Ít nhất 8 kí tự
"
                  type="password"
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Phone number"
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained">Hủy</Button>
                &nbsp;&nbsp;
                <Button variant="contained" color="primary">
                  Xác nhận
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3} sm={2} xs={false}></Grid>
        </Grid>
        <Box></Box>
      </Box>
    </div>
  );
}

export default CreateAuthorization;
