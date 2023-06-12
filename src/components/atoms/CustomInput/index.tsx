import React, {useState} from 'react';
import {
  TextInput,
  Platform,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {FormControl, Text, HStack, Box, VStack} from 'native-base';
import {useController} from 'react-hook-form';
import {scale, verticalScale} from 'react-native-size-matters';
import {customFonts} from '~/styles/fonts';
import {SvgXml} from 'react-native-svg';
import {closeEye, openEye} from '~/assets/icons';
import {Colors} from '~/styles/colors';

export default React.forwardRef(
  (
    {
      name,
      placeholder,
      keyboardType,
      backgroundColor = 'transparent',
      label,
      color = Colors.txtLight,
      textArea = false,
      inputStyle = styles.input,
      icon,
      leftIcon,
      rightText,
      leftText,
      disabled,
      rightComponent,
      formState,
      validation = true,
      width = '100%',
      height = verticalScale(56),
      labelFontSize = scale(13),
      fontSize = scale(13),
      autoFocus,
      inputType,
      isHorizontal,
      defaultValue,
      onChange,
      onPress,
    }: {
      name: any;
      placeholder?: string;
      keyboardType?:
        | 'default'
        | 'email-address'
        | 'numeric'
        | 'phone-pad'
        | 'number-pad'
        | 'decimal-pad'
        | 'visible-password'
        | 'ascii-capable'
        | 'numbers-and-punctuation'
        | 'url'
        | 'name-phone-pad'
        | 'twitter'
        | 'web-search'
        | undefined;
      backgroundColor?: string;
      label?: string;
      color?: string;
      textArea?: boolean;
      inputStyle?: TextStyle;
      leftIcon?: any;
      icon?: any;
      width?: number | string;
      rightText?: string;
      leftText?: string;
      disabled?: boolean;
      rightComponent?: any;
      formState?: any;
      validation?: boolean;
      height?: number;
      labelFontSize?: number;
      fontSize?: number;
      autoFocus?: boolean;
      inputType?: string | undefined;
      isHorizontal?: boolean;
      defaultValue?: string | number;
      onChange?: any;
      onPress?: any;
    },
    ref: any,
  ) => {
    const {field, fieldState} = useController({name});
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [secureText, setSecureText] = useState<boolean>(true);

    const handleSecurePassword = () => {
      setSecureText(prevState => !prevState);
    };

    const isDirty = formState?.isDirty;

    const borderColor = disabled
      ? Colors.disabled
      : fieldState.error
      ? Colors.error
      : !validation
      ? Colors.gray
      : isDirty
      ? Colors.gray
      : Colors.disabled;

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = (val: any) => {
      setIsFocused(false);
      field.onBlur?.(val);
    };

    //Restrict user to just write in English
    const handleOnChange = (val: any) => {
      /*  let value = val.replace(/[^A-Za-z][^0-9][!@#\$%\^&\*]/ig, '');
       //console.log('show value',value) */
      field.onChange(val);
      onChange(val);
    };

    return (
      <FormControl
        isInvalid={fieldState.error}
        mb={isHorizontal ? -4 : undefined}
        alignSelf={'center'}
        width={`${width}px`}>
        <Box
          mt={defaultValue === '' && !isFocused ? '0' : '4'}
          width={`${width}px`}>
          {(isFocused ||
            field.value ||
            fieldState.error ||
            disabled ||
            defaultValue) && (
            <VStack zIndex={60} position="absolute" left="4" top="-12">
              <Box
                position="absolute"
                bottom="35%"
                zIndex={60}
                bg={Colors.white}
                backgroundColor={Colors.white}
                h="2"
                w="100%"
              />
              <Text
                ml="3"
                mr="4"
                zIndex={100}
                fontSize={labelFontSize}
                backgroundColor={Colors.white}
                fontFamily={customFonts.regular}
                color={
                  disabled
                    ? Colors.txtLight
                    : field.value
                    ? Colors.txtLight
                    : fieldState.error
                    ? Colors.error
                    : defaultValue
                    ? Colors.txtMedium
                    : Colors.txtLight
                }>
                {label ? label : placeholder}
              </Text>
            </VStack>
          )}
          <HStack
            h={textArea ? `${height * 2}px` : `${height}px`}
            w={`${width}px`}
            px="2"
            borderWidth="1px"
            borderRadius="lg"
            alignItems="center"
            bg={backgroundColor}
            justifyContent="center"
            borderColor={borderColor}>
            {leftText && (
              <Text
                fontSize={fontSize}
                fontFamily={customFonts.regular}
                color={disabled ? Colors.disabled : Colors.txtLight}>
                {leftText + ' '}
              </Text>
            )}
            {leftIcon && (
              <SvgXml
                style={{marginRight: scale(10)}}
                xml={leftIcon}
                fill={disabled ? Colors.disabled : Colors.primary}
              />
            )}
            <TextInput
              onPressIn={onPress}
              defaultValue={defaultValue}
              autoFocus={autoFocus}
              ref={ref}
              value={field.value}
              onFocus={handleFocus}
              showSoftInputOnFocus={true}
              onBlur={handleBlur}
              editable={!disabled}
              autoCapitalize="none"
              placeholder={
                !isFocused ? (label ? label : placeholder) : placeholder
              }
              keyboardType={keyboardType}
              maxLength={
                keyboardType == 'number-pad' || keyboardType == 'numeric'
                  ? 10
                  : 250
              }
              onChangeText={handleOnChange}
              numberOfLines={textArea ? 4 : 1}
              multiline={textArea ? true : false}
              textAlignVertical={textArea ? 'top' : 'center'}
              secureTextEntry={inputType === 'password' ? secureText : false}
              placeholderTextColor={
                disabled ? Colors.disabled : Colors.txtMedium
              }
              style={[
                inputStyle,
                {
                  paddingTop: textArea ? 15 : 0,
                  paddingBottom: textArea ? 15 : 0,
                  fontSize: isFocused ? fontSize - 1 : fontSize,
                  textAlignVertical: textArea ? 'top' : 'center',
                  color: color,
                  textAlign: 'left',
                },
                Platform.OS === 'ios' && {minHeight: height},
              ]}
            />
            {!disabled
              ? inputType === 'password' && (
                  <TouchableOpacity
                    onPress={handleSecurePassword}
                    activeOpacity={0.7}>
                    <SvgXml xml={secureText ? openEye : closeEye} />
                  </TouchableOpacity>
                )
              : null}
            {icon && !isFocused && (
              <SvgXml
                xml={icon}
                fill={disabled ? Colors.disabled : Colors.primary}
              />
            )}
            {rightText && (
              <Text
                fontSize={fontSize}
                fontFamily={customFonts.regular}
                color={disabled ? Colors.disabled : Colors.txtLight}>
                {rightText}
              </Text>
            )}
            {rightComponent && rightComponent()}
          </HStack>
        </Box>

        {validation && fieldState.error && (
          <FormControl.ErrorMessage
            fontSize={scale(13)}
            width={width}
            fontFamily={customFonts.regular}
            mt="0.5">
            <Text color={Colors.error}> {fieldState.error?.message}</Text>
          </FormControl.ErrorMessage>
        )}

        {isHorizontal && !fieldState.error && (
          <FormControl.HelperText
            fontSize={scale(13)}
            fontFamily={customFonts.regular}
            mt="0">
            {''}
          </FormControl.HelperText>
        )}
      </FormControl>
    );
  },
);

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontFamily: customFonts.regular,
    height: '100%',
  },
});
