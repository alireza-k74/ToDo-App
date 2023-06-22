import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Flex, HStack, Icon, Text, View, VStack} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {navigate, replace} from '~/navigation/methods';
import {Colors} from '~/styles/colors';

const data = [
  {
    title: 'Settings',
    iconName: 'person-circle-outline',
    onPress: () => navigate('Settings'),
  },
];

export default function CustomDrawerContent(props: any) {
  return (
    <Flex flex={1} pt="8">
      <DrawerContentScrollView {...props}>
        <VStack space="4" px="4">
          <HStack space="4">
            <VStack justifyContent="center"></VStack>
          </HStack>
          <View h="0.45" borderRadius="2xl" bg={Colors.GRAY_2} width="100%" />
          <VStack space="3">
            {data?.map(item => (
              <TouchableOpacity activeOpacity={0.6} onPress={item?.onPress}>
                <HStack alignItems="center" space="4">
                  <Icon
                    as={<Ionicons name={item?.iconName} />}
                    size={scale(25)}
                    color={Colors.BLACK}
                  />
                  <Text fontSize={scale(12)}>{item?.title}</Text>
                </HStack>
              </TouchableOpacity>
            ))}
          </VStack>
          <View h="0.45" borderRadius="2xl" bg={Colors.GRAY_2} width="100%" />

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => replace('Login')}>
            <HStack alignItems="center" space="4">
              <Icon
                as={<Ionicons name={'exit-outline'} />}
                size={scale(25)}
                color={Colors.BLACK}
              />
              <Text fontSize={scale(12)}>Log Out</Text>
            </HStack>
          </TouchableOpacity>
        </VStack>
      </DrawerContentScrollView>
    </Flex>
  );
}
