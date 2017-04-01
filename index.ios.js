
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


import SideMenu from './apps/sideMenu';

export default class Sweeter extends Component {


  render() {
    return (
      <View style={styles.container}>
        <SideMenu/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   paddingTop: 20 ,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Sweeter', () => Sweeter);
