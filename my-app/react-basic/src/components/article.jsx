import {useState} from "react";
import {Title, Content, PublishButton} from "./index";

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);
  const publishArticle = () => {
    setIsPublished(true)
  }
  return(
    <div>
      <Title title={props.title}></Title>
      <Content content={props.content}></Content>
      <PublishButton isPublished={isPublished} onClick={publishArticle}></PublishButton>
    </div>
  );
}

export default Article;