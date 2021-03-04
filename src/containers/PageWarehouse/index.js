import React from "react";
import TabsIndicatorCenter from "../../components/TabsIndicatorCenter";
import TabIndicatorCenter from "../../components/TabIndicatorCenter";
import TabPanel from "../../components/TabPanel";
import { Box } from "@material-ui/core";

const mainTabs = [
  {
    key: 1,
    label: "Kho hàng",
    content: "Ấ",
  },
  {
    key: 2,
    label: "Quản lý nhập kho",
    content: "content",
  },
  {
    key: 3,
    label: "Quản lý xuất kho",
    content: "content",
  },
  {
    key: 4,
    label: "Tạo phiếu nhập",
    content: "content",
  },
  {
    key: 5,
    label: "Tạo phiếu xuất",
    content: "content",
  },
];

function PageWarehouse() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
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
      <Box>
        {mainTabs.map((tab, index) => {
          const key = index;
          return (
            <TabPanel key={key} value={value} index={index}>
              {tab.content}
            </TabPanel>
          );
        })}
      </Box>
    </div>
  );
}

export default PageWarehouse;
