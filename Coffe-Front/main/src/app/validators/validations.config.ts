import { ModuleValidationConfig } from './validations.interface';

import { loginValidation } from '../pages/authentication/side-login/login.validation';

export const validationsConfig: ModuleValidationConfig = {
  login: loginValidation,

};
