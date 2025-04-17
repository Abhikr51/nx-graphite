import React, { useState, useCallback } from "react";
import { Badge, Checkbox, Panel , StackLayout} from "@salt-ds/core";
import "./ReferenceDataPage.css";
import {
  TabBar,
  TabListNext,
  TabNext,
  TabNextTrigger,
  TabsNext,
} from "@salt-ds/lab";
import FilteredComponent from "./FilteredData";
import "./ReferenceDataPage.css";

const tabs = [
  { label: "All tables", value: "all", },
  { label: "Favorite tables", value: "favorite", },
  { label: "Most common", value: "common", },
];

const checkboxConfig = [
  { type: "editable", label: "Editable", notificationKey: "20" },
  { type: "nonEditable", label: "Non-Editable", notificationKey: "10" },
];

const ReferenceDataPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Record<string, number>>({
    "All tables": 0,
    "Favorite tables": 0,
    "Most common": 0,
  });

  const [selectedCheckbox, setSelectedCheckbox] = useState<string>("");
  const [tabContent, setTabContent] = useState(tabs[0]); // Default to first tab

  const handleTabClick = useCallback((tab: typeof tabs[0]) => {
    setTabContent(tab);
  }, []);

  const handleCheckboxChange = useCallback((type: string) => {
    setSelectedCheckbox((prev) => (prev === type ? "" : type));
  }, []);

  return (
    <Panel>
      <StackLayout>
        <TabsNext defaultValue={tabContent.value}>
          <TabBar divider={true} inset={true}>
            <TabListNext appearance="transparent">
              {tabs.map((tab) => (
                <TabNext
                  value={tab.value}
                  key={tab.label}
                  onClick={() => handleTabClick(tab)}
                >
                  <TabNextTrigger>
                    {tab.label}
                    {notifications[tab.label] > 0 && (
                      <Badge
                        value={notifications[tab.label]}
                        aria-label={`${notifications[tab.label]} updates`}
                      />
                    )}
                  </TabNextTrigger>
                </TabNext>
              ))}
            </TabListNext>
          </TabBar>
          <Panel className="checkbox-container">
            {checkboxConfig.map(({ type, label, notificationKey }) => (
              <Checkbox
                key={type}
                label={`${label} (${notificationKey})`}
                checked={selectedCheckbox === type}
                onChange={() => handleCheckboxChange(type)}
              />
            ))}
          </Panel>
          <Panel>
            <FilteredComponent
              filter={tabContent.value}
              checkboxValue={selectedCheckbox}
              setNotifications={setNotifications}
            />
          </Panel>
        </TabsNext>
      </StackLayout>
    </Panel>
  );
};

export default ReferenceDataPage;
