import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
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
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
          <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Điểm bán"
                      placeholder="Nhập tên ... "
                      size="small"
                      fullWidth
                      variant="outlined"
                      name="name"
                      value={values.name}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Điểm bán"
                      placeholder="Nhập tên ... "
                      size="small"
                      fullWidth
                      variant="outlined"
                      name="name"
                      value={values.name}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Grid container spacing={1}>
                  <Grid item md={4} sm={8}>
                    <Typography>Tên nguyên liệu</Typography>
                  </Grid>
                  <Grid item md={2} sm={4}>
                    <Typography>Số lượng</Typography>
                  </Grid>
                  <Grid item md={3} sm={false}></Grid>
                  <Grid item md={3} sm={false}></Grid>
                  <Grid item md={4} sm={8}>
                    <TextField
                      label="Tên nguyên liệu"
                      placeholder="Nhập tên ... "
                      size="small"
                      fullWidth
                      variant="outlined"
                      name="name"
                      value={values.name}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item md={2} sm={4}>
                    <TextField
                      label="Số lượng"
                      placeholder="Nhập tên ... "
                      size="small"
                      fullWidth
                      variant="outlined"
                      name="name"
                      value={values.name}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
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
      </Box>
    </div>
  );
}

export default OrderInput;
const options = [{ title: "Chọn" }];
const option1 = [{ title: "Tên điểm bán" }];
const material = [{ title: "Nguyên liệu 1" }];
const amount = [{ title: "1" }];
