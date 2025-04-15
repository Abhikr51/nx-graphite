import { FlexLayout } from "@salt-ds/core";
import useRefData from "../../hooks/useRefData";
import GridHandlaer from "../../components/GridLayout";
import { useState } from "react";

const ReferenceData = () => {
  const { highCriticality, lowCriticality, mediumCriticality } = useRefData();
  const [active, setActive] = useState(true);
  const handleActiveToggle = () => {
    setActive((current: any) => !current);
  };

  return (
    <FlexLayout margin={2}>
      <GridHandlaer
        active={active}
        handleActiveToggle={handleActiveToggle}
        Label={"High criticality"}
        data={highCriticality}
        rows={10}
        columns={3}
      />
      <GridHandlaer
        active={active}
        handleActiveToggle={handleActiveToggle}
        Label={"Medium criticality"}
        data={mediumCriticality}
        rows={10}
        columns={1}
      />
      <GridHandlaer
        active={active}
        handleActiveToggle={handleActiveToggle}
        Label={"Low criticality"}
        data={lowCriticality}
        rows={10}
        columns={1}
      />
    </FlexLayout>
  );
};

export default ReferenceData;
