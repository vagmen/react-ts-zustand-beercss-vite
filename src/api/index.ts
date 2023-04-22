import axios, { AxiosResponse } from "axios";
import { IBeer } from "../interfaces";
import { ENDPOINT } from "../constants";

export interface IGetBeersProps {
  page: number;
}

export const getBeers = async ({
  page,
}: IGetBeersProps): Promise<AxiosResponse<IBeer[]>> => {
  const pageStr = page ? "" : "";
  return axios.get(ENDPOINT + pageStr);
};
