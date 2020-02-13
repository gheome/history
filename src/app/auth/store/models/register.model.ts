export interface RegisterState {
  request: boolean;
  data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  error: string;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
