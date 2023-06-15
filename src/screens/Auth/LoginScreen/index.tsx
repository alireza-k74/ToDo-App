import {View, Text} from 'react-native';
import React from 'react';
import {CustomButton, CustomContainer} from '~/components';
import {englishLanPattern} from '~/constants/regexExp';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {FormProvider, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(englishLanPattern, 'email must be valid!')
    .email()
    .required('required'),
  password: yup.string().required('Required'),
});

const LoginScreen = () => {
  const {...methods} = useForm<Record<string, any>, object>({
    resolver: yupResolver<yup.AnyObjectSchema>(schema),
    mode: 'onChange',
  });
  const {handleSubmit, register, formState} = methods;

  const {t, i18n} = useTranslation();

  return (
    <CustomContainer>
      <CustomButton title={t('login')} />
    </CustomContainer>
  );
};

export default LoginScreen;
