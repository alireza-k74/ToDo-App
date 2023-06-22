import {createRealmContext} from '@realm/react';
import {Auth} from './Auth';
export const AuthRealmContext = createRealmContext({
  schema: [Auth],
});
