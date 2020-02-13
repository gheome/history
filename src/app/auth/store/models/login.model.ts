export interface LoginState {
  request: boolean;
  data: {
    email: string;
    password: string;
    isAdmin: boolean;
    approved: boolean;
  };
  error: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
