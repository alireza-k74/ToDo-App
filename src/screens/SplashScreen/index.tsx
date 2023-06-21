import {Text} from 'native-base';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import StartupActions from '~/stores/Startup/Actions';

const SplashScreen = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state?.startup?.language);
  const selectLang = lang == 'en' ? 'fa' : 'en';
  const {t, i18n} = useTranslation();
  console.log(selectLang);
  const checkLang = currentLang => {
    console.log(currentLang, 'currentLang');

    i18n
      .changeLanguage(currentLang)
      .then(() => {})
      .catch(err => console.log(err));
  };

  useEffect(() => {
    checkLang(selectLang);
    dispatch(StartupActions.startupProcess());
  }, [selectLang]);

  return (
    <SafeAreaView style={styles.circleStyle}>
      <View>
        <Text>Splash Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  circleStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
