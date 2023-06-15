import {Text} from 'native-base';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {navigate} from '~/navigation/methods';
import StartupActions from '~/stores/Startup/Actions';

const SplashScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // setTimeout(() => {
    // navigate('Login');
    // }, 1000);
    dispatch(StartupActions.startupProcess());
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
