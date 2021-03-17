import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToFeed } from "../routers/coordinator";

export const useUnProtectPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      goToFeed(history);
    }
  }, [history]);
};
