import React, { Component } from 'react';
import {
    PropTypes,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>MAIN</Text>
                <TouchableOpacity style={styles.button} onPress={ () => { this.props.openMenu() }}>
                    <Text>Open Menu</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1,
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black'
    }
});
