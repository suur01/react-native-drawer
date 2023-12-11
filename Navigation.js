// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import empat from './pages/empat';
import lima from './pages/lima';
import login from './pages/login';
import DetailPage from './pages/detail';
import SubDetailPage1 from './pages/SubDetailPage1';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function DetailStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="SubDetailPage1"
        component={SubDetailPage1}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false,}}>
      <Tab.Screen name="empat" component={empat}  />
      <Tab.Screen name="ThirdPage" component={ThirdPage}   />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    /* <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="empat" component={empat} screenOptions={{headerShown: false}} />
        <Drawer.Screen name="lima" component={MyTabs} screenOptions={{headerShown: false}} />
        
      </Drawer.Navigator>
    </NavigationContainer> */
      <Drawer.Navigator>
        <Drawer.Screen name="empat" component={empat} screenOptions={{headerShown: false}} />
        <Drawer.Screen name="lima" component={MyTabs} screenOptions={{headerShown: false}} />
        
      </Drawer.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drawery">
        <Stack.Screen
          name="Drawer"
          component={MyDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailStack"
          component={DetailStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
