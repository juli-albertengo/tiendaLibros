import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import AboutUs from '../screens/aboutUs/index';
import Books from '../screens/books/index';
import Cart from '../screens/cart/index';


const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <Tab.Navigator
        initialRouteName="Books"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Books') {
                iconName = focused ? '' : '';
              } else if (route.name === 'About Us') {
                iconName = focused ? '' : '';
              } else if (route.name === 'My Cart') {
                iconName = focused ? '' : '';
              }
              // You can return any component that you like here!
              return <Text icon={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70},
          }}
        >
            <Tab.Screen
                name="About us"
                component={AboutUs}
            />
            <Tab.Screen
                name="Books"
                component={Books}
            />
            <Tab.Screen
                name="My Cart"
                component={Cart}
            />
            <Tab.Screen
                name="SingleBook"
                component={Cart}
            />
        </Tab.Navigator>
    );
};

export default MainNavigator;
