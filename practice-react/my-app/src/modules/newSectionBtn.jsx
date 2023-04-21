
const NewSectionBtn = (props) => {

  const statusOpenClass = 'is-open';
  const statusCloseClass = 'is-close';
  let statusText = '開く';
  let statusClass = '';

  if (props.sectionFlg) {
    statusText = '閉じる';
    statusClass = statusOpenClass;
  } else {
    statusText = '開く';
    statusClass = statusCloseClass;
  }

  return <button className={`${statusClass} btn__new-section`} type="button" onClick={() => {props.clickEvent()}}><span className="btn__new-section-text">{statusText}</span></button>
}

export default NewSectionBtn;