import {yupResolver} from '@hookform/resolvers/yup';
import {Image, VStack} from 'native-base';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import images from '~/assets/images';
import {
  CustomButton,
  CustomContainer,
  CustomInput,
  CustomKeyboardAwareScrollView,
} from '~/components';
import {englishLanPattern} from '~/constants/regexExp';
import {navigate, replace} from '~/navigation/methods';

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
      <FormProvider {...methods}>
        <CustomKeyboardAwareScrollView>
          <Image source={images.Logo} size="16" />
          <VStack space="4">
            <CustomInput
              {...register('email')}
              keyboardType="email-address"
              {...{formState}}
            />
            <CustomInput
              {...register('password')}
              {...{formState}}
              type="password"
            />
            <CustomButton
              title={t('login')}
              onPress={() => replace('Drawer')}
            />
            <CustomButton
              title={t('signUp')}
              onPress={() => navigate('SignUp')}
            />
          </VStack>
        </CustomKeyboardAwareScrollView>
      </FormProvider>
    </CustomContainer>
  );
};

export default LoginScreen;
