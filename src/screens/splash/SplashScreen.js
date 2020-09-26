/* eslint-disable handle-callback-err */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {PrimaryColor} from '../color';

export class SplashScreen extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Signin');
    }, 5000);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: PrimaryColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: h('8%'),
            fontWeight: 'bold',
            color: 'white',
          }}>
          LOAN APP
        </Text>
        <View style={{marginTop: h('40%')}}>
          <ActivityIndicator size="large" color="#FFF" />
        </View>
      </View>
    );
  }
}
