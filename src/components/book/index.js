import React from 'react';
import {View, Text, Image, Button } from 'react-native';
import { styles } from './styles';

const Book = ({ navigation, book}) => {

    const selectBook = () => {
        console.log(book);
    };

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../../assets/img/galeanoAbrazos.png')}/>
            </View>
            <View style={styles.container}>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text> by {book.author}</Text>
                <View style={styles.bookContainer}>
                    <Button
                    style={styles.button}
                    onPress={selectBook}
                    title=" + Info"
                    color="#17A2BB"
                    />
                </View>
            </View>
        </View>
    );
};

export default Book;
