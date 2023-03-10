import Button from "../components/Button";
import { GoBell } from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {
    console.log("Click!!");
  }
  return (
    <div>
      <div>
        <Button success outline rounded onClick={handleClick} className='mb-5'>
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

export default ButtonPage;
