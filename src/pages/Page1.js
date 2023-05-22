import {StyleSheet, Text, View, Button, StatusBar} from 'react-native';
import React from 'react';
import ApiContext, {useAPI} from '../context/ApiContext';

const Page1 = props => {
  const {mod1, setMod1} = useAPI(ApiContext);

  return (
    <View style={[styles.container, styles[`${mod1}Background`]]}>
      <Text style={styles[`${mod1}Text`]}>Page 1 Screen</Text>
      <StatusBar style="auto" />
      <Button
        title="Page2 Navigation"
        onPress={() => props.navigation.navigate('Page2')}
      />
    </View>
  );
};

export default Page1;

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
