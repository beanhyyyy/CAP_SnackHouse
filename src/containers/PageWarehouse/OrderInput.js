import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Button,
  CardContent,
} from "@material-ui/core";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@material-ui/lab";

import firebaseDB from "../../firebase";
import { useHistory } from "react-router";
import CloseIcon from "@material-ui/icons/Close";

function OrderInput() {
  // router
  let history = useHistory();

  // Create
  const addTest = (obj) => {
    firebaseDB
      .database()
      .ref()
      .child("Warehouse")
      .push(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          alert("Success");
          history.go("/admin/PageWarehouse");
        }
      });
  };

  const initialFieldValues = {
    image: "Image",
    status: 'input'
  };

  var [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    addTest(values);
  };

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
        <Typography variant="h6">Tạo phiếu nhập</Typography>
        <CardContent>
          <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Mã kho	"
                    placeholder="Nhập tên ... "
                    size="small"
                    fullWidth
                    variant="outlined"
                    name="codeWarehouse"
                    value={values.codeWarehouse}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Tên kho	"
                    placeholder="Nhập tên ... "
                    size="small"
                    fullWidth
                    variant="outlined"
                    name="nameWarehouse"
                    value={values.nameWarehouse}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            {/* --------------------- */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Điểm bán"
                    placeholder="Nhập tên ... "
                    size="small"
                    fullWidth
                    variant="outlined"
                    name="namePoint"
                    value={values.namePoint}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Địa chỉ"
                    placeholder="Nhập tên ... "
                    size="small"
                    fullWidth
                    variant="outlined"
                    name="address"
                    value={values.address}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            {/* --------------------- */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <TextField
                    label="Tên nguyên liệu"
                    placeholder="Nhập tên ... "
                    size="small"
                    fullWidth
                    variant="outlined"
                    name="nameMaterial"
                    value={values.nameMaterial}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Số lượng"
                    placeholder="Nhập tên ... "
                    size="small"
                    fullWidth
                    variant="outlined"
                    name="amount"
                    value={values.amount}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            {/* --------------------- */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <TextField
                    label="Người tạo"
                    placeholder="Nhập tên ... "
                    size="small"
                    fullWidth
                    variant="outlined"
                    name="nameCreate"
                    value={values.nameCreate}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Ngày tạo"
                    placeholder="Nhập tên ... "
                    size="small"
                    fullWidth
                    variant="outlined"
                    name="dateCreate"
                    value={values.dateCreate}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
            </Grid>       
            {/* --------------------- */}
            <Grid item xs={12}>
              <Grid container spacing={2} justify="flex-end">
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Xác nhận
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<CloseIcon />}
                  >
                    Hủy
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </div>
  );
}

export default OrderInput;
const options = [{ title: "Chọn" }];
