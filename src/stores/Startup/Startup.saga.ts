import {all, delay, takeLatest} from '@redux-saga/core/effects';

import {StartupTypes} from './Actions';
import {navigate, replace} from '~/navigation/methods';

function* startUpSaga(data) {
  yield delay(1000);
  yield replace('Login');
}

export default function* () {
  yield all([takeLatest(StartupTypes.STARTUP_PROCESS, startUpSaga)]);
}
