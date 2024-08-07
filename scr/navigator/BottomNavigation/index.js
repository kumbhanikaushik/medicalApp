import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Images} from '../../common/styles/image';
import {Image, Text} from 'react-native'; 
import Home from '../../screens/Home';
import DeviceDetails from '../../screens/DeviceDetails';
import Account from '../../screens/Account';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          borderTopWidth: 1,
          borderTopColor: 'lightgray', 
        },
        labelStyle: {
          fontSize: 14, 
          fontWeight: 'bold', 
        },
        tabStyle: {
          paddingBottom: 5, 
        },
        indicatorStyle: {
          backgroundColor: '#8e4ab8', 
          height: 3,
        },
      }}
      screenOptions={({route}) => ({
        headerTitleAlign: 'center',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? Images.home : Images.home;
          } else if (route.name === 'DeviceDetails') {
            iconName = focused ? Images.mobile: Images.mobile;
          } else if (route.name === 'Account') {
            iconName = focused ? Images.profile : Images.profile;
          }
          return (
            <Image
              tintColor={focused ? '#8e4ab8' : 'grey'}
              source={iconName}
              style={{height: 20, width: 20}}
            />
          );
        },
        tabBarLabel: (
          {focused, color}, // Customize label component
        ) => (
          <Text
            style={{
              fontSize: focused ? 14 : 12,
              color: focused ? '#8e4ab8' : 'grey',
            }}>
            {route.name}
          </Text>
        ),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="DeviceDetails"
        component={DeviceDetails}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
