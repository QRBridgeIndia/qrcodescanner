import { useLocation } from "react-router-dom";

export const useQueryData = () => {
  const location = useLocation();
  const queryData = location.state || {};

  return queryData;
};
