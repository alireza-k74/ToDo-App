import React from 'react';
import {Text} from 'react-native';
import Ripple from 'react-native-material-ripple';

const CustomButton = ({title = 'Submit'}: {title?: string}) => {
  return (
    <Ripple>
      <Text>{title}</Text>
    </Ripple>
  );
};

export default CustomButton;
