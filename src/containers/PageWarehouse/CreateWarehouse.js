import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  CardContent,
  CardMedia,
  IconButton,
  Card,
} from "@material-ui/core";
import React, { useState } from "react";

import firebaseDB from "../../firebase";
import { useHistory } from "react-router";

import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";

export default function CreateWarehouse() {
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
    warehouseImage: '',
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
      <Typography variant="h6">Tạo mới nguyên vật liệu</Typography>
      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid item md={3} sm={4} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Image Link (JPG)"
                  placeholder="Nhập đường dẫn ... "
                  size="small"
                  fullWidth
                  variant="outlined"
                  name="warehouseImage"
                  value={values.warehouseImage}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
                    {values.warehouseImage === '' ? (
                      <>
                        <Box display="flex" justifyContent="center">
                          <Typography color="textSecondary">Image</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                          <IconButton color="primary" variant="outlined">
                            <AddIcon />
                          </IconButton>
                        </Box>
                      </>
                    ) : (
                      <CardContent>
                        <CardMedia component="img" image={values.warehouseImage} />
                      </CardContent>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={9} sm={8} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={4} sm={6} xs={12}>
                <TextField
                  label="Mã kho	"
                  placeholder="Nhập mã kho... "
                  size="small"
                  fullWidth
                  variant="outlined"
                  name="warehouseId"
                  value={values.warehouseId}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <TextField
                  label="Tên kho"
                  placeholder="Nhập tên kho... "
                  size="small"
                  fullWidth
                  variant="outlined"
                  name="warehouseName"
                  value={values.warehouseName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <TextField
                  label="Chi nhánh"
                  placeholder="Nhập chi nhánh... "
                  variant="outlined"
                  size="small"
                  name="pointName"
                  fullWidth
                  value={values.pointName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <TextField
                  label="Địa chỉ"
                  placeholder="Nhập địa chỉ... "
                  variant="outlined"
                  size="small"
                  name="warehouseAddress"
                  fullWidth
                  value={values.warehouseAddress}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <TextField
                  label="Người tạo"
                  placeholder="Nhập tên người tạo... "
                  variant="outlined"
                  size="small"
                  name="createName"
                  fullWidth
                  value={values.createName}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="outlined"
                color="primary"
                startIcon={<CheckIcon />}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              &nbsp;&nbsp;
              <Button
                color="secondary"
                variant="outlined"
                startIcon={<CloseIcon />}
              >
                Cancel
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}