import React from 'react';
import PropTypes from 'prop-types';

// dùng check responsive table
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ViewAsList from './ViewAsList';
import ViewAsTable from './ViewAsTable';

/* check hiển thị table theo màn hình 
- breakpoints: độ rộng tối đa hiển thị dạng table
*/
export default function ResponsiveTable({ breakpoints, ...props }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(breakpoints));
  return matches ? <ViewAsList {...props} /> : <ViewAsTable {...props} />;
}
ResponsiveTable.propTypes = {
  breakpoints: PropTypes.string,
};
ResponsiveTable.defaultProps = {
  breakpoints: 'md',
};
