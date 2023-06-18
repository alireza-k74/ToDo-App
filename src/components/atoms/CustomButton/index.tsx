import {Center} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {scale} from 'react-native-size-matters';
import {Colors} from '~/styles/colors';

const CustomButton = ({
  title = 'Submit',
  w = '100%',
  h = scale(50),
  onPress = () => null,
}: {
  title?: string;
  w?: any;
  h?: any;
  onPress: () => void;
}) => {
  return (
    <Ripple onPress={onPress}>
      <Center w={w} height={h} bg={Colors.primary} borderRadius={scale(3)}>
        <Text
          style={{
            color: Colors.white,
            fontSize: scale(14),
          }}>
          {title?.toUpperCase?.()}
        </Text>
      </Center>
    </Ripple>
  );
};

export default CustomButton;
