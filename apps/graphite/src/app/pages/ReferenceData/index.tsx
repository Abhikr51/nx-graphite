import { useEffect, useState } from "react";

// Import RefDataType from the API types
import { RefDataType } from "../../api/ApiTypes";

import GridHandlaer from "../../components/ReferenceItemBox/GridLayout";
import { SALTFlexLayout } from "../../components";

interface ReferenceDataProps {
  setNotifications: (notifications: any) => void;
  filter: any; // Define the type of 'filter' if known
  apiData: { highCriticality?: any[]; mediumCriticality?: any[]; lowCriticality?: any[] }[];
}interface TableData {
  title: string;
  highCriticality: RefDataType[];
  lowCriticality: RefDataType[];
  mediumCriticality: RefDataType[];
}

const ReferenceData = ({ filter, setNotifications,apiData }: ReferenceDataProps) => {
  
  const [active, setActive] = useState(true);
  const [allTableData, setAllTableData] = useState<TableData[]>([]);

  useEffect(()=>{
    setAllTableData([
      {
        title:"All Tables",
        highCriticality:apiData[0]?.highCriticality ?? [],
        lowCriticality:apiData[0]?.lowCriticality ?? [],
        mediumCriticality:apiData[0]?.mediumCriticality ?? [],
      },
      {
        title:"Favorite Tables",
        highCriticality:apiData[0]?.highCriticality?.slice(0,16) ?? [],
        lowCriticality:apiData[0]?.lowCriticality?.slice(0,8) ?? [],
        mediumCriticality:apiData[0]?.mediumCriticality?.slice(0,4) ?? [],
      },
      {
        title:"Common Tables",
        highCriticality:apiData[0]?.highCriticality?.slice(0,10) ?? [],
        lowCriticality:apiData[0]?.lowCriticality?.slice(0,3) ?? [],
        mediumCriticality:apiData[0]?.mediumCriticality?.slice(0,2) ?? [],
      }
    ])
  },[])
  const handleActiveToggle = () => {
    setActive((current: any) => !current);
  };

  const tabHandler = (value:string)=>{
    let currentData;
    if(filter === "all") currentData = allTableData[0]
    else if(filter === "favorite") currentData = allTableData[1]
    else currentData = allTableData[2]
    console.log("apiData***", currentData)
    if(value === "highCriticality"){
      return currentData?.highCriticality || [];
    }
    else if(value === "highCriticality") return currentData?.mediumCriticality || [];
    else return currentData?.lowCriticality || [];
  }

  return (
    <SALTFlexLayout margin={2}>
      <GridHandlaer
        active={active}
        handleActiveToggle={handleActiveToggle}
        Label={"High criticality"}
        data={tabHandler("highCriticality")}
        rows={10}
        columns={3}
      />
      <GridHandlaer
        active={active}
        handleActiveToggle={handleActiveToggle}
        Label={"Medium criticality"}
        data={tabHandler("mediumCriticality")}
        rows={10}
        columns={1}
      />
      <GridHandlaer
        active={active}
        handleActiveToggle={handleActiveToggle}
        Label={"Low criticality"}
        data={tabHandler("lowCriticality")}
        rows={10}
        columns={1}
      />
    </SALTFlexLayout>
  );
};

export default ReferenceData;
