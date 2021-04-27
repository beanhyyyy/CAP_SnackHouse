/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  CardContent,
  CardMedia,
  Card,
  Divider,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import firebaseDB from "../../firebase";
import { useHistory } from "react-router";

import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

function CreateInput() {
  // router
  let history = useHistory();

  const [values, setValues] = useState({
    dateCreate: new Date().getDate().toString(),
  });

  // Data of Material
  const [dataMaterial, setDataMaterial] = useState();

  // Data of Warehouse
  const [dataImage, setDataImage] = useState("");
  const [dataId, setDataId] = useState("");
  const [dataName, setDataName] = useState("");
  const [dataAddress, setDataAddress] = useState("");
  const [dataIdObject, setDataIdObject] = useState();
  const [dataMaterialTotal, setDataMaterialTotal] = useState();

  // data nhap vao vô đây
  const [data, setData] = useState({});
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
        setDataMaterial(test);
      });
  }, []);

  // console.log("dataMaterial", dataMaterial);

  // Effect Warehouse
  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("Warehouse")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          var arrayImage = [];
          var arrayId = [];
          var arrayName = [];
          var arrayAddress = [];

          Object.keys(snapshot.val()).map((id) =>
            arrayImage.push(snapshot.val()[id].warehouseImage)
          );
          Object.keys(snapshot.val()).map((id) =>
            arrayId.push(snapshot.val()[id].warehouseId)
          );
          Object.keys(snapshot.val()).map((id) =>
            arrayName.push(snapshot.val()[id].warehouseName)
          );
          Object.keys(snapshot.val()).map((id) =>
            arrayAddress.push(snapshot.val()[id].warehouseAddress)
          );

          Object.keys(snapshot.val()).map((id) =>
            setDataMaterialTotal(snapshot.val()[id].warehouseMaterial)
          );

          setDataIdObject(Object.keys(snapshot.val()));
        }

        setDataImage(arrayImage);
        setDataId(arrayId);
        setDataName(arrayName);
        setDataAddress(arrayAddress);
        // console.log("snapshot.val()", snapshot.val());
      });
  }, []);

  useEffect(() => {
    var obj = { warehouseId: dataId.toString() };
    Object.assign(values, obj);
  }, [dataId]);

  useEffect(() => {
    var obj = { warehouseName: dataName.toString() };
    Object.assign(values, obj);
  }, [dataName]);

  useEffect(() => {
    var obj = { warehouseImage: dataImage.toString() };
    Object.assign(values, obj);
  }, [dataImage]);

  useEffect(() => {
    var obj = { warehouseAddress: dataAddress.toString() };
    Object.assign(values, obj);
  }, [dataAddress]);

  var firstData =
    dataMaterialTotal &&
    dataMaterialTotal.reduce(function (result, item) {
      var key = Object.keys(item)[0]; //first property: a, b, c
      result[key] = item[key];
      return result;
    }, {});

  useEffect(() => {
    setData(firstData);
  }, [dataMaterialTotal]);

  const handleInputChange = (event) => {
    const dataTagetValue = +event.target.value;
    data[event.target.name] = firstData[event.target.name] ? firstData[event.target.name] + dataTagetValue : dataTagetValue;

    setData(data);

    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleInputChangeCreate = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // Create
  const addTest = (obj) => {
    firebaseDB
      .database()
      .ref()
      .child("WarehouseInput")
      .push(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          history.go("/admin/PageWarehouse");
        }
      });
  };

  const addOrEdit = (obj) => {
    if (dataIdObject === "") {
      firebaseDB.child("Warehouse").push(obj, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else {
      firebaseDB
        .database()
        .ref()
        .child(`Warehouse/${dataIdObject}`)
        .set(obj, (err) => {
          if (err) {
            console.log(err);
          } else {
            alert("Success");
          }
        });
    }
  };
  // console.log(values, "values");

  // Submit
  const handleSubmit = (e) => {
    const warehouseMaterial = [];
    const keys = Object.keys(data);
    const valuesIn = Object.values(data);
    for (let i = 0; i < keys.length; i++) {
      const obj = {};
      obj[keys[i]] = valuesIn[i];
      warehouseMaterial.push(obj);
    }

    addOrEdit({ ...values, warehouseMaterial });
    addTest(values);
  };

  return (
    <div>
      <Typography variant="h6">Tạo phiếu nhập kho</Typography>
      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid item md={3} sm={4} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Image Link (JPG)"
                  size="small"
                  fullWidth
                  variant="outlined"
                  name="warehouseImage"
                  value={dataImage}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
                    {dataImage === "" ? (
                      <>
                        <Box display="flex" justifyContent="center">
                          <Typography color="textSecondary">
                            {" "}
                            Not Image
                          </Typography>
                        </Box>
                      </>
                    ) : (
                      <CardContent>
                        <CardMedia component="img" image={dataImage} />
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
                  value={dataId}
                  disabled
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
                  value={dataName}
                  disabled
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
                  value={dataAddress}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6">Thông tin</Typography>
                    </Grid>
                    {/* <Grid item sm={6} xs={12}>
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
                    <Grid item sm={6} xs={12}>
                      <TextField
                        label="Người tạo"
                        placeholder="Nhập tên người tạo... "
                        variant="outlined"
                        size="small"
                        name="createName"
                        fullWidth
                        value={values.createName}
                        onChange={handleInputChangeCreate}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">Nguyên liệu</Typography>
                    </Grid>

                    {dataMaterial
                      ? dataMaterial.map((itemTest, index) => {
                          const key = index;
                          return (
                            <React.Fragment key={key}>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  label="Tên nguyên liệu"
                                  size="small"
                                  variant="outlined"
                                  disabled
                                  fullWidth
                                  value={Object.keys(itemTest)}
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  id={index}
                                  label="Số lượng"
                                  size="small"
                                  variant="outlined"
                                  fullWidth
                                  type="number"
                                  name={Object.keys(itemTest)}
                                  // value={values.value}
                                  // value={Object.values(itemTest)}
                                  onChange={handleInputChange}
                                />
                              </Grid>
                            </React.Fragment>
                          );
                        })
                      : null}
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}></Box>
      <Box mt={2} display="flex" justifyContent="flex-end">
        <Button
          variant="outlined"
          color="primary"
          startIcon={<CheckIcon />}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        &nbsp;&nbsp;
        <Button color="secondary" variant="outlined" startIcon={<CloseIcon />}>
          Cancel
        </Button>
      </Box>
    </div>
  );
}

export default CreateInput;
