import {INITIAL_STATE} from './InitialState';
import {createReducer} from 'reduxsauce';
import {StartupTypes} from './Actions';

export const startup = state => ({
  ...state,
});

export const setIntroViewed = (state, {introViewed}) => ({
  ...state,
  introViewed,
});

const onRegionChange = (state, {region}) => ({
  ...state,
  region,
});

const onLanguageChange = (state, {language}) => ({
  ...state,
  language,
});

export const reducer = createReducer(INITIAL_STATE, {
  [StartupTypes.STARTUP_PROCESS]: startup,
  [StartupTypes.SET_INTRO_VIEWED]: setIntroViewed,
  [StartupTypes.SELECTED_REGION]: onRegionChange,
  [StartupTypes.SELECTED_LANGUAGE]: onLanguageChange,
});
