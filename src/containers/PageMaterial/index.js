import React from "react";
import TabsIndicatorCenter from "../../components/TabsIndicatorCenter";
import TabIndicatorCenter from "../../components/TabIndicatorCenter";
import TabPanel from "../../components/TabPanel";
import CardShadow from "../../components/Card/CardShadow";
import SectionTemplate from "../../components/templates/SectionTemplate";
import Ingredient from "./Ingredient";
import CreateIngredient from "./CreateIngredient";

const mainTabs = [
  {
    key: 1,
    label: "Nguyên liệu",
    content: Ingredient,
  },
  {
    key: 2,
    label: "Tạo mới nguyên liệu",
    content: CreateIngredient,
  },
];

function PageMaterial() {
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

export default PageMaterial;
