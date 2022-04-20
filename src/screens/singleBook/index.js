import React from 'react';
import {View, Text } from 'react-native';
import { useSelector } from 'react-redux';


const SingleBook = () => {
    console.log('yebdo');
    const { book } = useSelector(state => state.books.selectedBook);
    const {price, author} = book;
    return (
        <View>
            <Text>SINGLE BOOK</Text>
            <Text>{price}</Text>
            <Text>{author}</Text>
        </View>
    );
};

export default SingleBook;
