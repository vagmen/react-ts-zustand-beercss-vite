import axios, { AxiosResponse } from "axios";
import { IBeer } from "../interfaces";
import { ENDPOINT } from "../constants";

export interface IGetBeersProps {
  page: number;
  pageSize?: number;
  beerName: string;
}

export const getBeers = async ({
  page,
  pageSize,
  beerName,
}: IGetBeersProps): Promise<AxiosResponse<IBeer[]>> => {
  const pageStr = page ? "page=" + page : "";
  const pageSizeStr = pageSize ? "&per_page=" + pageSize : "";
  const beerNameStr = beerName ? "&beer_name=" + beerName : "";

  return axios.get(ENDPOINT + "?" + pageStr + pageSizeStr + beerNameStr);
};
