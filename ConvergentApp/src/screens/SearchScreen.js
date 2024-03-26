import * as React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>Search</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
    }
});