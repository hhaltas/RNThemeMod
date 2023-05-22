import React, {useContext, useEffect} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  NavigationContext,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Pages
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import {useColorScheme, View} from 'react-native';
import ApiContext from '../context/ApiContext';
import {Switch} from 'react-native-switch';
function StackList(props) {
  const Stack = createNativeStackNavigator();
  const scheme = useColorScheme();
  const {mod1, setMod1} = useContext(ApiContext);
  return (
    <NavigationContainer theme={mod1 === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{headerShown: true, headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Page 1"
          component={Page1}
          options={{
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <Switch
                  value={mod1 === 'dark' ? true : false}
                  onValueChange={() =>
                    setMod1(mod1 === 'light' ? 'dark' : 'light')
                  }
                  disabled={false}
                  activeText={'Light'}
                  activeTextStyle={{color:'black'}}
                  inActiveText={'Dark'}
                  backgroundActive={'#dbdbdb'}
                  backgroundInactive={'gray'}
                  circleActiveColor={'#dbdbdb'}
                  circleInActiveColor={'#000000'}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackList;
