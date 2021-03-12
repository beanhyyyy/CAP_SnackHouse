import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@material-ui/lab";

function OrderOutput() {
  return (
    <div>
      <Box mb={3}>
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
      <Box>
        <Typography variant="h6">Tạo phiếu xuất</Typography>
        <Box>
          <Grid container spacing={3}>
            <Grid item md={3} sm={false}></Grid>
            <Grid item md={6} sm={12}>
              <Autocomplete
                options={option1}
                getOptionLabel={(option) => option.title}
                fullWidth
                defaultValue={option1[0]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Điểm bán"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
            </Grid>
            <Grid item md={3} sm={false}></Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item md={3} sm={false}></Grid>
                <Grid item md={4} sm={8}>
                  <Typography>Tên nguyên liệu</Typography>
                </Grid>
                <Grid item md={2} sm={4}>
                  <Typography>Số lượng</Typography>
                </Grid>
                <Grid item md={3} sm={false}></Grid>
                <Grid item md={3} sm={false}></Grid>
                <Grid item md={4} sm={8}>
                  <Typography>
                    <Autocomplete
                      options={material}
                      getOptionLabel={(option) => option.title}
                      fullWidth
                      defaultValue={material[0]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Tên nguyên liệu"
                          variant="outlined"
                          size="small"
                        />
                      )}
                    />
                  </Typography>
                </Grid>
                <Grid item md={2} sm={4}>
                  <Typography>
                    <Autocomplete
                      options={amount}
                      getOptionLabel={(option) => option.title}
                      fullWidth
                      defaultValue={amount[0]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Số lượng"
                          variant="outlined"
                          size="small"
                        />
                      )}
                    />
                  </Typography>
                </Grid>
                <Grid item md={3} sm={false}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <IconButton color="primary">
                  <AddIcon />
                </IconButton>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Button variant="outlined" color="secondary">
                  Hủy
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="outlined" color="primary">
                  Xác nhận
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default OrderOutput;
const options = [{ title: "Chọn" }];
const option1 = [{ title: "Tên điểm bán" }];
const material = [{ title: "Nguyên liệu 1" }];
const amount = [{ title: "1" }];
