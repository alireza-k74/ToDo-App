import {Text} from 'native-base';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  I18nManager,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import StartupActions from '~/stores/Startup/Actions';
import {makeStyles, useTheme, useThemeMode} from '@rneui/themed';

type Props = {
  fullWidth?: boolean;
};

const SplashScreen = (props: Props) => {
  const dispatch = useDispatch();
  const {mode, setMode} = useThemeMode();
  const styles = useStyles(props);
  const {theme} = useTheme();
  const lang = useSelector(state => state?.startup?.language);
  const selectLang = lang == 'en' ? 'fa' : 'en';
  const {t, i18n} = useTranslation();

  const checkLang = currentLang => {
    console.log(currentLang, 'currentLang');

    i18n
      .changeLanguage('en')
      .then(() => {
        dispatch(StartupActions.startupProcess());
        I18nManager.forceRTL(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (selectLang) {
      checkLang(selectLang);
    }
  }, [selectLang]);

  return (
    <SafeAreaView style={styles.circleStyle}>
      <TouchableOpacity
        onPress={() => setMode(mode == 'dark' ? 'light' : 'dark')}>
        <Text style={styles.text}>Splash Screen{mode}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SplashScreen;

const useStyles = makeStyles((theme, props: Props) => ({
  container: {
    background: theme.colors.white,
    width: props.fullWidth ? '100%' : 'auto',
  },
  text: {
    color: theme.colors.primary,
  },
  circleStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
