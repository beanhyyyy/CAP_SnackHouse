/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {
  Box,
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
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";

import firebaseDB from "../../firebase";

import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import _slice from "lodash/slice";

function InputWarehouse() {
  // View
  const [data, setData] = useState({});

  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("WarehouseInput")
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
      .child(`WarehouseInput/${id}`)
      .remove((err) => {
        if (err) {
          console.log(err);
        } else {
          alert("Xóa phiếu nhập thành công");
        }
      });
  };

  function testConfirmDialog(id) {
    // eslint-disable-next-line no-restricted-globals
    var result = confirm("Bạn có muốn thực hiện thao tác này?");

    if (result) {
      onDelete(id);
    } else {
      alert("Đã hủy!");
    }
  }

  // Dialog

  function ViewDialog({ propsId, propsData }) {
    console.log("propsssssssssssss", propsData);
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
              <Grid item xs={4}>
                {Object.keys(propsData)?.map((item, index) => {
                  const key = index;
                  return (
                    <Grid container spacing={2} key={key}>
                      <Grid item xs={12}>
                        <TextField
                          disabled
                          size="small"
                          fullWidth
                          defaultValue={
                            (item === "warehouseAddress" && ". Địa chỉ") ||
                            (item === "warehouseId" && ". Mã kho") ||
                            (item === "warehouseImage" && ". Link hình") ||
                            (item === "warehouseName" && ". Tên kho") ||
                            (item === "dateCreate" && ". Ngày tạo") ||
                            (item === "createName" && ". Người tạo") ||
                            (item === "namePoint" && ". Tên chi nhánh") ||
                            item
                          }
                        />
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
              <Grid item xs={8}>
                {Object.values(propsData)?.map((item, index) => {
                  const key = index;
                  return (
                    <Grid container spacing={2} key={key}>
                      <Grid item xs={12}>
                        <TextField
                          disabled
                          size="small"
                          fullWidth
                          defaultValue={item}
                        />
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>

            {/* {Object.keys(propsData[propsId])}:
          {Object.values(propsData[propsId])} */}
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

  // TABLE
  const dataTable = Object.keys(data).reverse();

  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);

  var dataTableSlice = _slice(dataTable, offset, limit);
  const handleLoadMore = () => {
    setLimit(limit + 5);
  };

  // ON CHANGE
  const [filter, setFilter] = useState("");

  const handleOnChange = (event) => {
    setFilter(event.target.value);
  };

  const [check, setCheck] = useState("1");

  useEffect(() => {
    var dataTableFilter = Object.keys(data)
      .reverse()
      .filter((id) => id === filter || data[id].createName === filter);
    setCheck(dataTableFilter);
  }, [filter]);

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
              label="Tìm kiếm theo mã, tên người tạo"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h6">Danh sách phiếu nhập kho</Typography>
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Hình ảnh kho</TableCell>
              <TableCell align="right">Tên kho</TableCell>
              <TableCell align="right">Mã phiếu</TableCell>
              <TableCell align="right">Người tạo</TableCell>
              <TableCell align="right">Chức năng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {check !== "1" &&
              check?.map((id, index) => {
                const key = index;
                return (
                  <TableRow key={key}>
                    <TableCell component="th" scope="row">
                      {key + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <CardMedia
                        component="img"
                        image={data[id].warehouseImage}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      {data[id].warehouseName}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      {id}
                    </TableCell>
                    <TableCell align="right">{data[id].createName}</TableCell>
                    <TableCell>
                      <Grid container justify="flex-end">
                        <Grid item>
                          <ViewDialog propsId={id} propsData={data[id]} />
                        </Grid>
                        <Grid item>
                          <IconButton>
                            <EditIcon />
                          </IconButton>
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

            {check.length === 0 ? (
              <>
                {dataTableSlice.map((id, index) => {
                  const key = index;

                  return (
                    <TableRow key={key}>
                      <TableCell component="th" scope="row">
                        {key + 1}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <CardMedia
                          component="img"
                          image={data[id].warehouseImage}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </TableCell>
                      <TableCell align="right">
                        {data[id].warehouseName}
                      </TableCell>
                      <TableCell component="th" scope="row" align="right">
                        {id}
                      </TableCell>
                      <TableCell align="right">{data[id].createName}</TableCell>
                      <TableCell>
                        <Grid container justify="flex-end">
                          <Grid item>
                            <ViewDialog propsId={id} propsData={data[id]} />
                          </Grid>
                          <Grid item>
                            <IconButton>
                              <EditIcon />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <IconButton
                              onClick={() => {
                                testConfirmDialog(id);
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
              </>
            ) : (
              ""
            )}
          </TableBody>
        </Table>
        <Box m={2} display="flex" justifyContent="center">
          <Button variant="outlined" color="primary" onClick={handleLoadMore}>
            Xem thêm
          </Button>
        </Box>
      </TableContainer>
    </div>
  );
}

export default InputWarehouse;
