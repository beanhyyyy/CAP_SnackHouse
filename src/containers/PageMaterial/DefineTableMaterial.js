import {
  // Box,
  Grid,
  IconButton,
  Typography,
  // withStyles,
} from "@material-ui/core";
import React from "react";
// import green from "@material-ui/core/colors/green";
// import lime from "@material-ui/core/colors/lime";
// import red from "@material-ui/core/colors/red";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

// const colorGreen = green[50];
// const colorRed = red[50];
// const colorLime = lime[50];
//Custom components
// const BoxStatusFinish = withStyles(
//   (theme) => ({
//     root: {
//       borderColor: theme.palette.success.main,
//       border: "1px solid",
//       borderRadius: theme.spacing(1),
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: theme.spacing(1),
//       width: 100,
//       backgroundColor: colorGreen,
//     },
//   }),
//   { name: "BoxStatusActive" }
// )(Box);
// const BoxStatusWaiting = withStyles(
//   (theme) => ({
//     root: {
//       borderColor: theme.palette.warning.main,
//       border: "1px solid",
//       borderRadius: theme.spacing(1),
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: theme.spacing(1),
//       width: 100,
//       backgroundColor: colorLime,
//     },
//   }),
//   { name: "BoxStatusOffline" }
// )(Box);
// const BoxStatusCancel = withStyles(
//   (theme) => ({
//     root: {
//       borderColor: theme.palette.error.main,
//       border: "1px solid",
//       borderRadius: theme.spacing(1),
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: theme.spacing(1),
//       width: theme.spacing(7),
//       backgroundColor: colorRed,
//     },
//   }),
//   { name: "BoxStatusOffline" }
// )(Box);

function createData(c1, c2, c3, c4, c5, c6, c7, c8) {
  return { c1, c2, c3, c4, c5, c6, c7, c8 };
}
export const rowsMaterial = [
  createData(
    {
      id: "RTS-SADSA",
    },
    { name: "name" },
    { id: "SHCT2" },
    { type: "Nguyên vật liệu" },
    { branch: "0 chi nhánh" },
    {
      unit: "Kg",
    },
    { price: 10000 }
  ),
];
export const columnsMaterial = [
  {
    id: "c1",
    label: "Hình ảnh",
    // styles: {
    //   width: 320,
    // },
    format: (value) => <>{value.id}</>,
  },
  {
    id: "c2",
    label: "Tên",
    // styles: {
    //   width: 320,
    // },
    format: (value) => (
      <>
        <Typography>{value.name}</Typography>
      </>
    ),
  },
  {
    id: "c3",
    label: "Mã",
    format: (value) => <>{value.id}</>,
  },
  {
    id: "c4",
    label: "Danh mục",
    format: (value) => <>{value.type}</>,
  },
  {
    id: "c5",
    label: "Chi nhánh",
    format: (value) => <>{value.branch}</>,
  },
  {
    id: "c6",
    label: "Đơn vị tính",
    format: (value) => <>{value.unit}</>,
  },
  {
    id: "c7",
    label: "Giá nhập",
    format: (value) => <>{value.price}</>,
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
