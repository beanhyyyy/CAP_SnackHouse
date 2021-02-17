import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Button } from '@material-ui/core';

/* a accessbility y */
export const a11yProps = ({ prefix = 'scrollable-auto', index }) => ({
  id: `${prefix}-tab-${index}`,
  'aria-controls': `${prefix}-tabpanel-${index}`,
});

/* custom tab: border bottom */
export const StyledTabs = withStyles(theme => ({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: theme.palette.success.main,
    },
  },
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

/* tab item */
export const StyledTab = withStyles(theme => ({
  root: {
    minWidth: theme.spacing(10),
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'none',
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
  selected: {
    color: theme.palette.type === 'light' ? theme.palette.common.black : null,
  },
}))(props => <Tab disableRipple {...props} />);

/* tab dạng button */
export const StyledButtonTabs = withStyles({
  indicator: {
    display: 'none',
  },
})(Tabs);

export const StyledButtonTab = withStyles(theme => ({
  root: {
    minHeight: theme.spacing(5),
    opacity: 1,
    textTransform: 'capitalize',
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.text.secondary,
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    '&:not(:last-child)': {
      marginRight: theme.spacing(1),
    },
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}))(props => (
  <Tab
    component={Button}
    variant="contained"
    disableRipple
    disableFocusRipple
    disableTouchRipple
    disableElevation
    {...props}
  />
));
