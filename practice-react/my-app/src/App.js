import {useEffect, useState} from 'react';
import {ButtonEvent} from './modules/index'
import {ButtonStateEvent} from './modules/index'

function App() {
  const [firstNum, firstSetSum] = useState(0);
  const [secondNum, secondSetSum] = useState(0);
  const [symbol, symbolChange] = useState();
  const [flg, flgChange] = useState(false);
  const [sum, setSum] = useState(0);

  const setNum = (num) => {
    Number(num);

    if ((firstNum === 0 || secondNum === 0) && num === 0) {
      flg ? firstSetSum(() => String(num)) : secondSetSum(() => String(num));
    } else {
      flg ? firstSetSum(prevState => String(prevState) + String(num)) : secondSetSum(prevState => String(prevState) + String(num));
    }
  }

  const symbolEvent = (init) => {
    flgChange(prevState => !prevState);
    symbolChange(() => init);
  }

  const multi = (a, b) => {
    return a * b;
  }

  const addition = (a, b) => {
    return a + b;
  }

  const subtraction = (a, b) => {
    return a - b;
  }

  const summingUp = () => {
    setSum(() => {
      if (symbol === '*') {
        return multi(Number(firstNum), Number(secondNum));
      } else if (symbol === '+') {
        return addition(Number(firstNum), Number(secondNum));
      } else if (symbol === '-') {
        return subtraction(Number(firstNum), Number(secondNum));
      }
    });
  }

  return (
    <div className="str-contents">
      <p className='sum'>{`${flg ? firstNum : secondNum}`}</p>
      <p className='sum'>{sum}</p>
      <div className='block'>
        <ButtonEvent num={1} clickEvent={setNum} />
        <ButtonEvent num={2} clickEvent={setNum} />
        <ButtonEvent num={3} clickEvent={setNum} />
      </div>
      <div className='block'>
        <ButtonEvent num={4} clickEvent={setNum} />
        <ButtonEvent num={5} clickEvent={setNum} />
        <ButtonEvent num={6} clickEvent={setNum} />
      </div>
      <div className='block'>
        <ButtonEvent num={7} clickEvent={setNum} />
        <ButtonEvent num={8} clickEvent={setNum} />
        <ButtonEvent num={9} clickEvent={setNum} />
      </div>
      <div className='block'>
        <ButtonEvent num={0} clickEvent={setNum} />
        <ButtonStateEvent num={'+'} clickEvent={symbolEvent} />
        <ButtonStateEvent num={'*'} clickEvent={symbolEvent} />
        <ButtonStateEvent num={'='} clickEvent={summingUp} />
      </div>
    </div>
  );
}

export default App;
