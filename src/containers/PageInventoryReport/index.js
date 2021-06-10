import { List, ListItem, ListItemText } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CardShadow from "../../components/Card/CardShadow";
import SectionTemplate from "../../components/templates/SectionTemplate";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";

import firebaseDB from "../../firebase";

import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";

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
          <DialogTitle id="alert-dialog-title">Chi tiết</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                {Object.keys(propsData[propsId]).map((item, index) => {
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
                {Object.values(propsData[propsId]).map((item, index) => {
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

            {/* {Object.values(propsData[propsId])} */}
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
    <SectionTemplate>
      <CardShadow>
        <b>Quản lý phiếu báo cáo</b>
      </CardShadow>
      <CardShadow>
        <div>
          <Typography variant="h6">Danh sách phiếu</Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography align="center">
                <b>Phiếu nhập kho</b>
              </Typography>
              {Object.keys(dataInput)
                .reverse()
                .map((id, index) => {
                  const key = index;
                  return (
                    <List key={key}>
                      <ListItem button>
                        <ListItemText
                          primary={`Mã phiếu : ${id}`}
                          secondary={`Thời gian tạo phiếu : ${dataInput[id].dateCreate}`}
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
              {Object.keys(dataOutput)
                .reverse()
                .map((id, index) => {
                  const key = index;
                  return (
                    <List key={key}>
                      <ListItem button>
                        <ListItemText
                          primary={`Mã phiếu : ${id}`}
                          secondary={`Thời gian tạo phiếu : ${dataOutput[id].dateCreate}`}
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
              {Object.keys(dataInventory)
                .reverse()
                .map((id, index) => {
                  const key = index;
                  return (
                    <List key={key}>
                      <ListItem button>
                        <ListItemText
                          primary={`Mã phiếu : ${id}`}
                          secondary={`Thời gian tạo phiếu : ${dataInventory[id].dateCreate}`}
                        ></ListItemText>
                        <ViewDialogInput
                          propsId={id}
                          propsData={dataInventory}
                        />
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
