/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {PrimaryColor} from '../color';
import {ApptextInput, Appbtn} from '../../components';
import {Icon} from 'react-native-elements';

export class EmpDashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.Singntxt}>Employe Dashboard</Text>
        </View>
        <View style={styles.middle}>
          {/* 1 */}
          <View style={styles.ContainerView}>
            {/* btn1 */}
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Paymentlist');
              }}
              style={styles.btnContainrs}>
              <View style={styles.upper}>
                <Icon
                  reverse
                  name="wallet-sharp"
                  type="ionicon"
                  color={PrimaryColor}
                />
              </View>
              <View style={styles.lower}>
                <Text style={styles.Btntxt}>Payment list</Text>
              </View>
            </TouchableOpacity>
            {/* btn2 */}
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('PendingPaymentlist');
              }}
              style={styles.btnContainrs}>
              <View style={styles.upper}>
                <Icon
                  reverse
                  name="stats-chart-sharp"
                  type="ionicon"
                  color={PrimaryColor}
                />
              </View>
              <View style={styles.lower}>
                <Text style={styles.Btntxt}>Pending Payment</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* end */}
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
  top: {
    backgroundColor: 'white',
    width: w('100%'),
    height: h('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    // backgroundColor: 'yellow',
    width: w('100%'),
    height: h('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -h('15%'),
  },

  Singntxt: {
    fontSize: h('5%'),
    fontWeight: 'bold',
    color: PrimaryColor,
  },
  ContainerView: {
    // backgroundColor: 'red',
    width: w('100%'),
    height: h('20%'),
    marginTop: h('5%'),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  btnContainrs: {
    backgroundColor: 'white',
    width: w('30%'),
    height: h('20%'),
    borderRadius: h('2%'),
  },
  upper: {
    // backgroundColor: 'red',
    width: w('30%'),
    height: h('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  lower: {
    // backgroundColor: 'green',
    width: w('30%'),
    height: h('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Btntxt: {
    color: PrimaryColor,
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
});
