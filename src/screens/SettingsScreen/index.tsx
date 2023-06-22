import React, {useState} from 'react';
import {CustomContainer} from '~/components';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import StartupActions from '~/stores/Startup/Actions';
import {I18nManager, Switch, Text} from 'react-native';

const SettingsScreen = () => {
  const lang = useSelector(state => state?.startup?.language);
  const selectLang = lang == 'en' ? 'fa' : 'en';
  const dispatch = useDispatch();

  const {t, i18n} = useTranslation();
  console.log(i18n?.language);

  const changeLanguage = value => {
    console.log(value);
    i18n
      .changeLanguage(value)
      .then(() => {
        // I18nManager.forceRTL(i18n.language === 'fa');
        dispatch(StartupActions.selectedLanguage(selectLang));
      })
      .catch(err => console.log(err));
  };

  return (
    <CustomContainer>
      <Switch
        onChange={() => changeLanguage(selectLang)}
        value={lang == 'en'}
      />
      <Text>{t('signUp')}</Text>
    </CustomContainer>
  );
};

export default SettingsScreen;
