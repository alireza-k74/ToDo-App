import {yupResolver} from '@hookform/resolvers/yup';
import {Image, VStack} from 'native-base';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {lock, personIcon} from '~/assets/icons';
import images from '~/assets/images';
import {
  CustomButton,
  CustomContainer,
  CustomInput,
  CustomKeyboardAwareScrollView,
} from '~/components';
import {goBack} from '~/navigation/methods';
import {useDispatch} from 'react-redux';
import AuthActions from '~/stores/Auth/Actions';

const schema = yup.object().shape({
  userName: yup.string().required('required'),
  password: yup.string().required('Required'),
});

const SignUpScreen = () => {
  const {...methods} = useForm<Record<string, any>, object>({
    resolver: yupResolver<yup.AnyObjectSchema>(schema),
    mode: 'onChange',
  });
  const {handleSubmit, register, formState} = methods;
  const dispatch = useDispatch();
  const onSignUpPress = (formData: any) => {
    dispatch(AuthActions.signUp(formData?.userName, formData?.password));
  };

  const {t, i18n} = useTranslation();
  return (
    <CustomContainer>
      <FormProvider {...methods}>
        <CustomKeyboardAwareScrollView>
          <Image source={images.Logo} size="16" />

          <VStack space="4">
            <CustomInput
              {...register('userName')}
              {...{formState}}
              icon={personIcon}
              placeholder={t('userName')}
            />
            <CustomInput
              {...register('password')}
              {...{formState}}
              type="password"
              icon={lock}
              placeholder={t('password')}
            />
            <CustomButton
              title={t('signUp')}
              onPress={handleSubmit(onSignUpPress)}
            />
            <CustomButton title={t('login')} onPress={() => goBack()} />
          </VStack>
        </CustomKeyboardAwareScrollView>
      </FormProvider>
    </CustomContainer>
  );
};

export default SignUpScreen;
