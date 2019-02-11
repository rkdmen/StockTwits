import axios from "axios";
import * as type from "../constants/ActionTypes";

export function retriveMsg(symbol) {
  const request = axios.get("api/stock/", { params: { symbol } });
  return {
    type: type.RETRIEVE_MSG,
    payload: request
  };
}

export function addStockToJSON(symbol) {
  const request = axios.post("api/dataJSON/", { symbol });
  return {
    type: type.ADD_STOCK_JSON,
    payload: request
  };
}

export function getSymbolJSON() {
  const request = axios.get("api/dataJSON/");
  return {
    type: type.GET_STOCK_JSON,
    payload: request
  };
}

export function deleteSymbolJSON(symbol) {
  const request = axios.delete("api/dataJSON/" + symbol);
  return {
    type: type.DELETE_STOCK_JSON,
    payload: request
  };
}

export function getUserMsg(user) {
  const request = axios.get("api/user/", { params: { user } });
  return {
    type: type.GET_USER_MESSAGE,
    payload: request
  };
}
