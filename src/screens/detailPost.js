import {React, useState, useEffect}  from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import CreateComment from "../components/createComment";
import CommentCard from "../components/commentCard";
import { baseUrl } from "../constants/constants";
import { useProtectPage } from "../hooks/useProtectPage";
import { goToFeed } from "../routers/coordinator";
import { CreatePostContainer, Buttons } from "../styled/styled";

function PostDetailPage() {
  const history = useHistory();
  useProtectPage();
  const params = useParams();
  const [details, setDetails] = useState([]);

  const getPostDetails = () => {
    axios
      .get(`${baseUrl}/posts/${params.id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setDetails(response.data.post);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPostDetails();
  }, [details]);

  return (
    <CreatePostContainer>
      <Buttons onClick={() => goToFeed(history)}> Voltar pro Feed </Buttons>
      <div>
        <div>
          <div>
            <h3>{details.username}</h3>
            <h1>{details.title}</h1>
            <p>{details.text}</p>
          </div>
          <CreateComment id={details.id} />
        </div>
        <div>
          {details.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            details.comments.map((comment) => {
              return (
                <CommentCard
                  id={comment.id}
                  text={comment.text}
                  username={comment.username}
                  userVoteDirection={comment.userVoteDirection}
                  votesCount={comment.votesCount}
                  commentId={comment.id}
                  postId={params.id}
                />
              );
            })
          )}
        </div>
      </div>
    </CreatePostContainer>
  );
}

export default PostDetailPage;
