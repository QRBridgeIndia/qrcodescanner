import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  return (url, state = null) => {
    navigate(url, { state });
  };
};
