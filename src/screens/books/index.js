import React from 'react';
import {View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { connect, useSelector, useDispatch } from 'react-redux';
import Book from '../../components/book';
import { selectBook } from '../../store/actions/books.actions';

const Books = ({navigation}) => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books);
    const handleSelectBook = (book) => {
        dispatch(selectBook(book.id));
        navigation.navigate('Single Book');
    };
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

export default connect()(Books);
