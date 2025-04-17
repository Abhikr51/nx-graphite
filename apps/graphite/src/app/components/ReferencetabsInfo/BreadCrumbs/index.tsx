import React, { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { Panel, StackLayout, Text, Link } from "@salt-ds/core";
import "./BreadcrumbIndex.css"; // Import CSS for styles
import ReferenceDataPage from "../ReferenceTabs/ReferenceDataPage";

interface BreadcrumbItem {
  label: string;
  component: React.ReactNode;
  showButton?: boolean;
  nextBreadcrumb?: string;
}

const BreadcrumbEntry: React.FC = () => {
  // Unified data structure for breadcrumbs and buttons
  const breadcrumbOptions: BreadcrumbItem[] = [
    {
      label: "Overview",
      component: "",
      showButton: true,
      nextBreadcrumb: "Reference data tables",
    },
    {
      label: "Reference data tables",
      component: <ReferenceDataPage />,
      showButton: false,
    },
  ];

  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    breadcrumbOptions[0],
  ]);

  const handleBreadcrumbClick = (item: BreadcrumbItem, index: number) => {
    // Update breadcrumbs and render the corresponding component
    const newBreadcrumbs = breadcrumbs.slice(0, index + 1);
    setBreadcrumbs(newBreadcrumbs);
  };

  const addBreadcrumb = (nextBreadcrumb: string) => {
    const item = breadcrumbOptions.find((b) => b.label === nextBreadcrumb);
    if (item) {
      setBreadcrumbs([...breadcrumbs, item]);
    }
  };

  return (
    <StackLayout direction="column" gap={2} className="breadcrumb-entry-layout">
      <Breadcrumbs
        items={breadcrumbs.map((b) => ({ label: b.label }))}
        onItemClick={(item, index) => {
          const breadcrumbItem = breadcrumbOptions.find(
            (b) => b.label === item.label
          );
          if (breadcrumbItem) {
            handleBreadcrumbClick(breadcrumbItem, index);
          }
        }}
      />
      <Text className="breadcrumb-header">
        {breadcrumbs[breadcrumbs.length - 1].label}
      </Text>
      <Panel className="breadcrumb-content-layout">
        {/* Dynamically render the component based on the last breadcrumb */}
        {breadcrumbs[breadcrumbs.length - 1].component}
      </Panel>
      <StackLayout direction="row" gap={1}>
        {/* Dynamically render buttons based on the unified data structure */}
        {breadcrumbs[breadcrumbs.length - 1].showButton &&
          breadcrumbs[breadcrumbs.length - 1].nextBreadcrumb && (
            <Link
              onClick={() =>
                addBreadcrumb(breadcrumbs[breadcrumbs.length - 1].nextBreadcrumb!)
              }
            >
              Show {breadcrumbs[breadcrumbs.length - 1].nextBreadcrumb}
            </Link>
          )}
      </StackLayout>
    </StackLayout>
  );
};

export default BreadcrumbEntry;
