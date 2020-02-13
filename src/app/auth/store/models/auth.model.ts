import { LoginState } from './login.model';
import { RegisterState } from './register.model';

export interface AuthState {
  login: LoginState;
  register: RegisterState;
}
