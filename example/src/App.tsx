import { hello } from 'use-socket';

const App = () => {
  const handleOnClick = () => {
    hello();
  };

  return (
    <div>
      <button onClick={handleOnClick}>Hello world</button>
    </div>
  );
};

export default App;
