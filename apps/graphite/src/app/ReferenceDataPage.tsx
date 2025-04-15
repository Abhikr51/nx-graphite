import React, { useEffect, useState } from "react";
import { Badge, Checkbox } from "@salt-ds/core";
import CustomBreadcrumbs from "./CustomBreadcrumbs";
import "./ReferenceDataPage.css";
import { StackLayout } from "@salt-ds/core";
import {
  TabBar,
  TabListNext,
  TabNext,
  TabNextTrigger,
  TabsNext,
} from "@salt-ds/lab";
import { Outlet, useNavigate } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";



const tabs = [
  { label: "All tables", value: "all", route: "/all-tables" },
  { label: "Favorite tables", value: "favorite", route: "/favorite-tables" },
  { label: "Most common", value: "common", route: "/most-common-tables" },
];

const checkboxConfig = [
  { type: "editable", label: "Editable", notificationKey: "20" },
  { type: "nonEditable", label: "Non-Editable", notificationKey: "10" },
];

const fetchDynamicNotifications = (): Promise<Record<string, number>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "All tables": 2,
        "Favorite tables": 4,
        "Most common": 6,
      });
    }, 1000);
  });
};

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
  const [checkboxStates, setCheckboxStates] = useState<Record<string, boolean>>({
    editable: false,
    nonEditable: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await fetchDynamicNotifications();
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  const handleBreadcrumbClick = (item: string, index: number) => {
    const newCrumbs = breadcrumbs.slice(0, index + 1);
    setBreadcrumbs(newCrumbs);
    setPageTitle(item);
  };

  const handleTabClick = (route: string, label: string) => {
    navigate(`.${route}`);
    setPageTitle(label);
    setBreadcrumbs(["Overview", "Reference data tables"]);
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [type]: checked,
    }));
  };
  return (
    <div className="page">
      <CustomBreadcrumbs
        items={breadcrumbs}
        onItemClick={handleBreadcrumbClick}
      />
      <div>
        <Breadcrumbs
          items={breadcrumbs}
          onItemClick={handleBreadcrumbClick}
        />
      </div>
      <h2 className="page-title">{pageTitle}</h2>
      <StackLayout>
        <TabsNext defaultValue={tabs[0].value}>
          <TabBar divider={true} inset={true}>
            <TabListNext appearance="transparent">
              {tabs.map((tab) => (
                <TabNext
                  defaultValue={tabs[0].value}
                  value={tab.value}
                  key={tab.label}
                  onClick={() => handleTabClick(tab.route, tab.label)}
                >
                  <TabNextTrigger>
                    {tab.label}
                    {notifications[tab.label] > 0 ? (
                      <Badge
                        value={notifications[tab.label]}
                        aria-label={`${notifications[tab.label]} updates`}
                      />
                    ) : null}
                  </TabNextTrigger>
                </TabNext>
              ))}
            </TabListNext>
          </TabBar>
        </TabsNext>
      </StackLayout>
      <div className="checkbox-section">
        <div className="checkbox-container">
          {checkboxConfig.map(({ type, label, notificationKey }) => (
            <Checkbox
              key={type}
              label={`${label} (${notificationKey})`}
              checked={checkboxStates[type]}
              onChange={(event) =>
                handleCheckboxChange(type, event.target.checked)
              }
            />
          ))}
        </div>
      </div>
      <Outlet />

    </div>
  );
};

export default ReferenceDataPage;
