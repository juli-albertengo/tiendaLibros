import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from '../screens/cart/index';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="My Cart"
        >
            <Stack.Screen name="My Cart" component={Cart}/>
        </Stack.Navigator>
    );
};

export default CartNavigator;
