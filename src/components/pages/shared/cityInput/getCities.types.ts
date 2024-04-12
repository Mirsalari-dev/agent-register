export interface IGetCitiesProps {
  province?: string | number;
}

export interface IGetCitiesResponse {
  id: number;
  is_active: boolean;
  name: string;
  fanavaran_code: string;
  name_split: string;
  province: {
    id: number;
    is_active: boolean;
    name: string;
    code: string;
    name_split: string;
    creator_user: number;
    country: number;
  };
  creator_user: {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
  };
}
