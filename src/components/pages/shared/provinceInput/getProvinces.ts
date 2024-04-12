import axios from "axios";
import { IGetProvincesResponse } from "./provinceInput.types";

export const getProvinces = async (): Promise<IGetProvincesResponse[]> => {
  const response = await axios.get<IGetProvincesResponse[]>(
    "https://stage-api.sanaap.co/base/provinces_wop/"
  );
  return response?.data;
};
