import React from 'react';

function App() {
  const array = <T, Y>(fir: T, sec: Y) => {
    return <><div>{fir}</div><div>{sec}</div></>
  }

  return (
    <div className="App">
      React
      {array(5, 3)}
    </div>
  );
}

export default App;
