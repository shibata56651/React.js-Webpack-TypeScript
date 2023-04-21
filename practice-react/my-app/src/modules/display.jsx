import { useEffect } from "react";
import displayDataJson from "./displayData";

const DisplayContents = (props) => {

  let jsonCategories = null;

  switch (props.displayFlg) {
    case 'profile':
      jsonCategories = displayDataJson.profile;
      break;
    case 'achievement':
      jsonCategories = displayDataJson.achievement;
      break;
    case 'contact':
      jsonCategories = displayDataJson.contact;
      break
    default :
      jsonCategories = displayDataJson.profile;
      break;
  }

  return <div id={props.displayFlg} className="display">
    <div className="list-profile">
      <ul>
        {jsonCategories.map((item, i) => (
          <li className="list-profile__item">
            <div className="list-profile__user-icon">
              <span className="material-symbols-outlined list-profile__user-icon-item">account_circle</span>
            </div>
            <div className="list-profile__contents">
            <div className="list-profile__user">
              <span className="list-profile__user-name">{item.userName}<span className="list-profile__user-id">(@{item.userId})</span></span>
            </div>
            <span className="list-profile__text">{item.content}</span>
            <div className="list-profile__btn">
              <div className="list-symbol">
                <ul>
                  <li className="list-symbol__item"><button className="list-symbol__btn list-symbol__btn--heart-btn"><span className="material-symbols-outlined list-symbol__btn-text">star</span></button></li>
                  <li className="list-symbol__item"><button className="list-symbol__btn list-symbol__btn--retweet"><span className="material-symbols-outlined list-symbol__btn-text">compare_arrows</span></button></li>
                  <li className="list-symbol__item"><button className="list-symbol__btn list-symbol__btn--retweet"><span className="material-symbols-outlined list-symbol__btn-text">reply</span></button></li>
                  <li className="list-symbol__item"><button className="list-symbol__btn list-symbol__btn--retweet"><span className="material-symbols-outlined list-symbol__btn-text">bookmark_add</span></button></li>
                  <li className="list-symbol__item"><button className="list-symbol__btn list-symbol__btn--other"><span className="material-symbols-outlined list-symbol__btn-text">pending</span></button></li>
                </ul>
              </div>
            </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
}

export default DisplayContents;