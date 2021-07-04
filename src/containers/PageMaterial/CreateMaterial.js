import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormHelperText,
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

export default function CreateMaterial() {
  let history = useHistory();

  // Create
  const addTest = (obj) => {
    firebaseDB
      .database()
      .ref()
      .child("Material")
      .push(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          alert("Thêm mới thành công");
          history.go("/admin/material");
        }
      });
  };

  const initialFieldValues = {
    materialImage: "",
    dateCreate: new Date().toString(),
  };

  var [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    if (values.materialName) {
      values.materialName = "Nguyên Liệu: " + values.materialName;
    }
    if (
      values.materialName !== "" &&
      values.materialImage !== "" &&
      values.materialId !== ""
    ) {
      addTest(values);
    } else {
      alert("Các thông tin chưa hợp lệ.");
    }
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
                  name="materialImage"
                  value={values.materialImage}
                  onChange={handleInputChange}
                />
                {values.materialImage ? (
                  ""
                ) : (
                  <FormHelperText>
                    <Typography variant="inherit" color="error">
                      Thông tin nhập không hợp lệ
                    </Typography>
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
                    {values.materialImage === "" ? (
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
                        <CardMedia
                          component="img"
                          image={values.materialImage}
                        />
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
                  label="Tên nguyên liệu"
                  placeholder="Nhập tên ... "
                  size="small"
                  fullWidth
                  variant="outlined"
                  name="materialName"
                  value={values.materialName}
                  onChange={handleInputChange}
                />
                {values.materialName ? (
                  ""
                ) : (
                  <FormHelperText>
                    <Typography variant="inherit" color="error">
                      Thông tin nhập không hợp lệ
                    </Typography>
                  </FormHelperText>
                )}
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <TextField
                  label="Mã nguyên liệu"
                  placeholder="Mã nguyên liệu... "
                  size="small"
                  fullWidth
                  variant="outlined"
                  name="materialId"
                  value={values.materialId}
                  onChange={handleInputChange}
                />
                {values.materialId ? (
                  ""
                ) : (
                  <FormHelperText>
                    <Typography variant="inherit" color="error">
                      Thông tin nhập không hợp lệ
                    </Typography>
                  </FormHelperText>
                )}
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
                Tạo
              </Button>
              &nbsp;&nbsp;
              <Button
                color="secondary"
                variant="outlined"
                startIcon={<CloseIcon />}
              >
                Hủy
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
