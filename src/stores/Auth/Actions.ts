import {createActions} from 'reduxsauce';

const {Types, Creators: AuthActions} = createActions({
  signUp: ['userName', 'password'],
});

export const AuthTypes = Types;
export default AuthActions;
