import {Text} from 'native-base';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import StartupActions from '~/stores/Startup/Actions';

const SplashScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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
