import {all, delay, takeLatest} from '@redux-saga/core/effects';

import {replace} from '~/navigation/methods';
import {AuthTypes} from './Actions';
import sign from 'jwt-encode';
import Config from 'react-native-config';

function* signUpSaga(data) {
  console.log(data);

  const input = {
    userName: data?.userName,
    password: data?.password,
    iat: Date.now(),
  };
  const jwt = sign(data, Config.SECRET);
  console.log(jwt, data);
}

export default function* () {
  yield all([takeLatest(AuthTypes.SIGN_UP, signUpSaga)]);
}
