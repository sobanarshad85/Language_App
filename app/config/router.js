import React from 'react';
import { createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
//login screens
import AuthLoadingScreen from '../components/login/AuthLoadingScreen';
import LoginScreen from '../components/login/LoginScreen';
import SignupScreen from '../components/login/SignupScreen';
import ForgotPasswordScreen from '../components/login/ForgotPasswordScreen';


import AlertsScreen from '../components/alerts/AlertsScreen';
import LearnScreen from '../components/learn/LearnScreen';
import ListenRepeatScreen from '../components/learn/ListenRepeatScreen';
import ListenSentencesScreen from '../components/learn/ListenSentencesScreen';
import WhatHearScreen from '../components/learn/WhatHearScreen';
import FillInGapsScreen from '../components/learn/FillInGapsScreen';
import DashboardScreen from '../components/dashboard/DashboardScreen';
import ListingDescription from '../components/dashboard/ListingDescription';
import NewListingScreen from '../components/dashboard/NewListingScreen';
import EditProfileScreen from '../components/dashboard/EditProfileScreen';
import DiscussScreen from '../components/discuss/DiscussScreen';
import ProfileScreen from '../components/others/ProfileScreen';
import PlaceholderScreen from '../components/PlaceholderScreen';


console.disableYellowBox = true;

//***************STACK NAVIGATOR*********************
const AuthStack = createStackNavigator({
  LoginScreen: LoginScreen,
  SignupScreen: SignupScreen,
  ForgotPasswordScreen: ForgotPasswordScreen
});



export const DashboardStack = createStackNavigator({
  DashboardScreen: {
    screen: DashboardScreen,
    navigationOptions: {
      title: 'Dashboard',
    },
  },
  EditProfileScreen: {
    screen: EditProfileScreen,
    navigationOptions: {
      title: 'Edit Profile',
    },
  },
  ListingDescription: {
    screen: ListingDescription,
  },
  NewListingScreen: {
    screen: NewListingScreen,
    navigationOptions: {
      title: 'Share',
    },
  },
},{
  defaultNavigationOptions: {
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#1EA1E9',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18
    },
  },
});


export const LearnStack = createStackNavigator({
  LearnScreen: {
    screen: LearnScreen,
    navigationOptions: {
      title: 'Learning ',
    }
  },
  ListenRepeatScreen: {
    screen: ListenRepeatScreen,
  },
  ListenSentencesScreen: {
    screen: ListenSentencesScreen,
  },
  WhatHearScreen: {
    screen: WhatHearScreen,
  },
  FillInGapsScreen: {
    screen: FillInGapsScreen,
  },
},{
  defaultNavigationOptions: {
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#1EA1E9',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18
    },
  },
});


export const DiscussStack = createStackNavigator({
  DiscussScreen: {
    screen: DiscussScreen,
    navigationOptions: {
      title: 'Dsicuss',
    },
  },
  NewListingScreen: {
    screen: NewListingScreen,
    navigationOptions: {
      title: 'Share',
    },
  },
  ListingDescription: {
    screen: ListingDescription,
  },
},{
  defaultNavigationOptions: {
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#1EA1E9',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18
    },
  },
});







//***************TAB NAVIGATOR (ROOT)*********************
const AppNavigator = createBottomTabNavigator({
  Learn: { screen: LearnStack,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="graduation-cap" color={tintColor} size={24}
        />
      )
    })
  },
  Dashboard: { screen: DashboardStack,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="home" color={tintColor} size={24}
        />
      )
    })
  },
  Discuss: { screen: DiscussStack,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="comments" color={tintColor} size={24}
        />
      )
    })
  },
}, {
  initialRouteName: 'Dashboard',
  swipeEnabled: true,
  tabBarOptions: {
      activeTintColor: '#ffffff', // active icon color ffffff
      inactiveTintColor: '#c6c6c6',
      style: {
          backgroundColor: '#1EA1E9' // TabBar background //#848484
      },
      labelStyle:{
        fontSize: 17,
        fontWeight: 'bold'
      },
    }
});


export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
