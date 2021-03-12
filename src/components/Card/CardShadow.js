import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";

const cardShadow = `0px 0px 20px 0px rgba(44, 101, 144, 0.1)`;

const CardShadowStyle = withStyles(
  {
    root: {
      boxShadow: cardShadow,
      wordBreak: "break-word",
      overflow: "unset",
    },
  },
  { name: "AtomCardShadow" }
)(Card);

const CardContentLarge = withStyles(
  (theme) => ({
    root: {
      [theme.breakpoints.up("lg")]: {
        padding: theme.spacing(3),
        "&:last-child": {
          paddingBottom: theme.spacing(4),
        },
      },
    },
  }),
  { name: "CardContentLarge" }
)(CardContent);

/* thẻ hiển thị nội dung ở Backend */
export default function CardShadow({ title, rightAction, children }) {
  return (
    <CardShadowStyle>
      {title && (
        <Box px={3} py={2}>
          <Grid container justify="space-between">
            <Grid item xs>
              <Typography variant="h6">
                <b>{title}</b>
              </Typography>
            </Grid>
            <Grid item>{rightAction}</Grid>
          </Grid>
        </Box>
      )}
      {children && <CardContentLarge>{children}</CardContentLarge>}
    </CardShadowStyle>
  );
}

CardShadow.propTypes = {
  title: PropTypes.any,
  rightAction: PropTypes.any,
  children: PropTypes.any,
};
