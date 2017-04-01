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
            <View style={styles.container}>
                
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.closeDrawer();
                }}>
                    <Text>Close Drawer</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 20,
       flex: 1,
       backgroundColor: 'red' 
    },
    controlText: {
        color: 'white',
    },
    button: {

        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black'
     
    }
})