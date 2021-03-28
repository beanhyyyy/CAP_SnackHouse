import {
  Avatar,
  Box,
  CardHeader,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import green from "@material-ui/core/colors/green";


const colorGreen = green[50];
//Custom components
const BoxStatusActive = withStyles(
  (theme) => ({
    root: {
      borderColor: theme.palette.success.main,
      border: "1px solid",
      borderRadius: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(1),
      width: theme.spacing(9),
      backgroundColor: colorGreen,
    },
  }),
  { name: "BoxStatusActive" }
)(Box);
const BoxStatusOffline = withStyles(
  (theme) => ({
    root: {
      borderColor: theme.palette.grey[800],
      border: "1px solid",
      borderRadius: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(1),
      width: theme.spacing(9),
      backgroundColor: theme.palette.grey[60],
    },
  }),
  { name: "BoxStatusOffline" }
)(Box);

function createData(c1, c2, c3, c4) {
  return { c1, c2, c3, c4 };
}
export const rowsAccount = [
  createData(
    {
      name: "Admin",
      email: "admin@gmail.com",
    },
    { password: "123456q" },
    { position: "Admin" },
    { status: "Active" }
  ),
  createData(
    {
      name: "Warehouser",
      email: "wahouser@gmail.com",
    },
    { password: "123456q" },
    { position: "Warehouser" },
    { status: "Active" }
  ),
  createData(
    {
      name: "Member",
      email: "member@gmail.com",
    },
    { password: "password" },
    { position: "Member" },
    { status: "Active" }
  ),
];
export const columnsAccount = [
  {
    id: "c1",
    label: "Tên tài khoản",
    format: (value) => (
      <>
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          title={value.name}
          subheader={value.email}
        />
      </>
    ),
  },
  {
    id: "c2",
    label: "Mật khẩu",
    format: (value) => (
      <>
        <Typography>{value.password}</Typography>
      </>
    ),
  },
  {
    id: "c3",
    label: "Chức vụ",
    format: (value) => <>{value.position}</>,
  },
  {
    id: "c4",
    label: "Trạng thái",
    format: (value) => (
      <>
        {value.status === "Active" ? (
          <BoxStatusActive>Active</BoxStatusActive>
        ) : (
          <BoxStatusOffline>Offline</BoxStatusOffline>
        )}
      </>
    ),
  },
];
