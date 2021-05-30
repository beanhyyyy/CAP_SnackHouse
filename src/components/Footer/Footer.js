/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/admin/dashboard" className={classes.block}>
                Thống kê
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/admin/material" className={classes.block}>
                Nguyên liệu
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/admin/PageSalePoint" className={classes.block}>
                Chi nhánh
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/admin/PageWarehouse" className={classes.block}>
                Kho
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://www.vanlanguni.edu.vn/"
              target="_blank"
              className={classes.a}
            >
              Dreamaker
            </a>
            , trường đại học Văn Lang
          </span>
        </p>
      </div>
    </footer>
  );
}
