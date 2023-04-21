const ButtonList = (props) => {
  let categoriesText = '';
  let imgPath = '';

  if (props.categories === 'profile') {
    categoriesText = 'プロフィール';
    imgPath = <span className="material-symbols-outlined btn-list__item-icon">person</span>;
  } else if (props.categories === 'achievement') {
    categoriesText = '実績';
    imgPath = <span className="material-symbols-outlined btn-list__item-icon">military_tech</span>;
  } else if (props.categories === 'contact') {
    categoriesText = '問い合わせ';
    imgPath = <span className="material-symbols-outlined btn-list__item-icon">mail</span>;
  }

  return (
    <li className="btn-list__item"><button className="btn-list__item-btn" onClick={() => {props.clickEvent(props.categories)}}>{imgPath}{categoriesText}</button></li>
  )
}

export default ButtonList;