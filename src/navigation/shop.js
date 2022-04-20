import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Books from '../screens/books/index';
import SingleBook from '../screens/singleBook';

const Stack = createNativeStackNavigator();

const ShopNavigator = (navigation) => {
    return (
        <Stack.Navigator
            initialRouteName="All Books"
        >
            <Stack.Screen name="All Books" component={Books}/>
            <Stack.Screen name="Single Book" component={SingleBook} options={({route}) => ({ title: route.params.name })}/>
        </Stack.Navigator>
    );
};

export default ShopNavigator;
