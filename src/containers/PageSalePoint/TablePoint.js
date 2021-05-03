import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";

import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import firebaseDB from "../../firebase";

export default function CreatePoint() {
  // View
  const [data, setData] = useState({});

  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("Point")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setData({
            ...snapshot.val(),
          });
      });
  }, []);

  const onDelete = (id) => {
    firebaseDB
      .database()
      .ref()
      .child(`Point/${id}`)
      .remove((err) => {
        if (err) {
          console.log(err);
        } else {
          alert("Xóa chi nhánh thành công");
        }
      });
  };

  // Dialog Detail
  function ViewDialog({ propsId, propsData }) {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    const handleClickOpen = () => {
      setOpen(true);
    };

    return (
      <div>
        <IconButton>
          <RemoveRedEyeIcon onClick={handleClickOpen} />
        </IconButton>
        <Dialog
          fullWidth
          maxWidth="sm"
          open={open}
          scroll="body"
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Thông tin chi tiết</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CardMedia
                  component="img"
                  src={propsData[propsId].pointImage}
                  variant="square"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Link hình"
                  value={propsData[propsId].pointImage}
                  fullWidth
                  variant="outlined"
                  disabled
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mã chi nhánh"
                  value={propsData[propsId].pointId}
                  fullWidth
                  variant="outlined"
                  disabled
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Tên chi nhánh"
                  value={propsData[propsId].pointName}
                  fullWidth
                  variant="outlined"
                  disabled
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Địa chỉ chi nhánh"
                  value={propsData[propsId].pointAddress}
                  fullWidth
                  variant="outlined"
                  disabled
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Thời gian cập nhật"
                  value={propsData[propsId].dateCreate}
                  fullWidth
                  variant="outlined"
                  disabled
                  size="small"
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Xác nhận
            </Button>
            <Button onClick={handleClose} autoFocus>
              Đóng
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  // Dialog Edit
  function ViewDialogEdit({ propsId, propsData }) {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    const handleClickOpen = () => {
      setOpen(true);
    };

    const [values, setValues] = useState({
      dateCreate: new Date().toString(),
    });

    var obj1 = propsData[propsId];

    useEffect(() => {
      Object.assign(obj1, {dateCreate: new Date().toString()})
      setValues(obj1);
    }, [obj1]);

    const handleChangeEdit = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };

    const addOrEdit = (obj) => {
      if (propsId === "") {
        firebaseDB.child("Point").push(obj, (err) => {
          if (err) {
            console.log(err);
          }
        });
      } else {
        firebaseDB
          .database()
          .ref()
          .child(`Point/${propsId}`)
          .set(obj, (err) => {
            if (err) {
              console.log(err);
            } else {
              alert("Cập nhật thành công");
            }
          });
      }
    };
  
    console.log(values);

    // Submit
    const handleSubmit = (e) => {
      addOrEdit(values);
    };

    return (
      <div>
        <IconButton>
          <EditIcon onClick={handleClickOpen} />
        </IconButton>
        <Dialog
          fullWidth
          maxWidth="sm"
          open={open}
          scroll="body"
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Chỉnh sửa</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CardMedia
                  component="img"
                  src={values.obj1?.pointImage}
                  variant="square"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Link hình"
                  defaultValue={obj1?.pointImage}
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="pointImage"
                  onChange={handleChangeEdit}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mã chi nhánh"
                  defaultValue={obj1?.pointId}
                  fullWidth
                  variant="outlined"
                  disabled
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Tên chi nhánh"
                  defaultValue={obj1?.pointName}
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="pointName"
                  onChange={handleChangeEdit}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Địa chỉ chi nhánh"
                  defaultValue={obj1?.pointAddress}
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="pointAddress"
                  onChange={handleChangeEdit}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Thời gian cập nhật"
                  defaultValue={propsData[propsId].dateCreate}
                  fullWidth
                  variant="outlined"
                  disabled
                  size="small"
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} color="primary">
              Xác nhận
            </Button>
            <Button onClick={handleClose} autoFocus>
              Đóng
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  return (
    <div>
      <Box mb={2}>
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
      <Typography variant="h6">Danh sách nguyên liệu</Typography>
      <br />
      {/* <Box mt={2}>
        <ResponsiveTable
          rows={rowsMaterial}
          columns={columnsMaterial}
          countResults
          showNumberOrder
          CheckboxAllComponent={CheckBox}
          CheckboxItemComponent={CheckBox}
        />
      </Box> */}
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Hình ảnh </TableCell>
              <TableCell align="right">Tên</TableCell>
              <TableCell align="right">Mã </TableCell>
              <TableCell align="right">Địa chỉ</TableCell>
              <TableCell align="right">Chức năng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(data).reverse().map((id, index) => {
              const key = index;
              return (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {key + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <CardMedia
                      component="img"
                      image={data[id].pointImage}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </TableCell>
                  <TableCell align="right">{data[id].pointId}</TableCell>
                  <TableCell component="th" scope="row" align="right">
                    {data[id].pointName}
                  </TableCell>
                  <TableCell align="right">{data[id].pointAddress}</TableCell>
                  <TableCell>
                    <Grid container justify="flex-end">
                      <Grid item>
                        <ViewDialog propsId={id} propsData={data} />
                      </Grid>
                      <Grid item>
                        <ViewDialogEdit propsId={id} propsData={data} />
                      </Grid>
                      <Grid item>
                        <IconButton
                          onClick={() => {
                            onDelete(id);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const options = [{ title: "Chọn" }];
