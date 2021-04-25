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
import { Autocomplete } from "@material-ui/lab";
import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";

import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import firebaseDB from "../../firebase";

export default function TableMaterial() {
  // View
  const [data, setData] = useState({});

  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("Material")
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
      .child(`Material/${id}`)
      .remove((err) => {
        if (err) {
          console.log(err);
        } else {
          alert("Success");
        }
      });
  };

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
              <TableCell align="right">Mã </TableCell>
              <TableCell align="right">Tên</TableCell>
              <TableCell align="right">Danh mục </TableCell>
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
                      image={data[id].materialImage}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </TableCell>
                  <TableCell align="right">{data[id].materialId}</TableCell>
                  <TableCell component="th" scope="row" align="right">
                    {data[id].materialName}
                  </TableCell>
                  <TableCell align="right">{data[id].category}</TableCell>
                  <TableCell>
                    <Grid container justify="flex-end">
                      <Grid item>
                        <IconButton>
                          <RemoveRedEyeIcon />
                        </IconButton>
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
const options = [{ title: "Chọn" }];
