import React, { useMemo } from "react";
import ReferenceData from "../../pages/ReferenceData";

type FilteredComponentProps = {
  filter: string;
  checkboxValue: string;
};

const mockData = [
  { type: "editable", label: "Editable All", value: "all", data: "Editable All tables data" },
  { type: "nonEditable", label: "Non-Editable All", value: "all", data: "Non-Editable All tables data" },
  { type: "editable", label: "Editable Favorite", value: "favorite", data: "Editable Favorite tables data" },
  { type: "nonEditable", label: "Non-Editable Favorite", value: "favorite", data: "Non-Editable Favorite tables data" },
  { type: "editable", label: "Editable Common", value: "common", data: "Editable Common tables data" },
  { type: "nonEditable", label: "Non-Editable Common", value: "common", data: "Non-Editable Common tables data" },
];

const FilteredComponent: React.FC<FilteredComponentProps> = ({ filter, checkboxValue }) => {
  const filteredData = useMemo(() => {
    return mockData.filter(
      (item) => item.value === filter && (!checkboxValue || item.type === checkboxValue)
    );
  }, [filter, checkboxValue]);

  if (filteredData.length === 0) {
    return <p>No data found for the selected filter and checkbox.</p>;
  }

  return (
    <div>
      {/* <h3>{`Filtered Data for: ${filter} (${checkboxValue})`}</h3>
      {filteredData.map((item, index) => (
        <div key={index}>
          <h4>{item.label}</h4>
          <p>{item.data}</p>
        </div>
      ))} */}
      <ReferenceData />
      
    </div>
  );
};

export default FilteredComponent;
