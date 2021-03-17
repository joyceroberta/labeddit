export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignUp = (history) => {
  history.push("/register");
};

export const goToDetailsPosts = (history, id) => {
  history.push(`/posts/${id}`);
};

export const goToFeed= (history) => {
  history.push("/feed");
};


