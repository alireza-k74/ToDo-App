import {takeLatest, all, fork} from 'redux-saga/effects';
import StartupSaga from '~/stores/Startup/Startup.saga';

export default function* rootSaga() {
  yield all([fork(StartupSaga)]);
}
