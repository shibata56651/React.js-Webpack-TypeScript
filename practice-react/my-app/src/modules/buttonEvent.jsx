const ButtonEvent = (props) => {
  return <button onClick={() => {props.clickEvent(props.num)}}>{props.num}</button>
}

export default ButtonEvent;