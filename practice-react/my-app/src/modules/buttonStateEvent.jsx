const ButtonStateEvent = (props) => {
  return <button onClick={() => {props.clickEvent(props.num)}}>{props.num}</button>
}

export default ButtonStateEvent;