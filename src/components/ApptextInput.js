/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ImageBackground} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class ApptextInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          {...this.props}
          style={styles.txtinput}
          placeholder={this.props.name}
          placeholderTextColor={this.props.txtcolor}
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: w('70%'),
    height: h('7%'),
    backgroundColor: 'white',
    borderRadius: h('1%'),
    marginTop: h('1%'),
  },
  txtinput: {
    width: w('60%'),
    height: h('7%'),
    paddingLeft: h('1%'),
    color: '#1d2d50',
  },
});
