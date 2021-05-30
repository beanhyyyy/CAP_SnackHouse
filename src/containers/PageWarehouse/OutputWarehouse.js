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
import { Autocomplete } from "@material-ui/lab";

import firebaseDB from "../../firebase";

import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function OutputWarehouse() {
  // View
  const [data, setData] = useState({});

  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("WarehouseOutput")
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
      .child(`WarehouseOutput/${id}`)
      .remove((err) => {
        if (err) {
          console.log(err);
        } else {
          alert("Xóa phiếu xuất thành công");
        }
      });
  };

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
                {Object.keys(propsData)?.map((item1) => {
                  return (
                    <TextField
                      size="small"
                      fullWidth
                      disabled
                      defaultValue={item1}
                    ></TextField>
                  );
                })}
              </Grid>
              <Grid item xs={8}>
                {Object.values(propsData)?.map((item2) => {
                  return (
                    <TextField
                      size="small"
                      fullWidth
                      disabled
                      defaultValue={item2}
                    ></TextField>
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
      <Typography variant="h6">Danh sách phiếu xuất kho</Typography>
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Hình ảnh kho</TableCell>
              <TableCell align="right">Mã kho</TableCell>
              <TableCell align="right">Tên kho</TableCell>
              <TableCell align="right">Chi nhánh</TableCell>
              <TableCell align="right">Người tạo</TableCell>
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
                      image={data[id].warehouseImage}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    {data[id].warehouseId}
                  </TableCell>
                  <TableCell align="right">{data[id].warehouseName}</TableCell>
                  <TableCell align="right">{data[id].namePoint}</TableCell>
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
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default OutputWarehouse;
const options = [{ title: "Chọn" }];
