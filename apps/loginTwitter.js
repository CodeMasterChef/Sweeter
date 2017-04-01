import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import { google, facebook, twitter, tumblr } from 'react-native-simple-auth';

const twitter_api = {
    appId: 'O1t8ximOxHDjsIVHBZxtcm9lK',
    appSecret: 'qgzNYF2xgkPRhM6gD5O6E8aCpvqgPAfA8g0WYelOYz9Z4VXDOX',
    callback: 'sweeter://authorize',
}




export default class LoginTwitter extends Component {

    switterLogin() {
        twitter(twitter_api).then((info) => {
            // info.user - user details from the provider
            // info.credentials - tokens from the provider

            console.log(info);
        }).catch((error) => {
            console.log(error);
            // error.code
            // error.description
        });

    }

    render() {
        return (
            <View>
                <Button
                    title='Login with Witter'
                    onPress={() => {
                        this.switterLogin();
                    }}></Button>

            </View>
        );
    }
}
