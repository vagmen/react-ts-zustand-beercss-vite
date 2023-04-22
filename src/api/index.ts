import axios, { AxiosResponse } from "axios";
import { IBeer } from "../interfaces";
import { ENDPOINT } from "../constants";

export interface IGetBeersProps {
  page: number;
  pageSize: number;
}

export const getBeers = async ({
  page,
  pageSize,
}: IGetBeersProps): Promise<AxiosResponse<IBeer[]>> => {
  const pageStr = page ? "page=" + page : "";
  const pageSizeStr = page ? "&per_page=" + pageSize : "";
  return axios.get(ENDPOINT + "?" + pageStr + pageSizeStr);
};
