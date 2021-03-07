import {
  Avatar,
  Box,
  CardHeader,
  Grid,
  IconButton,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import green from "@material-ui/core/colors/green";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

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
      width: theme.spacing(7),
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
      width: theme.spacing(7),
      backgroundColor: theme.palette.grey[60],
    },
  }),
  { name: "BoxStatusOffline" }
)(Box);

function createData(c1, c2, c3, c4, c5, c6, c7) {
  return { c1, c2, c3, c4, c5, c6, c7 };
}
export const rowsAccount = [
  createData(
    {
      name: "username",
      id: "1",
      email: "1@email.com",
    },
    { date: "September 20, 2019", TimeAgo: "2 day ago" },
    { position: "Accounting" },
    { status: "Active" },
    { type: 0, status: "Chưa xác minh" }
  ),
  createData(
    {
      name: "Đây là Tên doanh nghiệp",
      id: "1",
      email: "1@email.com",
    },
    { date: "September 20, 2019", TimeAgo: "2 day ago" },
    { position: "Accounting" },
    { status: "Offline" },
    { type: 0, status: "Chưa xác minh" }
  ),
];
export const columnsAccount = [
  {
    id: "c1",
    label: "Tên người dùng",
    // styles: {
    //   width: 320,
    // },
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
    label: "Lần đăng nhập cuối",
    // styles: {
    //   width: 320,
    // },
    format: (value) => (
      <>
        <Typography>{value.date}</Typography>
        <Typography variant="body2" color="textSecondary">
          {value.TimeAgo}
        </Typography>
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
  {
    id: "c5",
    label: "Chức năng",
    format: (value) => (
      <Grid container spacing={2}>
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
