import React from "react";
import { useHistory } from "react-router-dom";
import { goToDetailsPosts } from "../routers/coordinator";
import { CardPosts, Buttons } from "../styled/styled";
import { votePost } from "../constants/user";

function PostCard(props) {
  const history = useHistory();

  const handleVote = (decision) => {
    const body = {
      direction: decision,
    };

    votePost(body, props.id);
  };

const like = () => {
  if (props.direction === 0) {
    return (
      <div>
        <Buttons onClick={() => handleVote(1)}>Votar</Buttons>
        <p>Votos: {props.votesCount}</p>
        
      </div>
    );
  } else if (props.direction === 1) {
    return (
      <div>
        <Buttons onClick={() => handleVote(0)}>Votar</Buttons>
        <p>Votos: {props.votesCount}</p>
        
      </div>
    );
  } else {
    <div>
      <Buttons onClick={() => handleVote(1)}>Votar</Buttons>
      <p>Votos: {props.votesCount}</p>
      
    </div>;
  }
};

  return (
    <CardPosts>
      <h3>{props.username}</h3>
      <h3> {props.title}</h3>
      <p> {props.text} </p>
       {like()} 
      <p> {props.commentsCount} Comentários </p>

      <Buttons onClick={() => goToDetailsPosts(history, props.id)}>
        Detalhes do Post
      </Buttons>
    </CardPosts>
  );
}

export default PostCard;
