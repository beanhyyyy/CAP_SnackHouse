import React from "react";
import TabsIndicatorCenter from "../../components/TabsIndicatorCenter";
import TabIndicatorCenter from "../../components/TabIndicatorCenter";
import TabPanel from "../../components/TabPanel";
import CardShadow from "../../components/Card/CardShadow";
import SectionTemplate from "../../components/templates/SectionTemplate";
import Account from "./Account";
import CreateAccount from "./CreateAccount";
import Decentralization from "./Decentralization";
import CreateAuthorization from "./CreateAuthorization";

const mainTabs = [
  {
    key: 1,
    label: "Tài khoản",
    content: Account,
  },
  {
    key: 2,
    label: "Tạo tài khoản",
    content: CreateAccount,
  },
  {
    key: 3,
    label: "Phân quyền",
    content: Decentralization,
  },
  {
    key: 4,
    label: "Tạo phân quyền",
    content: CreateAuthorization,
  },
];

function PageAccount() {
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

export default PageAccount;