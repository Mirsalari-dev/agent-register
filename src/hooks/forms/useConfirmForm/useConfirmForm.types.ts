export interface ICreatorUser {
  id: null | number;
  first_name: string;
  last_name: string;
  username: string;
}
export interface ICounty {
  id: null | number;
  is_active: boolean;
  name: string;
  fanavaran_code: string;
  name_split: string;
  province: IProvince;
  creator_user: ICreatorUser;
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

export interface IConfirmFormikProps {
  first_name: string;
  last_name: string;
  address: string;
  agency_type: string;
  agent_code: string;
  city_code: string;
  county: ICounty;
  insurance_branch: {
    name: string;
    id: null | number;
  };
  phone: string;
  province: IProvince;
  name: string;
}
