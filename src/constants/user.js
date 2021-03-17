import axios from "axios";
import { baseUrl } from "../constants/constants";
import { goToFeed} from "../routers/coordinator";


export const login = (body, history) => {
  axios
    .post(`${baseUrl}/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToFeed(history);
    })
    .catch((error) => {
      alert("Algo errado não está certo, verifique seu e-mail ou senha!");
      console.log(error.message);
    });
};


export const signUp = (body, history) => {
  axios
    .post(`${baseUrl}/signup`, body)

    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToFeed(history);
    })

    .catch((error) => {
      console.log(error.message);
    });
};

export const createPosts = (body, history) => {
  const token = localStorage.getItem("token");

  axios
    .post(`${baseUrl}/posts`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      alert("Post criado com sucesso!");
      console.log(response);
      goToFeed(history);
    })
    .catch((error) => {
      alert("Erro ao criar post, tente novamente!");
      console.log(error.message);
    });
};

export const createComments = (body, postId) => {
  const token = localStorage.getItem("token");

  axios.post(`${baseUrl}/posts/${postId}/comment`, body, {
    headers: {
      Authorization: token,
    },
  }).then((response) =>{
    alert("Comentário criado!")
    console.log(response)
  }).catch((error) =>{
    alert("Deu ruim")
    console.log(error.message)
  })
}

export const votePost = (body, postId) =>{
  const token = localStorage.getItem("token");
axios.put(`${baseUrl}/posts/${postId}/vote`, body, {
  headers: {
      Authorization: token,
    },
}).then((response) =>{
  alert("Opa! Votado!")
}).catch((error)=>{
  alert("Voto não computado.")
  console.log(error.message)
})

}

export const voteComment = (body, postId, commentId) => {
  const token = localStorage.getItem("token");
  axios
    .put(`${baseUrl}/posts/${postId}/comment/${commentId}/vote`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then(() => {
      alert("Opa! Votado!");
    })
    .catch((error) => {
      alert("Voto não computado.");
      console.log(error);
    });
};

