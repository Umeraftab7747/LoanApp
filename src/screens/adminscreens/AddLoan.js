/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {PrimaryColor} from '../color';
import {Searchbar, Appbtn, Navheader} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';

export class AddLoan extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Navheader name={'Add Loan'} />

        <View style={styles.middle}>
          <Searchbar />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PrimaryColor,
  },
  middle: {
    // backgroundColor: 'yellow',
    width: w('100%'),
    height: h('150%'),
    alignItems: 'center',
  },
});
