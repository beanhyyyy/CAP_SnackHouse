import React from "react";
import TabsIndicatorCenter from "../../components/TabsIndicatorCenter";
import TabIndicatorCenter from "../../components/TabIndicatorCenter";
import TabPanel from "../../components/TabPanel";
import { Box } from "@material-ui/core";

const mainTabs = [
  {
    key: 1,
    label: "Khu vực",
    content: "Ấ",
  },
  {
    key: 2,
    label: "Chi nhánh",
    content: "Ấ",
  },
];

function PageSalePoint() {
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

export default PageSalePoint;
