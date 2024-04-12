export interface IGetCitiesProps {
  province?: string | number;
}

export interface ICreatorUser {
  id: null | number;
  first_name: string;
  last_name: string;
  username: string;
}

export interface IProvince {
  id: null | number;
  is_active: boolean;
  name: string;
  code: string;
  name_split: string;
  creator_user: ICreatorUser;
  country: null | number;
}

export interface IGetCitiesResponse {
  id: number;
  is_active: boolean;
  name: string;
  fanavaran_code: string;
  name_split: string;
  province: IProvince;
  creator_user: ICreatorUser;
}
