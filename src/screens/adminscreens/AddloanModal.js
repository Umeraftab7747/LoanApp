/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
import {PrimaryColor} from '../color';
import {Apptext, Appbtn, Navheader} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';

export class AddloanModal extends Component {
  state = {
    Loancollection: 'Daily',
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Navheader name={'Add Loan'} />
          <View style={styles.scrollview}>
            {/* start */}
            <View style={styles.drop}>
              <Text style={styles.txtcollection}>Collection type</Text>
              <DropDownPicker
                items={[
                  {
                    label: 'Daily',
                    value: 'Daily',
                  },
                  {
                    label: 'Weekly',
                    value: 'Weekly',
                  },
                  {
                    label: 'Monthly',
                    value: 'Monthly',
                  },
                ]}
                defaultValue={this.state.Loancollection}
                containerStyle={{height: h('6%'), width: w('30%')}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(item) =>
                  this.setState({
                    country: item.value,
                  })
                }
              />
            </View>
            {/* end */}
            <Apptext name={'Loan Date'} />
            <Apptext name={'Loan No'} />
            <Apptext name={'Principal Amount'} />
            <Apptext name={'Intrest'} />
            <Apptext name={'Total Loan'} />
            <Apptext name={'Document Charge'} />
            <Apptext name={'Net payable'} />
            <Apptext name={'No of Weeks'} />
            <Apptext name={'due Amount'} />
            <Apptext name={'due Start from'} />
            <Apptext name={'Loan Mature'} />
            <Apptext name={'Remark'} />
            <Text style={styles.gruntartxt}>GRUANTAR DETAILS</Text>
            <Apptext name={'Gurantar name'} />
            <Apptext name={'Gurantar Address'} />
            <Apptext name={'Gurantar Phone'} />
            <Appbtn text={'Submit'} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '150%',
    width: '100%',
    backgroundColor: PrimaryColor,
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  drop: {
    width: w('90%'),
    height: h('7%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginTop: h('3%'),
    flexDirection: 'row',
  },
  txtcollection: {
    color: 'white',
  },
  gruntartxt: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
});
