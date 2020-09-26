/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class Appbtn extends Component {
  render() {
    return (
      <TouchableOpacity {...this.props} style={styles.container}>
        <Text style={styles.btn}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: w('30%'),
    height: h('7%'),
    backgroundColor: 'white',
    borderRadius: h('1%'),
    marginTop: h('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    color: '#124',
    fontWeight: 'bold',
    fontSize: h('2%'),
  },
});
