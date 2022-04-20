import React from 'react';
import {View, Text, FlatList } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import CartItem from '../../components/cartItem';
import { removeItem } from '../../store/actions/cart.actions';
import { styles } from './styles';


const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);

    const handleDeleteItem = (id) => {
       dispatch(removeItem(id));
    };

    //const handleConfirmCart = () => {
    //   dispatch(confirmCart(items, total, user))
    //}

    const renderItem = (({ item} ) => <CartItem item={item} onDelete={handleDeleteItem} />);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CART SCREEN</Text>
            <View>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
            <View>
                <Text>Total: ${total}</Text>
            </View>
        </View>
    );
};

export default connect()(Cart);
