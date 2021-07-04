import React, { useEffect, useState } from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardFooter from "../../components/Card/CardFooter.js";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

import firebaseDB from "../../firebase";
import MuseumIcon from "@material-ui/icons/Museum";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();

  // Kho
  // View
  const [data, setData] = useState({});

  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("Warehouse")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setData({
            ...snapshot.val(),
          });
      });
  }, []);

  // Nguyen lieu
  const [dataMaterial, setDataMaterial] = useState({});

  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("Material")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setDataMaterial({
            ...snapshot.val(),
          });
      });
  }, []);

  // Chi nhanh
  const [dataPoint, setDataPoint] = useState({});

  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("Point")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setDataPoint({
            ...snapshot.val(),
          });
      });
  }, []);

  // Phieu nhap
  const [dataInput, setDataInput] = useState({});

  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("WarehouseInput")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setDataInput({
            ...snapshot.val(),
          });
      });
  }, []);

  // Phieu xuat
  const [dataOutput, setDataOutput] = useState({});

  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("WarehouseOutput")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setDataOutput({
            ...snapshot.val(),
          });
      });
  }, []);

  // Phieu ton
  const [dataInventory, setDataInventory] = useState({});

  useEffect(() => {
    firebaseDB
      .database()
      .ref()
      .child("WarehouseInventory")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setDataInventory({
            ...snapshot.val(),
          });
      });
  }, []);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Số lượng kho</p>
              <h3 className={classes.cardTitle}>
                {Object.keys(data).length} <small>KHO</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                Vừa mới nhập nhật
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Số lượng chi nhánh</p>
              <h3 className={classes.cardTitle}>
                {Object.keys(dataPoint).length} <small>CHI NHÁNH</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                Vừa mới nhập nhật
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <MuseumIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Số lượng nguyên liệu</p>
              <h3 className={classes.cardTitle}>
                {Object.keys(dataMaterial).length} <small>NGUYÊN LIỆU</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                Vừa mới nhập nhật
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Số lượng nhân viên</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Vừa mới nhập nhật
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <FileCopyIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Tổng số phiếu</p>
              <h3 className={classes.cardTitle}>
                {Object.keys(dataInventory).length +
                  Object.keys(dataInput).length +
                  Object.keys(dataOutput).length}
                <small>PHIẾU</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Vừa mới nhập nhật
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <FileCopyIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Số lượng phiếu nhập</p>
              <h3 className={classes.cardTitle}>
                {Object.keys(dataInput).length} <small>PHIẾU</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Vừa mới nhập nhật
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <FileCopyIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Số lượng phiếu xuất</p>
              <h3 className={classes.cardTitle}>
                {Object.keys(dataOutput).length} <small>PHIẾU</small>
              </h3>{" "}
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Vừa mới nhập nhật
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <FileCopyIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Số lượng phiếu tồn</p>
              <h3 className={classes.cardTitle}>
                {Object.keys(dataInventory).length} <small>PHIẾU</small>
              </h3>{" "}
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Vừa mới nhập nhật
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
