import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const useQueryParams = () => {
  //get query params from url
  const { search } = useLocation();
  return useMemo(() => {
    let query = {};
    //convert entries to object
    for (let [key, value] of new URLSearchParams(search)) {
      query[key] = value;
    }
    return query;
  }, [search]);
};
export default useQueryParams;
