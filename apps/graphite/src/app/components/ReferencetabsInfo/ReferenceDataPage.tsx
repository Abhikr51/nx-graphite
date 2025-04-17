import React, { useEffect, useState, useCallback } from "react";
import { Badge, Checkbox, Panel, StackLayout } from "@salt-ds/core";
import {
  TabBar,
  TabListNext,
  TabNext,
  TabNextTrigger,
  TabsNext,
} from "@salt-ds/lab";
import FilteredComponent from "./FilteredData";
import Breadcrumbs from "./Breadcrumbs";
import "./ReferenceDataPage.css";

const tabs = [
  { label: "All tables", value: "all", component: "All tables" },
  { label: "Favorite tables", value: "favorite", component: "Favorite tables" },
  { label: "Most common", value: "common", component: "Most common" },
];

const checkboxConfig = [
  { type: "editable", label: "Editable", notificationKey: "20" },
  { type: "nonEditable", label: "Non-Editable", notificationKey: "10" },
];

// const fetchDynamicNotifications = (): Promise<Record<string, number>> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         "All tables": 2,
//         "Favorite tables": 4,
//         "Most common": 6,
//       });
//     }, 1000);
//   });
// };

const ReferenceDataPage: React.FC = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([
    "Overview",
    "Reference data tables",
  ]);
  const [pageTitle, setPageTitle] = useState("Reference data tables");
  const [notifications, setNotifications] = useState<Record<string, number>>({
    "All tables": 0,
    "Favorite tables": 0,
    "Most common": 0,
  });

  const [selectedCheckbox, setSelectedCheckbox] = useState<string>("");
  const [tabContent, setTabContent] = useState(tabs[0]); // Default to first tab

  // useEffect(() => {
  //   fetchDynamicNotifications().then((data) => setNotifications(data));
  // }, []);

  const handleBreadcrumbClick = useCallback(
    (item: string, index: number) => {
      const newCrumbs = breadcrumbs.slice(0, index + 1);
      setBreadcrumbs(newCrumbs);
      setPageTitle(item);
    },
    [breadcrumbs]
  );

  const handleTabClick = useCallback((tab: typeof tabs[0]) => {
    setTabContent(tab);
    setPageTitle(tab.label);
    setBreadcrumbs(["Overview", "Reference data tables"]);
  }, []);

  const handleCheckboxChange = useCallback((type: string) => {
    setSelectedCheckbox((prev) => (prev === type ? "" : type));
  }, []);

  // const filteredNotifications = useMemo(() => {
  //   return notifications[tabContent.label] || 0;
  // }, [notifications, tabContent.label]);

  return (
    <Panel>
      <Breadcrumbs items={breadcrumbs} onItemClick={handleBreadcrumbClick} />
      <Panel>
        <h2 className="page-title">{pageTitle}</h2>
      </Panel>
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
            />
          </Panel>
        </TabsNext>
      </StackLayout>
    </Panel>
  );
};

export default ReferenceDataPage;
