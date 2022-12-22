import {CountUpEvent, CountDownEvent} from './index';
import React, {useEffect, useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(prevState => prevState + 1);
  }

  const countDown = () => {
    setCount(prevState => prevState - 1);
  }

  // useEffect(() => {
  //   // 毎回実行
  //   console.log('Current count is:', count)
  // })

  // useEffect(() => {
  //   // 初回レンダリング後のみ
  //   console.log('初回レンダリング:', count)
  // }, [])

  useEffect(() => {
    // カウントに変更が加わったときのみ実行
    console.log('カウントアップだけ:', count)
  }, [count])

  // useEffect(() => {
  //   // カウントアップかカウントダウンのときのみ実行
  //   console.log('カウントアップorカウントダウン:', count)
  // }, [countUp, countDown])

  return (
    <div>
      <p>{count}</p>
      <CountUpEvent onClick={countUp} />
      <CountDownEvent onClick={countDown} />
    </div>
  )
}

export default Counter;