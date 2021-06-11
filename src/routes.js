/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import AddCircle from "@material-ui/icons/AddCircle";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
// import UserProfile from "./views/UserProfile/UserProfile.js";
// import TableList from "./views/TableList/TableList.js";

import PageAccount from "./containers/PageAccount/index.js";
import PageWarehouse from "./containers/PageWarehouse/index.js";
import PageOrder from "./containers/PageOrder/index.js";
import PageInventoryReport from "./containers/PageInventoryReport/index.js";
import PageSalePoint from "./containers/PageSalePoint/index.js";
import PageMaterial from "./containers/PageMaterial/index.js";
// import CreateMaterial from "./views/CreateMaterial"; // buoc 3
// core components/views for RTL layout
// MENU

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Thống kê",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Tài khoản",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: PageAccount,
    layout: "/admin",
  },
  {
    path: "/order",
    name: "Đơn hàng",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: PageOrder,
    layout: "/admin",
  },
  {
    path: "/material",
    name: "Nguyên liệu",
    rtlName: "طباعة",
    icon: AddCircle,
    component: PageMaterial,
    layout: "/admin",
  },
  {
    path: "/PageWarehouse",
    name: "Kho",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: PageWarehouse,
    layout: "/admin",
  },
  {
    path: "/PageSalePoint",
    name: "Điểm bán",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: PageSalePoint,
    layout: "/admin",
  },
  {
    path: "/InventoryReport",
    name: "Quản lý báo cáo",
    rtlName: "إخطارات",
    icon: Notifications,
    component: PageInventoryReport,
    layout: "/admin",
  },
];

export default dashboardRoutes;
