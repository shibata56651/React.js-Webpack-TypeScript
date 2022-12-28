import { useEffect, useState } from 'react';
import {Display, ButtonList} from './modules/index';

function App2() {
  const [flg, setFlg] = useState('');

  const flgEvent = (judgeFlg) => {
    setFlg(() => {
      if (judgeFlg === '') {}
    });
  }

  return (
    <div className="str-wrapper">
      <Display />
      <ButtonList clickEvent={() => {flgEvent(flg)}} />
    </div>
  );
}

export default App2;