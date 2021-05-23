import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {HomeScreen, NewsScreen, ProfileScreen, LogInScreen} from './src/Screens'



const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NewsStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (

  
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Login" component={LogInScreen} />
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);



const NewsStackScreen = () => (
  <NewsStack.Navigator>
    <NewsStack.Screen name="News" component={NewsScreen} />
  </NewsStack.Navigator>
);


export default function App() {

  

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="News" component={NewsStackScreen} />
        <Tabs.Screen name="Profile" component={ProfileStackScreen} />
  </Tabs.Navigator>
    </NavigationContainer>
  );
}

