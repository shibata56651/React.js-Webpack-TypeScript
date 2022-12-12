import {useState} from "react";
import {Title, Content, PublishButton} from "./index";

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);
  const publishArticle = () => {
    // isPublishedの値を読み取り、反転させる（!がつくと）
    setIsPublished(prevState => !prevState);
  }
  return(
    <div>
      <Title title={props.title}></Title>
      <Content content={props.content}></Content>
      <PublishButton isPublished={isPublished} clickEvent={publishArticle}></PublishButton>
    </div>
  );
}

export default Article;