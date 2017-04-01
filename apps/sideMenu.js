import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Drawer from 'react-native-drawer';
import Main from './main';
import ControlPanel from './controlPanel';

import { Drawer } from 'native-base';
export default class SlideMenu extends Component {

    openControlPanel() {
        this.drawer.open();
    };
    closePanel() {
        this.drawer.close();
    }

    render() {
        var controlPanel = <ControlPanel closeDrawer={() => {
            this.drawer.close();
        }} />
        return (
                <Drawer  style={styles.drawer}
                    ref={c => this.drawer = c}
                    type="static"
                    content={controlPanel}
                    openDrawerOffset={30}
                    tweenHandler={Drawer.tweenPresets.parallax}>

                    <ScrollView >
                        <Text>MAIN</Text>
                        <TouchableOpacity onPress={() => { this.openControlPanel() }}>
                            <Text>Open Drawer</Text>
                        </TouchableOpacity>
                    </ScrollView>

                </Drawer>

        );
    }
}

const styles = StyleSheet.create(
    {
        drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
        main: { paddingLeft: 3 },
    }
) 