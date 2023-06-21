import {createTheme} from '@rneui/themed';
import {lightColors} from './light';
import {darkColors} from './dark';

export const theme = createTheme({
  lightColors: {
    ...lightColors,
  },
  darkColors: {
    ...darkColors,
  },
  mode: 'light',
});
