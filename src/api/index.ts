import axios, { AxiosResponse } from "axios";
import { IBeer } from "../interfaces";
import { ENDPOINT } from "../constants";

export const getBeers = async (): Promise<AxiosResponse<IBeer[]>> => {
  return axios.get(ENDPOINT);
};
