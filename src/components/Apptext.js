/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ImageBackground} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class Apptext extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          {...this.props}
          style={styles.txtinput}
          placeholder={this.props.name}
          placeholderTextColor={'#1d2d50'}
          secureTextEntry={this.props.secureTextEntry}
          // underlineColorAndroid={'white'}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: w('80%'),
    height: h('9%'),
    backgroundColor: 'white',
    borderRadius: h('1%'),
    marginTop: h('1%'),
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: h('1%'),
  },
  txtinput: {
    width: w('80%'),
    height: h('9%'),
    paddingLeft: h('1%'),
    color: '#1d2d50',
  },
});
