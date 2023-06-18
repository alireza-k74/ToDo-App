import React, {useState} from 'react';
import {
  Icon,
  FormControl,
  Text,
  HStack,
  Box,
  Popover,
  Button,
  VStack,
} from 'native-base';
import {TouchableOpacity, TextInput, Platform, StyleSheet} from 'react-native';
import {useController} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {isAndroid} from '~/utils/common';
import {Colors} from '~/styles/colors';
import {scale} from 'react-native-size-matters';

export default React.forwardRef(
  (
    {
      name,
      placeholder,
      type,
      keyboardType,
      backgroundColor = 'transparent',
      label,
      required = false,
      color = Colors.TEXT,
      textArea = false,
      info,
      disabled = false,
    }: {
      name: any;
      placeholder?: string;
      type?: string;
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
      required?: boolean;
      color?: string;
      textArea?: boolean;
      info?: any;
      disabled?: boolean;
    },
    ref: any,
  ) => {
    const {field, fieldState} = useController({name});
    const [visible, setVisible] = useState(false);

    const closeModal = () => {
      setVisible(false);
    };
    return (
      <FormControl isInvalid={fieldState.error} w={{base: '100%'}}>
        {label && (
          <Text color={Colors.HEADER_TITLE} fontSize={scale(11)} mb="-1">
            {label}
            {required && <Text color={Colors.ORANGE_BASE}>{'   *'}</Text>}
          </Text>
        )}
        <HStack
          bg={backgroundColor}
          //borderRadius="md"
          borderColor={Colors.BORDER_COLOR}
          borderBottomWidth="1"
          alignItems="center"
          justifyContent="center">
          <TextInput
            ref={ref}
            editable={!disabled}
            numberOfLines={textArea ? 4 : 1}
            textAlignVertical={textArea ? 'top' : 'center'}
            placeholder={placeholder}
            secureTextEntry={type === 'password' ? true : false}
            placeholderTextColor={Colors.PLACE_HOLDER}
            autoCapitalize="none"
            keyboardType={keyboardType}
            multiline={textArea ? true : false}
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            style={[
              {
                flex: 1,
                fontSize: scale(12),
                // fontFamily: fontFamily.regular,
                textAlignVertical: textArea ? 'top' : 'center',
                color: color,
              },
              Platform.OS === 'ios' && {height: 45},
            ]}
          />
          {info ? (
            isAndroid ? (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setVisible(true)}>
                <Icon
                  as={<Ionicons name="ios-information-circle-outline" />}
                  size={scale(20)}
                  color={Colors.ORANGE_BASE}
                  mr="2"
                />
              </TouchableOpacity>
            ) : (
              <Box alignItems="center">
                <Popover
                  trigger={triggerProps => {
                    return (
                      <Button {...triggerProps} bgColor="white">
                        <Icon
                          as={
                            <Ionicons name="ios-information-circle-outline" />
                          }
                          size={scale(20)}
                          color={Colors.ORANGE_BASE}
                          mr="1"
                        />
                      </Button>
                    );
                  }}>
                  <Popover.Content w="56" bg={Colors.ORANGE_BASE}>
                    <Popover.Arrow />
                    <Popover.CloseButton bgColor={Colors.WHITE} />
                    <Popover.Header>
                      <Text color={Colors.WHITE} bold fontSize={scale(14)}>
                        {label}
                      </Text>
                    </Popover.Header>
                    <Popover.Body>
                      <Text color={Colors.WHITE} fontSize={scale(12)}>
                        {info}
                      </Text>
                    </Popover.Body>
                  </Popover.Content>
                </Popover>
              </Box>
            )
          ) : null}
        </HStack>
        <FormControl.ErrorMessage
        // fontFamily={fontFamily.regular}
        >
          {fieldState.error?.message}
        </FormControl.ErrorMessage>
      </FormControl>
    );
  },
);

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 100,
    height: scale(80),
    width: scale(80),
  },
  image: {
    width: '100%',
  },
  flex1: {flexGrow: 1},
  button: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    borderBottomWidth: 1.5,
  },
});
