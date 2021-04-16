import React from "react";
import TabsIndicatorCenter from "../../components/TabsIndicatorCenter";
import TabIndicatorCenter from "../../components/TabIndicatorCenter";
import TabPanel from "../../components/TabPanel";
import { Box } from "@material-ui/core";
import Warehouse from "./TableWarehouse";
import InputWarehouse from "./InputWarehouse";
import OutputWarehouse from "./OutputWarehouse";
import CreateInput from "./CreateInput";
import CreateOutput from "./CreateOutput";
import CardShadow from "../../components/Card/CardShadow";
import SectionTemplate from "../../components/templates/SectionTemplate";
import CreateWarehouse from "./CreateWarehouse";

const mainTabs = [
  {
    key: 1,
    label: "Kho hàng",
    content: Warehouse,
  },
  {
    key: 2,
    label: "Quản lý nhập kho",
    content: InputWarehouse,
  },
  {
    key: 3,
    label: "Quản lý xuất kho",
    content: OutputWarehouse,
  },
  {
    key: 4,
    label: "Tạo kho",
    content: CreateWarehouse,
  },
  {
    key: 5,
    label: "Tạo phiếu nhập",
    content: CreateInput,
  },
  {
    key: 6,
    label: "Tạo phiếu xuất",
    content: CreateOutput,
  },
];

function PageWarehouse() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <SectionTemplate>
      <CardShadow>
        <TabsIndicatorCenter
          value={value}
          onChange={handleChange}
          aria-label="tour info tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          {mainTabs.map((tab, index) => {
            const key = index;
            return <TabIndicatorCenter key={key} label={tab.label} />;
          })}
        </TabsIndicatorCenter>
      </CardShadow>
      <CardShadow>
        <Box>
          {mainTabs.map((tab, index) => {
            const key = index;
            return (
              <TabPanel key={key} value={value} index={index}>
                <tab.content />
              </TabPanel>
            );
          })}
        </Box>
      </CardShadow>
    </SectionTemplate>
  );
}

export default PageWarehouse;
