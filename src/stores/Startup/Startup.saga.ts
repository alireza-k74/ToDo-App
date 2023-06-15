import {all, takeLatest} from '@redux-saga/core/effects';

import {StartupTypes} from './Actions';

function* startUpSaga(data) {
  console.log('alireza');
}

export default function* () {
  yield all([takeLatest(StartupTypes.STARTUP_PROCESS, startUpSaga)]);
}
