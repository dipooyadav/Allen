import { useState } from 'react';

function ArrayComponent() {
  const [jsonData, setJsonData] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ]);

  function updateJsonData(newData) {
    setJsonData(newData);
  }

  return (
    <div>
      <ChildComponentA jsonData={jsonData} />
      <ChildComponentB jsonData={jsonData} updateJsonData={updateJsonData} />
    </div>
  );
}

function ChildComponentA(props) {
  const { jsonData } = props;

  return (
    <div>
      {jsonData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

function ChildComponentB(props) {
  const { jsonData, updateJsonData } = props;

  function handleDataChange() {
    const newData = [
      { id: 4, name: 'HII' },
      { id: 5, name: 'Charlie' },
    ];
    updateJsonData(newData);
  }

  return ( 
    <div>
      {jsonData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <button onClick={handleDataChange}>Change Data</button>
    </div>
  );
}

export default ArrayComponent;
