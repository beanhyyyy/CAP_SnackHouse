import {
  Box,
  CardMedia,
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
import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@material-ui/lab";

import firebaseDB from "../../firebase";

import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

// Dialog
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function Warehouse() {
  // View
  const [data, setData] = useState({});

  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("Warehouse")
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
      .child(`Warehouse/${id}`)
      .remove((err) => {
        if (err) {
          console.log(err);
        } else {
          alert("Success");
        }
      });
  };

  // Dialog

  function ViewDialog({ propsId, propsData }) {
    console.log(propsData);
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
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Thong bao?"}</DialogTitle>
          <DialogContent>
            {propsData[propsId].arr.map((item, index) => {
              const key = index;
              return (
                <React.Fragment key={key}>
                  {Object.keys(item)} : {Object.values(item)}
                  <br />
                </React.Fragment>
              );
            })}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Xac nhan
            </Button>
            <Button onClick={handleClose} autoFocus>
              Dong
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
      <Typography variant="h6">Danh sách kho</Typography>
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Hình ảnh</TableCell>
              <TableCell align="right">Mã kho</TableCell>
              <TableCell align="right">Tên kho</TableCell>
              <TableCell align="right">Chi nhánh</TableCell>
              <TableCell align="right">Địa chỉ</TableCell>
              <TableCell align="right">Người tạo</TableCell>
              <TableCell align="right">Chức năng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(data).map((id, index) => {
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
                  <TableCell align="right">{data[id].pointName}</TableCell>
                  <TableCell align="right">
                    {data[id].warehouseAddress}
                  </TableCell>
                  <TableCell align="right">{data[id].createName}</TableCell>
                  <TableCell>
                    <Grid container justify="flex-end">
                      <Grid item>
                        <ViewDialog propsId={id} propsData={data} />
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
export default Warehouse;

const options = [{ title: "Chọn" }];
