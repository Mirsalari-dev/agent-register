import axios from "axios";
import { IGetCitiesProps } from "./getCities.types";

// TODO: add api call when it is ready to get cities lists
export const getCities = async ({
  province,
}: IGetCitiesProps): Promise<any> => {
  const response = await axios.get<any>(
    "https://stage-api.sanaap.co/base/counties_wop/",
    {
      params: { province },
    }
  );
  return response?.data;
};
