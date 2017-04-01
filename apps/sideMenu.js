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
                <Drawer  style={ {backgroundColor : 'blue' , flex : 1   }}
                    ref={c => this.drawer = c}
                    tapToClose={true}
                    content={controlPanel}
                    openDrawerOffset={100}
                    tweenHandler={Drawer.tweenPresets.parallax}>
                    
                    <Main openMenu ={ ()=> { this.drawer.open()}} />
                   
                </Drawer>

        );
    }
}

const styles = StyleSheet.create(
    {
        drawer: { backgroundColor: 'blue' },
        main : {
            backgroundColor: 'yellow'
        }
        
    }
) 