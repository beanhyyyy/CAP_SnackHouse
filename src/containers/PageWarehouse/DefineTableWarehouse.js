import {
  Box,
  Grid,
  IconButton,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { green, lime, red } from "@material-ui/core/colors";

const colorGreen = green[50];
const colorRed = red[50];
const colorLime = lime[50]; //Custom components
const BoxStatusFinish = withStyles(
  (theme) => ({
    root: {
      borderColor: theme.palette.success.main,
      border: "1px solid",
      borderRadius: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(1),
      width: 100,
      backgroundColor: colorGreen,
    },
  }),
  { name: "BoxStatusActive" }
)(Box);
const BoxStatusWaiting = withStyles(
  (theme) => ({
    root: {
      borderColor: theme.palette.warning.main,
      border: "1px solid",
      borderRadius: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(1),
      width: theme.spacing(10),
      backgroundColor: colorLime,
    },
  }),
  { name: "BoxStatusOffline" }
)(Box);
const BoxStatusCancel = withStyles(
  (theme) => ({
    root: {
      borderColor: theme.palette.error.main,
      border: "1px solid",
      borderRadius: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(1),
      width: theme.spacing(9),
      backgroundColor: colorRed,
    },
  }),
  { name: "BoxStatusOffline" }
)(Box);

function createData(c1, c2, c3, c4, c5, c6, c7) {
  return { c1, c2, c3, c4, c5, c6, c7 };
}
export const rowsWarehouse = [
  createData(
    {
      idWarehouse: "1DSS",
    },
    { nameWare: "KHS-123" },
    { branch: "Thủ Đức" },
    { address: "SHCT2 - Bờ hồ, Nguyển Xí" },
    { status: "out" }
  ),
  createData(
    {
      idWarehouse: "1DSS",
    },
    { nameWare: "KHS-123" },
    { branch: "Thủ Đức" },
    { address: "SHCT2 - Bờ hồ, Nguyển Xí" },
    { status: "in" }
  ),
  createData(
    {
      idWarehouse: "1DSS",
    },
    { nameWare: "KHS-123" },
    { branch: "Thủ Đức" },
    { address: "SHCT2 - Bờ hồ, Nguyển Xí" },
    { status: "normal" }
  ),
];
export const columnsWarehouse = [
  {
    id: "c1",
    label: "Mã kho",
    format: (value) => <>{value.idWarehouse}</>,
  },
  {
    id: "c2",
    label: "Tên kho",
    format: (value) => (
      <>
        <Typography>{value.nameWare}</Typography>
      </>
    ),
  },
  {
    id: "c3",
    label: "Chi nhánh",
    format: (value) => <>{value.branch}</>,
  },
  {
    id: "c4",
    label: "Địa chỉ",
    format: (value) => <>{value.address}</>,
  },
  {
    id: "c5",
    label: "Trạng thái",
    format: (value) => (
      <>
        {value.status === "out" && <BoxStatusFinish>Xuất kho</BoxStatusFinish>}
        {value.status === "normal" && (
          <BoxStatusWaiting>Bình thường</BoxStatusWaiting>
        )}
        {value.status === "in" && <BoxStatusCancel>Nhập kho</BoxStatusCancel>}
      </>
    ),
  },

  {
    id: "c6",
    label: "Chức năng",
    format: (value) => (
      <Grid container spacing={2} justify="flex-end">
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
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    ),
  },
];
export const rowsInputWarehouse = [
  createData(
    {
      id: "1DSS",
    },
    { date: "02-11-2091" },
    { nameWare: "KHS-123" },
    { address: "SHCT2 - Bờ hồ, Nguyển Xí" },
    { creater: "Vinh" },
    { totalValue: 1000000 }
  ),
];
export const columnsInputWarehouse = [
  {
    id: "c1",
    label: "Mã phiếu nhập",
    format: (value) => <>{value.id}</>,
  },
  {
    id: "c2",
    label: "Ngày tạo",
    format: (value) => (
      <>
        <Typography>{value.date}</Typography>
      </>
    ),
  },
  {
    id: "c3",
    label: "Kho nhập",
    format: (value) => <>{value.nameWare}</>,
  },
  {
    id: "c4",
    label: "Địa chỉ",
    format: (value) => <>{value.address}</>,
  },
  {
    id: "c5",
    label: "Người tạo",
    format: (value) => (
      <>
        <Typography>{value.creater}</Typography>
      </>
    ),
  },
  {
    id: "c6",
    label: "Tổng giá trị",
    format: (value) => (
      <>
        <Typography>{value.totalValue}</Typography>
      </>
    ),
  },

  {
    id: "c7",
    label: "Chức năng",
    format: (value) => (
      <Grid container spacing={2} justify="flex-end">
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
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    ),
  },
];
export const rowsOutputWarehouse = [
  createData(
    {
      id: "1DSS",
    },
    { date: "02-11-2091" },
    { nameWare: "KHS-123" },
    { address: "SHCT2 - Bờ hồ, Nguyển Xí" },
    { creater: "Vinh" },
    { totalValue: 1000000 }
  ),
];
export const columnsOutputWarehouse = [
  {
    id: "c1",
    label: "Mã phiếu xuất",
    format: (value) => <>{value.id}</>,
  },
  {
    id: "c2",
    label: "Ngày tạo",
    format: (value) => (
      <>
        <Typography>{value.date}</Typography>
      </>
    ),
  },
  {
    id: "c3",
    label: "Kho nhập",
    format: (value) => <>{value.nameWare}</>,
  },
  {
    id: "c4",
    label: "Địa chỉ",
    format: (value) => <>{value.address}</>,
  },
  {
    id: "c5",
    label: "Người tạo",
    format: (value) => (
      <>
        <Typography>{value.creater}</Typography>
      </>
    ),
  },
  {
    id: "c6",
    label: "Tổng giá trị",
    format: (value) => (
      <>
        <Typography>{value.totalValue}</Typography>
      </>
    ),
  },

  {
    id: "c7",
    label: "Chức năng",
    format: (value) => (
      <Grid container spacing={2} justify="flex-end">
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
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    ),
  },
];
