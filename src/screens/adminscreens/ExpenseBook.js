/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {PrimaryColor} from '../color';
import {Apptext, Appbtn, Navheader, TextinputField} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import {CheckBox} from 'native-base';

export class ExpenseBook extends Component {
  state = {
    profit: true,
    loss: false,
  };
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
          <View style={styles.checkbox}>
            <CheckBox
              checked={this.state.profit}
              onPress={() => {
                this.setState({profit: !this.state.profit});
              }}
            />
            <Text style={styles.txt}>PROFIT</Text>
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              checked={this.state.loss}
              onPress={() => {
                this.setState({loss: !this.state.loss});
              }}
            />
            <Text style={styles.txt}>LOSS</Text>
          </View>
        </View>
        <Apptext name={'Amount'} />
        <Apptext name={'Name'} />

        <TextinputField name={'Note'} />
        <Text style={styles.date}>Date: 25-2-2021</Text>
        <Appbtn text={'submit'} />
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
    // backgroundColor: 'white',
    width: w('100%'),
    height: h('12%'),
    marginTop: h('2%'),
    borderRadius: h('1%'),
    marginBottom: h('2%'),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
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
    marginTop: h('3%'),
  },
  checkbox: {
    // backgroundColor: 'red',
    width: '30%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: h('2%'),
  },
});
