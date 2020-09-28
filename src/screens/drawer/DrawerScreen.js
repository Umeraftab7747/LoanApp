/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {heightPercentageToDP as h} from 'react-native-responsive-screen';
import {PrimaryColor} from '../color';

import {Icon} from 'react-native-elements';

export class DrawerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <Text style={styles.fontmenu}>Menu</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('AddCustomer');
          }}
          style={styles.btn}>
          <View style={styles.iconbtn}>
            <Icon
              name="person-sharp"
              type="ionicon"
              color={PrimaryColor}
              size={25}
            />
          </View>
          <Text style={styles.btntxt}>Add Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Loanlist');
          }}
          style={styles.btn}>
          <View style={styles.iconbtn}>
            <Icon
              name="document-text-sharp"
              type="ionicon"
              color={PrimaryColor}
              size={25}
            />
          </View>

          <Text style={styles.btntxt}>Loan List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('AddLoan');
          }}
          style={styles.btn}>
          <View style={styles.iconbtn}>
            <Icon
              name="document-text-sharp"
              type="ionicon"
              color={PrimaryColor}
              size={25}
            />
          </View>

          <Text style={styles.btntxt}>Add Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Customerlist');
          }}
          style={styles.btn}>
          <View style={styles.iconbtn}>
            <Icon
              name="document-attach-sharp"
              type="ionicon"
              color={PrimaryColor}
              size={25}
            />
          </View>

          <Text style={styles.btntxt}>Customer List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('');
          }}
          style={styles.btn}>
          <View style={styles.iconbtn}>
            <Icon
              name="barcode-sharp"
              type="ionicon"
              color={PrimaryColor}
              size={25}
            />
          </View>

          <Text style={styles.btntxt}>Qr Scanner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Paymentlist');
          }}
          style={styles.btn}>
          <View style={styles.iconbtn}>
            <Icon
              name="wallet-sharp"
              type="ionicon"
              color={PrimaryColor}
              size={25}
            />
          </View>

          <Text style={styles.btntxt}>Payment Entry</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PendingPaymentlist');
          }}
          style={styles.btn}>
          <View style={styles.iconbtn}>
            <Icon
              name="stats-chart-sharp"
              type="ionicon"
              color={PrimaryColor}
              size={25}
            />
          </View>
          <Text style={styles.btntxt}>Pending Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Paymentlist2');
          }}
          style={styles.btn}>
          <View style={styles.iconbtn}>
            <Icon
              name="albums-sharp"
              type="ionicon"
              color={PrimaryColor}
              size={25}
            />
          </View>
          <Text style={styles.btntxt}>Payment List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Agents');
          }}
          style={styles.btn}>
          <View style={styles.iconbtn}>
            <Icon
              name="people-sharp"
              type="ionicon"
              color={PrimaryColor}
              size={25}
            />
          </View>
          <Text style={styles.btntxt}>Agents</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('AddCompany');
          }}
          style={styles.btn}>
          <View style={styles.iconbtn}>
            <Icon
              name="business-sharp"
              type="ionicon"
              color={PrimaryColor}
              size={25}
            />
          </View>

          <Text style={styles.btntxt}>Company Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ExpenseList');
          }}
          style={styles.btn}>
          <View style={styles.iconbtn}>
            <Icon
              name="book-sharp"
              type="ionicon"
              color={PrimaryColor}
              size={25}
            />
          </View>
          <Text style={styles.btntxt}>Expense Book</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: 'white',
    width: '100%',
    height: h('7%'),
    alignItems: 'center',
    // justifyContent: 'center',
    borderBottomColor: PrimaryColor,
    borderBottomWidth: 1,
    marginTop: h('1%'),
    flexDirection: 'row',
  },
  menu: {
    backgroundColor: '#0009',
    width: '100%',
    height: h('8%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontmenu: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  btntxt: {
    color: PrimaryColor,
    fontWeight: 'bold',
    fontSize: h('2%'),
  },
  iconbtn: {
    // backgroundColor: 'red',
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
