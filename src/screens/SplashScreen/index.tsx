import {Text} from 'native-base';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {navigate} from '~/navigation/methods';

const SplashScreen = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      navigate('Login');
    }, 1000);
  }, []);

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
