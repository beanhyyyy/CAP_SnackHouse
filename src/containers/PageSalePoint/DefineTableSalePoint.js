import { Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";

import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function createData(c1, c2, c3, c4, c5, c6, c7, c8) {
  return { c1, c2, c3, c4, c5, c6, c7, c8 };
}
export const rowsSalePoint = [
  createData(
    {
      id: "RTS-SADSA",
    },
    { name: "tên chi nhánh" },
    { address: "SHCT2 - Bờ hồ, Nguyển Xí " },
    { sector: "khu vực" }
  ),
];
export const columnsSalePoint = [
  {
    id: "c1",
    label: "Mã chi nhánh",
    // styles: {
    //   width: 320,
    // },
    format: (value) => <>{value.id}</>,
  },
  {
    id: "c2",
    label: "Tên chi nhánh",
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
    label: "Địa chỉ",
    format: (value) => <>{value.address}</>,
  },
  {
    id: "c4",
    label: "Khu vực",
    format: (value) => <>{value.sector}</>,
  },
  {
    id: "c5",
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
