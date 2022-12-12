const PublishButton = (props) => {

  return <button onClick={() => props.clickEvent()}>公開状態：{props.isPublished ? 'OPEN':'CLOSE'}</button>;
}

export default PublishButton;