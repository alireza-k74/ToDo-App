import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from '~/styles/colors';
import CustomLoading from '../CustomLoading';

const CustomContainer = ({
  children,
  isLoading = false,
}: {
  children: any;
  isLoading?: boolean;
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {isLoading && <CustomLoading />}
      {children}
    </SafeAreaView>
  );
};

export default CustomContainer;

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: Colors.white},
});
