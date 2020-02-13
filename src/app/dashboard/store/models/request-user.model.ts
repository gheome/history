export interface RequestUser {
  lastName: string;
  email: string;
  approved: boolean;
}

export interface UserActionPayload {
  email: string;
  enable: boolean;
  delete: boolean;
}
