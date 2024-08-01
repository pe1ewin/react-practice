import './index.scss';
import React from 'react'
function App() {
  const [count, newCount] = React.useState(0);

  const onClickSum = () => {
    newCount(count + 1);
  }
  const onClickMin = () => {
    newCount(count - 1);
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={onClickMin}>- Минус</button>
        <button className="plus" onClick={onClickSum}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
