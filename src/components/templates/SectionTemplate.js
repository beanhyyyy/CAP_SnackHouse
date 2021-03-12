import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

/* 
layout cho giao diện có các section cách nhau 1 khoảng 
*/
export default function SectionTemplate({ children, ...props }) {
  return (
    <Grid container spacing={3} {...props}>
      {Array.isArray(children) ? (
        children.map((section, index) => {
          const key = index;
          return (
            section && (
              <Grid key={key} item xs={12}>
                {section}
              </Grid>
            )
          );
        })
      ) : (
        <Grid item xs={12}>
          {children}
        </Grid>
      )}
    </Grid>
  );
}
SectionTemplate.propTypes = {
  children: PropTypes.any,
  spacing: PropTypes.number,
};
