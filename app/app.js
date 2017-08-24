import React, { Component } from "react";
import { Text,View,Button } from 'react-native';

import { StackNavigator } from 'react-navigation';
import  Profile  from './components/profile/profile';
import HomeScreenNavigator from './components/home/home';

HomeScreenNavigator.navigationOptions = {
  title: 'One Piece Room',
};

export const OnePieceApp = StackNavigator({
  Home: { screen: HomeScreenNavigator },
  Profile: { screen: Profile },
});
