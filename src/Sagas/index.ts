import {takeLatest, all, fork} from 'redux-saga/effects';
import AuthSaga from '~/stores/Auth/Auth.saga';
import StartupSaga from '~/stores/Startup/Startup.saga';

export default function* rootSaga() {
  yield all([fork(StartupSaga)]);
  yield all([fork(AuthSaga)]);
}
