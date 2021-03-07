import {
  Box,
  Grid,
  IconButton,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import green from "@material-ui/core/colors/green";
import lime from "@material-ui/core/colors/lime";
import red from "@material-ui/core/colors/red";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const colorGreen = green[50];
const colorRed = red[50];
const colorLime = lime[50];
//Custom components
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
      width: theme.spacing(10),
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
      width: theme.spacing(8),
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
      width: theme.spacing(7),
      backgroundColor: colorRed,
    },
  }),
  { name: "BoxStatusOffline" }
)(Box);

function createData(c1, c2, c3, c4, c5, c6, c7, c8) {
  return { c1, c2, c3, c4, c5, c6, c7, c8 };
}
export const rowsOrder = [
  createData(
    {
      id: "RTS-SADSA",
    },
    { date: "02/02/2022" },
    { branch: "SHCT2 - Bờ hồ, Nguyển Xí " },
    { nameUser: "Tên" },
    { totalValue: 199990 },
    {
      creator: "name right here",
    },
    { status: "finish" }
  ),
  createData(
    {
      id: "RTS-SADSA",
    },
    { date: "02/02/2022" },
    { branch: "SHCT2 - Bờ hồ, Nguyển Xí " },
    { nameUser: "Tên" },
    { totalValue: 199990 },
    {
      creator: "name right here",
    },
    { status: "waiting" }
  ),
  createData(
    {
      id: "RTS-SADSA",
    },
    { date: "02/02/2022" },
    { branch: "SHCT2 - Bờ hồ, Nguyển Xí " },
    { nameUser: "Tên" },
    { totalValue: 199990 },
    {
      creator: "name right here",
    },
    { status: "cancel" }
  ),
];
export const columnsOrder = [
  {
    id: "c1",
    label: "Mã hóa Đơn",
    // styles: {
    //   width: 320,
    // },
    format: (value) => <>{value.id}</>,
  },
  {
    id: "c2",
    label: "Ngày tạo",
    // styles: {
    //   width: 320,
    // },
    format: (value) => (
      <>
        <Typography>{value.date}</Typography>
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
    label: "Tên khách hàng",
    format: (value) => <>{value.nameUser}</>,
  },
  {
    id: "c5",
    label: "Tổng giá trị",
    format: (value) => <>{value.totalValue}</>,
  },
  {
    id: "c6",
    label: "Người tạo phiếu",
    format: (value) => <>{value.creator}</>,
  },
  {
    id: "c7",
    label: "Trạng thái",
    format: (value) => (
      <>
        {value.status === "finish" && (
          <BoxStatusFinish>Hoàn thành</BoxStatusFinish>
        )}
        {value.status === "waiting" && (
          <BoxStatusWaiting>Đang chờ</BoxStatusWaiting>
        )}
        {value.status === "cancel" && <BoxStatusCancel>Hủy</BoxStatusCancel>}
      </>
    ),
  },
  {
    id: "c8",
    label: "Chức năng",
    format: (value) => (
      <Grid container>
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
