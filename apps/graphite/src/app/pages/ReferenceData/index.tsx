import useRefData from "../../hooks/useRefData";

const ReferenceData = () => {
    const {highCriticality,lowCriticality,loading ,mediumCriticality} = useRefData()
    return (
      <div>
        <h1>highCriticality</h1>
        {loading ? <p>Loading...</p> : (
          <ul>
            {highCriticality.map((item) => (
              <li key={item.reference_table_id}>{item.reference_table_name}</li>
            ))}
          </ul>
        )}
        <h1>mediumCriticality</h1>
        {loading ? <p>Loading...</p> : (
          <ul>
            {mediumCriticality.map((item) => (
              <li key={item.reference_table_id}>{item.reference_table_name}</li>
            ))}
          </ul>
        )}
        <h1>lowCriticality</h1>
        {loading ? <p>Loading...</p> : (
          <ul>
            {lowCriticality.map((item) => (
              <li key={item.reference_table_id}>{item.reference_table_name}</li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default ReferenceData