/* eslint-disable no-unused-vars */
import apiFacade from "./apiFacade";
import SERVER_URL from "../constant";
const URL = SERVER_URL;

function getConferences(test) {
  const options = makeOptions("GET");
  return fetch(URL + "/api/info/conf", options)
    .then((res) => handleHttpErrors(res))
    .then((data) => test(data));
}

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

const getUsername = () => {
  const token = apiFacade.getToken();
  if (token != null) {
    const payloadBase64 = apiFacade.getToken().split(".")[1];
    const decodedClaims = JSON.parse(window.atob(payloadBase64));
    const username = decodedClaims.username;
    return username;
  } else return "";
};

const userFacade = {
  getConferences,
  getUsername,
};

export default userFacade;
