import {AuthTypes} from './Actions';
import {INITIAL_STATE} from './InitialState';
import {createReducer} from 'reduxsauce';

export const signUp = state => ({
  ...state,
});

export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.SIGN_UP]: signUp,
});
