/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {PrimaryColor} from '../color';
import {Apptext, Appbtn, Navheader} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';

export class ExpenseBook extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navheader
          name={'Income Expense Book'}
          onPress={() => {
            this.props.navigation.goBack('Dashboard');
          }}
        />
        <View style={styles.ViewCOntainer}>
          <Text style={styles.txtContiner}>
            Account is still unlock,Secure it
          </Text>
        </View>
        <Apptext name={'Amount'} />
        <Apptext name={'Name'} />
        <Apptext name={'Note'} />
        <Text style={styles.date}>Date: 25-2-2021</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PrimaryColor,
    alignItems: 'center',
  },
  ViewCOntainer: {
    backgroundColor: 'white',
    width: w('100%'),
    height: h('12%'),
    marginTop: h('2%'),
    borderRadius: h('1%'),
    marginBottom: h('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtContiner: {
    color: PrimaryColor,
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
});
