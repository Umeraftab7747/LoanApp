/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {PrimaryColor} from '../color';
import {ApptextInput, Appbtn} from '../../components';
import {Icon} from 'react-native-elements';

export class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.Singntxt}>Dashboard</Text>
        </View>
        <View style={styles.middle}>
          {/* 1 */}
          <View style={styles.ContainerView}>
            {/* btn1 */}
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('AddCustomer');
              }}
              style={styles.btnContainrs}>
              <View style={styles.upper}>
                <Icon
                  reverse
                  name="person-sharp"
                  type="ionicon"
                  color={PrimaryColor}
                />
              </View>
              <View style={styles.lower}>
                <Text style={styles.Btntxt}>Add Customer</Text>
              </View>
            </TouchableOpacity>
            {/* btn2 */}
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('AddLoan');
              }}
              style={styles.btnContainrs}>
              <View style={styles.upper}>
                <Icon
                  reverse
                  name="document-text-sharp"
                  type="ionicon"
                  color={PrimaryColor}
                />
              </View>
              <View style={styles.lower}>
                <Text style={styles.Btntxt}>Add Loan</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {/* 1 */}
            <View style={styles.ContainerView}>
              {/* btn1 */}
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Customerlist');
                }}
                style={styles.btnContainrs}>
                <View style={styles.upper}>
                  <Icon
                    reverse
                    name="document-attach-sharp"
                    type="ionicon"
                    color={PrimaryColor}
                  />
                </View>
                <View style={styles.lower}>
                  <Text style={styles.Btntxt}>Customer list</Text>
                </View>
              </TouchableOpacity>
              {/* btn2 */}
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Loanlist');
                }}
                style={styles.btnContainrs}>
                <View style={styles.upper}>
                  <Icon
                    reverse
                    name="document-text-sharp"
                    type="ionicon"
                    color={PrimaryColor}
                  />
                </View>
                <View style={styles.lower}>
                  <Text style={styles.Btntxt}>Loan List</Text>
                </View>
              </TouchableOpacity>
              {/* btn3 */}
              <TouchableOpacity style={styles.btnContainrs}>
                <View style={styles.upper}>
                  <Icon
                    reverse
                    name="wallet-sharp"
                    type="ionicon"
                    color={PrimaryColor}
                  />
                </View>
                <View style={styles.lower}>
                  <Text style={styles.Btntxt}>Payments list</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* 2 */}
            <View style={styles.ContainerView}>
              {/* btn1 */}
              <TouchableOpacity style={styles.btnContainrs}>
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
              {/* btn2 */}
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Agents');
                }}
                style={styles.btnContainrs}>
                <View style={styles.upper}>
                  <Icon
                    reverse
                    name="people-sharp"
                    type="ionicon"
                    color={PrimaryColor}
                  />
                </View>
                <View style={styles.lower}>
                  <Text style={styles.Btntxt}>Agents</Text>
                </View>
              </TouchableOpacity>
              {/* btn3 */}
              <TouchableOpacity style={styles.btnContainrs}>
                <View style={styles.upper}>
                  <Icon
                    reverse
                    name="folder-sharp"
                    type="ionicon"
                    color={PrimaryColor}
                  />
                </View>
                <View style={styles.lower}>
                  <Text style={styles.Btntxt}>Loan Pending</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* end */}
          </ScrollView>
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
