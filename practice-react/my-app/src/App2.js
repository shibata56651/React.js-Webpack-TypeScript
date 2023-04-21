import { useEffect, useState } from 'react';
import {DisplayContents, ButtonList, NewSectionBtn, NewSectionForm} from './modules/index';

function App2() {
  const [flg, setFlg] = useState('profile');
  const [sectionFlg, setSectionFlg] = useState(false);

  const flgEvent = (judgeFlg) => {
    setFlg(() => judgeFlg);
  }

  const sectionFlgEvent = () => {
    setSectionFlg(prevState => !prevState);
  }

  return (
    <div className="str-wrapper">
      <DisplayContents displayFlg={flg} />
      <div className="btn-list">
        <ul>
          <ButtonList categories={'profile'} clickEvent={flgEvent} />
          <ButtonList categories={'achievement'} clickEvent={flgEvent} />
          <ButtonList categories={'contact'} clickEvent={flgEvent} />
        </ul>
      </div>
      <NewSectionBtn sectionFlg={sectionFlg} clickEvent={sectionFlgEvent} />
      <NewSectionForm sectionFlg={sectionFlg} clickEvent={sectionFlgEvent} />
    </div>
  );
}

export default App2;