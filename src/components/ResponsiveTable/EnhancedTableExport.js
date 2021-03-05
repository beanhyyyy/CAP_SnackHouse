import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Toolbar } from "@material-ui/core";

// dùng check responsive table

/* xuất file theo loại, nằm bên dưới table */
export default function EnhancedTableExport({ types }) {
  const typesConfig = {
    xlxs: {
      name: "xlxs",
      func: undefined,
    },
    pdf: {
      name: "pdf",
      func: undefined,
    },
    csv: {
      name: "csv",
      func: undefined,
    },
  };
  return (
    <Toolbar>
      <Box flex="1" />
      {types.map((type) => (
        <Button
          key={type}
          color="primary"
          onClick={() =>
            typesConfig[type].func ||
            // eslint-disable-next-line no-alert
            alert(`Exported ${typesConfig[type].name}`)
          }
        >
          Export to {typesConfig[type].name}
        </Button>
      ))}
    </Toolbar>
  );
}
EnhancedTableExport.propTypes = {
  types: PropTypes.array,
};
EnhancedTableExport.defaultProps = {
  types: ["csv"],
};
