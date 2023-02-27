import Button from "./button";

function App() {
  return (
    <div>
      <div>
        <Button secondary outline rounded>Click me!</Button>
      </div>
      <div>
        <Button danger outline>Seal!</Button>
      </div>
      <div>
        <Button warning>Deal!</Button>
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
