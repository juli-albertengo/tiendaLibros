import React from 'react';
import {View, Text, Button } from 'react-native';

const CartItem = ({ item, onDelete}) => {

    return (
        <View>
            <Text>CartITEM</Text>
            <View>
                <Text>Nombre: {item.name}</Text>
                <Text>Cantidad: {item.quantity}</Text>
            </View>
            <View>
                <Text>Price: {item.price}</Text>
            </View>
            <View>
                <Button
                    title="Eliminar"
                    onPress={()=>onDelete(item.id)}
                />
            </View>
        </View>
    );
};

export default CartItem;
