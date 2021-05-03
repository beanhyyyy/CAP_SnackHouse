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
  // MenuItem,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import firebaseDB from "../../firebase";
import { useHistory } from "react-router";

import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";

export default function CreateWarehouse() {
  // router
  let history = useHistory();

  // Data of Material
  const [dataMaterialName, setDataMaterialName] = useState();

  const [values, setValues] = useState({
    warehouseImage: "",
  });

  // Data of Point
  // const [dataPoint, setDataPoint] = useState();

  // const [point, setPoint] = React.useState();

  // Material
  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("Material")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          var test = [];
          Object.keys(snapshot.val()).map((id) =>
            test.push({ [snapshot.val()[id].materialName]: 0 })
          );
        }
        setDataMaterialName(test);
      });
  }, []);

  useEffect(() => {
    var test2 = {
      warehouseImage: "",
      warehouseMaterial: dataMaterialName,
    };

    setValues(test2);
  }, [dataMaterialName]);

  // Effect Point
  // useEffect(() => {
  //   firebaseDB
  //     .database()
  //     .ref()
  //     .child("Point")
  //     .on("value", (snapshot) => {
  //       if (snapshot.val() != null) {
  //         var test = [];
  //         Object.keys(snapshot.val()).map((id) =>
  //           test.push(snapshot.val()[id].pointName)
  //         );
  //       }
  //       setDataPoint(test);
  //     });
  // }, []);

  // useEffect(() => {
  //   setValues({ ...values, namePoint: point });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [point]);

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

  const handleInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    addTest(values);
  };

  // Handle Select Point
  // const handleChangePoint = (event) => {
  //   setPoint(event.target.value);
  // };

  console.log(values);

  return (
    <div>
      <Typography variant="h6">Tạo kho</Typography>
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
                    {values.warehouseImage === "" ? (
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
                          image={values.warehouseImage}
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
              <Grid item md={4} sm={6} xs={12}>
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
              {/* <Grid item md={4} sm={6} xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  select
                  label="Chi nhánh"
                  placeholder="Nhập chi nhánh... "
                  name="pointName"
                  size="small"
                  value={point}
                  onChange={handleChangePoint}
                >
                  {dataPoint &&
                    dataPoint.map((option) => (
                      <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid> */}
              <Grid item md={4} sm={6} xs={12}>
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
              <Grid item md={4} sm={6} xs={12}>
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
