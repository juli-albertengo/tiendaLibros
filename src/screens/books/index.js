import React from 'react';
import {View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import Book from '../../components/book';

const Books = () => {

    const books = useSelector(state => state.books.books);
    const renderItem = ({ item }) => <Book book={item}/>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Latest 2022!</Text>
            <FlatList
                data={books}
                keyExtractor={item => item.bookId}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Books;