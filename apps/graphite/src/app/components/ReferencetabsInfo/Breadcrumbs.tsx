import React from "react";
import { FlowLayout, Link } from "@salt-ds/core";
import "./Breadcrumbs.css";

interface BreadcrumbProps {
    items: string[];
    onItemClick: (item: string, index: number) => void;
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items, onItemClick }) => {
    return (
        <nav aria-label="Breadcrumb">
            <FlowLayout>
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <Link
                            onClick={() => onItemClick(item, index)}
                            className="breadcrumb-link"
                        >
                            {item}
                        </Link>
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
