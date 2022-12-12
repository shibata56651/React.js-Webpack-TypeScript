import {CountUpEvent, CountDownEvent} from './index';
import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(prevState => prevState + 1);
  }

  const countDown = () => {
    setCount(prevState => prevState - 1);
  }

  return (
    <div>
      <p>{count}</p>
      <CountUpEvent onClick={countUp} />
      <CountDownEvent onClick={countDown} />
    </div>
  )
}

export default Counter;