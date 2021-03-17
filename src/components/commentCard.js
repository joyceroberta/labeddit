import React from "react";
import { voteComment } from "../constants/user";
import { ButtonsCards, CardComments } from "../styled/styled";

const CommentCard = (props) => {
  const handleVote = (decision) => {
    const body = {
      direction: decision,
    };
    voteComment(body, props.postId, props.commentId);
  };

  return (
    <CardComments>
      <p>{props.username}</p>
      <p>{props.text}</p>
      <p>Votos: {props.votesCount}</p>
      <ButtonsCards onClick={() => handleVote(1)}>Like</ButtonsCards>
      <ButtonsCards onClick={() => handleVote(-1)}>Dislike</ButtonsCards>
    </CardComments>
  );
};

export default CommentCard;


