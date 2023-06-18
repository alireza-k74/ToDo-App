import {yupResolver} from '@hookform/resolvers/yup';
import {VStack} from 'native-base';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {SvgXml} from 'react-native-svg';
import * as yup from 'yup';
import {logo} from '~/assets/icons';
import {
  CustomButton,
  CustomContainer,
  CustomInput,
  CustomKeyboardAwareScrollView,
} from '~/components';
import {englishLanPattern} from '~/constants/regexExp';
import {goBack} from '~/navigation/methods';

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(englishLanPattern, 'email must be valid!')
    .email()
    .required('required'),
  password: yup.string().required('Required'),
});

const SignUpScreen = () => {
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
          <SvgXml xml={logo} />
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
            <CustomButton title={t('signUp')} />
            <CustomButton title={t('login')} onPress={() => goBack()} />
          </VStack>
        </CustomKeyboardAwareScrollView>
      </FormProvider>
    </CustomContainer>
  );
};

export default SignUpScreen;
