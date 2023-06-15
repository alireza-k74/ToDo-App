import {createActions} from 'reduxsauce';

const {Types, Creators: StartupActions} = createActions({
  startupProcess: null,
  setIntroViewed: ['introViewed'],
  selectedRegion: ['region'],
});

export const StartupTypes = Types;
export default StartupActions;
