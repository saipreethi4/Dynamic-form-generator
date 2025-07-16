export interface IFORM_DATA {
  type : string; 
  label : string;
  name : string;
  required ?: boolean;
};

export interface IDATA_A {
  fullName: string;
  email: string;
  subscribe: boolean;
};

export interface IDATA_B {
  username: string;
  password: string;
  remember: boolean;
};

export interface IFORM_DETAILS {
  formADetails: IDATA_A[];
  formBDetails: IDATA_B[];
};

export interface IDATA_A_DATA_B {
  fullName: string;
  email: string;
  subscribe: boolean;
  username: string;
  password: string;
  remember: boolean;
};