import axios from "axios";

export function requestGetActivity() {
  return axios.request({
    method: "get",
    url: "https://www.boredapi.com/api/activity"
  });
}

export default requestGetActivity