import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonicIcons from 'react-native-vector-icons/Ionicons';

import AboutUs from '../screens/aboutUs/index';
import ShopNavigator from './shop';
import CartNavigator from './cart';


const TabStack = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <TabStack.Navigator
        initialRouteName="Books"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'About us') {
                iconName = focused ? 'home-outline' : 'home';
              } else if (route.name === 'Books') {
                iconName = focused ? 'book-outline' : 'book';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'cart-outline' : 'cart';
              }
              return <IonicIcons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70},
          }}
        >
            <TabStack.Screen
                name="About us"
                component={AboutUs}
            />
            <TabStack.Screen
                name="Books"
                component={ShopNavigator}
            />
            <TabStack.Screen
                name="Cart"
                component={CartNavigator}
            />
        </TabStack.Navigator>
    );
};

export default MainNavigator;

