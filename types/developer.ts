/* eslint-disable @typescript-eslint/no-explicit-any */
// export type developerMenuItemsType = {
//   name: string;
//   icon?: React.ReactElement;
//   link: string;
//   submenu?: {
//     name: string;
//     link: string;
//   }[];
// };

export type CountryType = {
  id: string;
  name: string;
  stateCount: number;
  code: string;
  region: string;
};

export type StateType = {
  id: string;
  name: string;
  citiesCount: number;
  code: string | null;
  country: string | null;
  dateCreated: string | null;
};

export type CityType = {
  id: string;
  name: string;
  stateId: string;
  dateCreated: string;
  state: string | null;
  popularLandMark: string | null;
  popularLandMarkLongitude: number;
  popularLandMarkLatitude: number;
  extraProperty: any | null;
};

export type HouseStatsType = {
  totalHouses: number;
  totalUnits: number;
};

export type OrganizationType = {
  id: string;
  name: string;
  address: string;
  coverImage: string;
  logo: string;
  houseCount: number;
  estateCount: number;
  yearsInOperation: number;
  documentCount: number;
  partnerCount: number;
};

export type CreatedByType = {
  Id: string;
  Name: string;
  RegistrationType: string;
  Action: string;
};

export type ImageType = {
  id: string;
  name: string;
  description: string | null;
  extension: string;
  document: string;
  type: string;
  optionId: string;
};

export type EstateType = {
  id: string;
  name: string;
  city: CityType;
  address: string;
  landmark: string;
  longitude: number;
  latitude: number;
  videoUrl: string;
  landSize: number;
  ownerType: "DEVELOPER";
  description: string;
  completionStatus: "COMPLETED" | "UNDER_CONSTRUCTION";
  completionDate: string;
  completionLevel: number;
  features: any[];
  feature: any | null;
  images: ImageType[] | [];
  houses: any[];
  houseStats: HouseStatsType;
  organizationId: string;
  floors: number;
  organization: OrganizationType;
  createdBy: CreatedByType | string;
  dateCreated: string;
  dateLastModified: string | null;
  lastModifiedBy: string | null;
};
