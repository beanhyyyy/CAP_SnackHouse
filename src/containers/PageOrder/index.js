import React from "react";
import TabsIndicatorCenter from "../../components/TabsIndicatorCenter";
import TabIndicatorCenter from "../../components/TabIndicatorCenter";
import TabPanel from "../../components/TabPanel";
import SectionTemplate from "../../components/templates/SectionTemplate";
import CardShadow from "../../components/Card/CardShadow";
import Order from "./Order";
import OrderStatus from "./OrderStatus";

const mainTabs = [
  {
    key: 1,
    label: "Đơn hàng",
    content: Order,
  },
  {
    key: 2,
    label: "Trạng thái đơn hàng",
    content: OrderStatus,
  },
];

function PageOrder() {
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
            return (
              <TabIndicatorCenter disableRipple key={key} label={tab.label} />
            );
          })}
        </TabsIndicatorCenter>
      </CardShadow>
      <CardShadow>
        {mainTabs.map((tab, index) => {
          const key = index;
          return (
            <TabPanel key={key} value={value} index={index}>
              <tab.content />
            </TabPanel>
          );
        })}
      </CardShadow>
    </SectionTemplate>
  );
}

export default PageOrder;
