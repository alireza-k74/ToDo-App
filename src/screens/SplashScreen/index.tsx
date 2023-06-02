import {Text} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const SplashScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.circleStyle}>
      <View>
        <Text>Splash Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  circleStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
