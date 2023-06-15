import {combineReducers} from 'redux';
import configureStore from './CreateStore';
import {reducer as StartupReducer} from './Startup/Reducers';

import rootSaga from '~/Sagas';

const createStore = () => {
  const rootReducer = combineReducers({
    startup: StartupReducer,
  });

  return configureStore(rootReducer, rootSaga);
};

export default createStore;
