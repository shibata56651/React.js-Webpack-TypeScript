import { useEffect, useState } from "react";
import displayDataJson from "./displayData";

const NewSectionForm = (props) => {

  const [valueText, valueSetText] = useState('');
  let [jsonState, jsonSetState] = useState([]);
  const [sendState, sendSetType] = useState('profile');

  const getData = () => {
    fetch('http://localhost:3000/modules/displayData.json'
    ,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
    .then(function(response){
      console.log(response);
      return response.json();
    })
    .then(function(myJson){
      console.log(myJson);
      jsonSetState(myJson);
    });
  }

  useEffect(() => {
    getData();
    // console.log(jsonState)
  },[])

  /**
   * @param {void} event
   * input入力テキストをHooksに格納
   */
  const setTextEvent = (event) => {
    valueSetText(event.target.value);
  }

  const clickSendEvent = () => {

    // switch (sendState) {
    //   case 'profile':
    //     jsonState = jsonState.profile;
    //     break;
    //   case 'achievement':
    //     jsonState = jsonState.achievement;
    //     break;
    //   case 'contact':
    //     jsonState = jsonState.contact;
    //     break
    //   default :
    //     jsonState = jsonState.profile;
    //     break;
    // }

    // jsonSetState((prevState) => [...prevState, {userId: 'test', userName: 'テストユーザー', content: valueText}]);

    // console.log(jsonState);
  }

  const clickRemoveEvent = () => {
    props.sectionFlg = false;
  }

  const changeDestinationListEvent = (changeDestinationItem) => {
    sendSetType(changeDestinationItem);
  }

  if (props.sectionFlg) {
    return <div className="section__form-wrap">
      <div className="destination-list">
        <ul>
          <li className="destination-list__item">
            <input className="destination-list__item-radio" type="radio" id="profile" name="destination" value="profile" onChange={(event) => {changeDestinationListEvent(event.target.id)}} />
            <label htmlFor="profile">profile</label>
          </li>
          <li className="destination-list__item">
            <input className="destination-list__item-radio" type="radio" id="achievement" name="destination" value="achievement" onChange={(event) => {changeDestinationListEvent(event.target.id)}} />
            <label htmlFor="achievement">achievement</label>
          </li>
          <li className="destination-list__item">
            <input className="destination-list__item-radio" type="radio" id="contact" name="destination" value="contact" onChange={(event) => {changeDestinationListEvent(event.target.id)}} />
            <label htmlFor="contact">contact</label>
          </li>
        </ul>
      </div>
    <input className="section__form" type="text" value={valueText} onChange={(event) => {setTextEvent(event)}} />
    <div className="section__btn-content">
      <button className="btn__delete" type="button" onClick={() => {clickRemoveEvent()}}><span className="btn__send-text">削除</span></button>
      <button className="btn__send" type="button" onClick={() => {clickSendEvent()}}><span className="btn__send-text">送信</span></button>
    </div>
  </div>
  }
}

export default NewSectionForm;