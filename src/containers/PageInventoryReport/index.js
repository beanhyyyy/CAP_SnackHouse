import { List, ListItem, ListItemText } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CardShadow from "../../components/Card/CardShadow";
import SectionTemplate from "../../components/templates/SectionTemplate";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@material-ui/lab";

import firebaseDB from "../../firebase";

import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";

const options = [{ title: "Chọn" }];

function PageInventoryReport() {
  // View
  const [dataInput, setDataInput] = useState({});

  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("WarehouseInput")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setDataInput({
            ...snapshot.val(),
          });
      });
  }, []);

  // View
  const [dataOutput, setDataOutput] = useState({});

  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("WarehouseOutput")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setDataOutput({
            ...snapshot.val(),
          });
      });
  }, []);

// View
const [dataInventory, setDataInventory] = useState({});

useEffect(() => {
  firebaseDB
    .database()
    .ref()
    .child("WarehouseInventory")
    .on("value", (snapshot) => {
      if (snapshot.val() != null)
        setDataInventory({
          ...snapshot.val(),
        });
    });
}, []);


  
  // Dialog

  function ViewDialogInput({ propsId, propsData }) {
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
          <DialogTitle id="alert-dialog-title">Chi tiet</DialogTitle>
          <DialogContent>
            {Object.values(propsData[propsId]).map((item, index) => {
              const key = index;
              return (
                <Grid container spacing={2} key={key}>
                  <Grid item xs={12}>
                    <TextField
                      disabled
                      variant="outlined"
                      size="small"
                      fullWidth
                      defaultValue={item}
                    />
                  </Grid>
                </Grid>
              );
            })}
            {/* {Object.values(propsData[propsId])} */}
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
    <SectionTemplate>
      <CardShadow><b>Quản lý phiếu báo cáo</b></CardShadow>

      <CardShadow>
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
          <Typography variant="h6">Danh sách phiếu</Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography align="center">
                <b>Phiếu nhập kho</b>
              </Typography>
              {Object.keys(dataInput).map((id, index) => {
                const key = index;
                return (
                  <List key={key}>
                    <ListItem button>
                      <ListItemText
                        primary={id}
                        secondary={dataInput[id].dateCreate}
                      ></ListItemText>
                      <ViewDialogInput propsId={id} propsData={dataInput} />
                    </ListItem>
                  </List>
                );
              })}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography align="center">
                <b>Phiếu xuất kho</b>
              </Typography>
              {Object.keys(dataOutput).map((id, index) => {
                const key = index;
                return (
                  <List key={key}>
                    <ListItem button>
                      <ListItemText
                        primary={id}
                        secondary={dataOutput[id].dateCreate}
                      ></ListItemText>
                      <ViewDialogInput propsId={id} propsData={dataOutput} />
                    </ListItem>
                  </List>
                );
              })}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography align="center">
                <b>Phiếu tồn kho</b>
              </Typography>
              {Object.keys(dataInventory).map((id, index) => {
                const key = index;
                return (
                  <List key={key}>
                    <ListItem button>
                      <ListItemText
                        primary={id}
                        secondary={dataInventory[id].dateCreate}
                      ></ListItemText>
                      <ViewDialogInput propsId={id} propsData={dataInventory} />
                    </ListItem>
                  </List>
                );
              })}
            </Grid>
          </Grid>
        </div>
      </CardShadow>
    </SectionTemplate>
  );
}

export default PageInventoryReport;
