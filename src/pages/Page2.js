import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import ApiContext from '../context/ApiContext';

const Page2 = props => {
  const {mod1, setMod1} = useContext(ApiContext);
  return (
    <View style={[styles.container, styles[`${mod1}Background`]]}>
      <Text style={styles[`${mod1}Text`]}>Page 2 screen</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkBackground: {
    backgroundColor: '#161616',
  },
  lightBackground: {
    backgroundColor: '#fff',
  },
  darkText: {
    color: 'white',
  },
  lightText: {
    color: 'black',
  },
});
