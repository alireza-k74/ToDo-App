import {HStack, Icon, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {goBack, toggleDrawer} from '~/navigation/methods';
import {Colors} from '~/styles/colors';
import {scale} from 'react-native-size-matters';

const HeaderLeft = ({pl = '2', back = false}: {pl?: any; back?: boolean}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={back ? goBack : toggleDrawer}>
      {back ? (
        <HStack pl={pl} justifyContent={'center'} alignItems="center" space="1">
          <Icon
            as={<Fontisto name="angle-left" />}
            size={scale(17)}
            color={Colors.BLACK}
          />
          <Text fontSize={scale(15)} color={Colors.BLACK}>
            Back
          </Text>
        </HStack>
      ) : (
        <Icon
          as={<Octicons name="three-bars" />}
          size={scale(20)}
          color={Colors.BLACK}
        />
      )}
    </TouchableOpacity>
  );
};

export default HeaderLeft;
