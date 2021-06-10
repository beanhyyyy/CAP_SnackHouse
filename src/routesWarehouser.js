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
// import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
// import UserProfile from "./views/UserProfile/UserProfile.js";
// import TableList from "./views/TableList/TableList.js";
import PageWarehouse from "./containers/PageWarehouse/index.js";
// import CreateMaterial from "./views/CreateMaterial"; // buoc 3
// core components/views for RTL layout
// MENU

const routesWarehouser = [
  {
    path: "/PageWarehouse",
    name: "Kho",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: PageWarehouse,
    layout: "/adminWarehouser",
  },
];

export default routesWarehouser;
