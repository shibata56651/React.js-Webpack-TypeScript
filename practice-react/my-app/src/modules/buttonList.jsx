const ButtonList = (props) => {
  return (
    <div className="btn-list">
      <ul>
        <li><button dataFlg="profile" onClick={() => {props.clickEvent(props.flg)}}>プロフィール</button></li>
        <li><button dataFlg="achievement" onClick={() => {props.clickEvent(props.flg)}}>実績</button></li>
        <li><button dataFlg="contact" onClick={() => {props.clickEvent(props.flg)}}>問い合わせ</button></li>
      </ul>
    </div>
  )
}

export default ButtonList;