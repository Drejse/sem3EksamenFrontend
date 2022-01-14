/* eslint-disable no-unused-vars */
import apiFacade from "./apiFacade";
import SERVER_URL from "../constant";
const URL = SERVER_URL;

const getConferences = (test) => {
  const options = makeOptions("GET");
  return fetch(URL + "/api/info/conf", options)
    .then((res) => handleHttpErrors(res))
    .then((data) => test(data));
};

const deleteTalk = (id) => {
  const options = makeOptions("DELETE");
  return fetch(URL + "/api/info/deletetalk" + id, options)
    .then((res) => res.json())
    .then((res) => handleHttpErrors(res))
    .then((json) => {});
};

const createConference = (body) => {
  const options = makeOptions("POST", body);
  return fetch(URL + "/api/info/createconf", options).then((res) =>
    handleHttpErrors(res)
  );
};

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
  deleteTalk,
  createConference,
};

export default userFacade;
