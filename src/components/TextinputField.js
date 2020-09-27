/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ImageBackground} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class TextinputField extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          {...this.props}
          style={styles.txtinput}
          placeholder={this.props.name}
          placeholderTextColor={this.props.txtcolor}
          secureTextEntry={this.props.secureTextEntry}
          multiline={true}
          numberOfLines={4}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: w('80%'),
    height: h('20%'),
    backgroundColor: 'white',
    borderRadius: h('1%'),
    marginTop: h('1%'),
  },
  txtinput: {
    width: w('80%'),
    height: h('20%'),
    paddingLeft: h('1%'),
    color: '#1d2d50',
  },
});
