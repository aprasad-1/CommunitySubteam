import * as React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Box, Text} from '@gluestack-ui/themed'
import {config} from '@gluestack-ui/config'
export default function ExploreScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
        {/* <Text style={styles.text}>Explore</Text> */}
        <Box bg="$primary500" p="$5">
            <Text>This is the Box</Text>
        </Box>
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