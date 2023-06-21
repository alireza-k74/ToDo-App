import {all, delay, takeLatest} from '@redux-saga/core/effects';

import {replace} from '~/navigation/methods';
import {StartupTypes} from './Actions';

function* startUpSaga(data) {
  yield delay(1000);

  yield replace('Login');
}

function* changeLangSaga(data) {
  console.log(data);
}

export default function* () {
  yield all([takeLatest(StartupTypes.STARTUP_PROCESS, startUpSaga)]);
  yield all([takeLatest(StartupTypes.SELECTED_LANGUAGE, changeLangSaga)]);
}
