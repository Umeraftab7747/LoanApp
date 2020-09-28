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
import {RadioButton} from 'react-native-paper';

export class ExpenseBook extends Component {
  state = {
    checked: false,
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
            <View style={styles.radio}>
              <RadioButton
                value="first"
                color={'tomato'}
                status={
                  this.state.checked === 'first' ? 'checked' : 'unchecked'
                }
                onPress={() => {
                  this.setState({checked: 'first'});
                }}
              />
              <Text style={styles.txt}>Expense</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value="first"
                status={
                  this.state.checked === 'second' ? 'checked' : 'unchecked'
                }
                onPress={() => {
                  this.setState({checked: 'second'});
                }}
              />
              <Text style={styles.txt}>Income</Text>
            </View>
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
    width: '60%',
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
  radio: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
