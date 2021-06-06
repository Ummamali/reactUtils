import { useSelector } from "react-redux";
import useLogOut from "./useLogOut";
import useRequest from "./useRequest";

export default function useAuthRequest() {
  // this is a special version of useRequest
  // adds a token to the body object before sending the request
  // if the server replies [3] and resObject has a status of 401(unauthorized), automatically dispatches a logout action
  const [reqData, sendNormalRequest] = useRequest();
  const token = useSelector((state) => state.auth.token);
  function sendAuthRequest(data) {
    data.body = data.body === undefined ? {} : data.body;
    data.body.token = token;
    sendNormalRequest(data);
  }
  useLogOut(reqData);
  return [reqData, sendAuthRequest];
}
