import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Toolbar, Typography } from "@material-ui/core";

// dùng check responsive table

/* thanh công cụ table, bao gồm: 
- title: Tiêu đề, 
- action: phần bên phải (actions/button),
- toolbar: phần bên dưới (filters) */
export default function EnhancedTableToolbar(props) {
  const { title, action, toolbar } = props;
  return (
    <Box mb={0}>
      <Toolbar disableGutters>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {action}
          </Grid>
          {toolbar && (
            <Grid item xs={12}>
              {toolbar}
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </Box>
  );
}
EnhancedTableToolbar.propTypes = {
  title: PropTypes.any,
  action: PropTypes.any,
  toolbar: PropTypes.any,
};
