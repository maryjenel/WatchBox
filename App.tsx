import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigatorParamList, Routes} from './js/navigation/Routes';
import {WatchDetailScreen, WatchListScreen} from './js/screens';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator<NavigatorParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.WATCH_LIST_SCREEN}>
        <Stack.Screen
          name={Routes.WATCH_LIST_SCREEN}
          component={WatchListScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name={Routes.WATCH_DETAIL}
          component={WatchDetailScreen}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
