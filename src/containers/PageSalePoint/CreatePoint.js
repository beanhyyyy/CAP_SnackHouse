import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

import firebaseDB from "../../firebase";
import { useHistory } from "react-router";

export default function CreatePoint() {
  let history = useHistory();

  // Create
  const addTest = (obj) => {
    firebaseDB
      .database()
      .ref()
      .child("Point")
      .push(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          alert("Tạo chi nhánh thành công");
          history.go("/admin/PageSalePoint");
        }
      });
  };

  const initialFieldValues = {
    pointImage: "",
    dateCreate: new Date().toString(),
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
      <Typography variant="h6">Tạo chi nhánh</Typography>
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
                  name="pointImage"
                  value={values.pointImage}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
                    {values.pointImage === "" ? (
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
                        <CardMedia component="img" image={values.pointImage} />
                      </CardContent>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={9} sm={8} xs={12}>
            <Grid container spacing={2}>
              <Grid item md={4} sm={6} xs={12}>
                <TextField
                  label="Tên"
                  placeholder="Nhập tên ... "
                  size="small"
                  fullWidth
                  variant="outlined"
                  name="pointName"
                  value={values.pointName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <TextField
                  label="Mã chi nhánh"
                  placeholder="Nhập mã chi nhánh... "
                  size="small"
                  fullWidth
                  variant="outlined"
                  name="pointId"
                  value={values.pointId}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <TextField
                  label="Địa chỉ"
                  placeholder="Nhập địa chỉ chi nhánh... "
                  variant="outlined"
                  size="small"
                  name="pointAddress"
                  fullWidth
                  value={values.pointAddress}
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
