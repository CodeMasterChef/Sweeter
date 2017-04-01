import React, { Component } from 'react';
import {
    PropTypes,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.controlText}>Control Panel</Text>
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.closeDrawer();
                }}>
                    <Text>Close Drawer</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'red',
    },
    controlText: {
        color: 'white',
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        paddingTop: 200,
    }
})