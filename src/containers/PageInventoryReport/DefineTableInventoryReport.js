import { Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function createData(c1, c2, c3, c4, c5, c6, c7) {
  return { c1, c2, c3, c4, c5, c6, c7 };
}
export const rowsInventoryReport = [
  createData(
    {
      time: "11:22 11/11/2010",
    },
    { name: "Quang Vinh" },
    { sellingPoint: "Thủ Đức" }
  ),
];
export const columnsInventoryReport = [
  {
    id: "c1",
    label: "Thời gian",
    // styles: {
    //   width: 320,
    // },
    format: (value) => <>{value.time}</>,
  },
  {
    id: "c2",
    label: "Người báo cáo",
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
    label: "Điểm bán",
    props: { width: "30%" },
    format: (value) => <>{value.sellingPoint}</>,
  },

  {
    id: "c4",
    label: "Chức năng",
    props: { width: "20%" },

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
