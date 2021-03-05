import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

/* Đang xem ..n.. kết quả */
export default function ResultNumber({ length }) {
  return (
    <Typography
      variant="body2"
      gutterBottom
      align="right"
      color="textSecondary"
    >
      Viewing <b>{length}</b> {length > 1 ? "results" : "result"}
    </Typography>
  );
}
ResultNumber.propTypes = {
  length: PropTypes.number,
};
