import React from "react";
import "./CustomBreadcrumbs.css";

interface CustomBreadcrumbsProps {
  items: string[];
  onItemClick: (item: string, index: number) => void;
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({ items, onItemClick }) => {
  return (
    <div className="breadcrumbs-wrapper">
      {items.map((item, index) => (
        <span key={index} className="crumb" onClick={() => onItemClick(item, index)}>
          {item}
          {index < items.length - 1 && <span className="crumb-separator">›</span>}
        </span>
      ))}
    </div>
  );
};

export default CustomBreadcrumbs;




