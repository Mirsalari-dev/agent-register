import axios from "axios";
import { IGetCitiesProps, IGetCitiesResponse } from "./getCities.types";

export const getCities = async ({
  province,
}: IGetCitiesProps): Promise<IGetCitiesResponse[]> => {
  const response = await axios.get<IGetCitiesResponse[]>(
    "https://stage-api.sanaap.co/base/counties_wop/",
    {
      params: { province },
    }
  );
  return response?.data;
};
