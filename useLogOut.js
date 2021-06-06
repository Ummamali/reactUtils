import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/store";

export default function useLogOut(reqData) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      reqData.status === 4 ||
      (reqData.status === 3 && reqData.resObj.status === 401)
    ) {
      dispatch(authActions.logOut());
    }
  }, [reqData.status, dispatch]);
}
