import Button from "./button";
import { GoBell } from 'react-icons/go';

function App() {
  const handleClick = () => {
    console.log("Click!!");
  }
  return (
    <div>
      <div>
        <Button success outline rounded onClick={handleClick}>
          <GoBell />
          Click me!
          </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>Seal!</Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>Deal!</Button>
      </div>
      <div>
        <Button secondary outline>Feel!</Button>
      </div>
      <div>
        <Button primary rounded>Steal!</Button>
      </div>
    </div>
  );
}

export default App;
