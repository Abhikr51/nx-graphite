import React from "react";
import { FlowLayout, Link } from "@salt-ds/core";
import "./Breadcrumbs.css";

interface BreadcrumbItem {
  label: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onItemClick: (item: BreadcrumbItem, index: number) => void;
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items, onItemClick }) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-container">
      <FlowLayout>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index < items.length - 1 ? (
              <Link
                onClick={() => onItemClick(item, index)}
                className="breadcrumb-link"
              >
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="breadcrumb-separator">{">"}</span>
            )}
          </React.Fragment>
        ))}
      </FlowLayout>
    </nav>
  );
};

export default Breadcrumbs;
