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
import {Apptext, Appbtn, Navheader, DatePicker} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';

export class PaymentEntry extends Component {
  state = {
    LoanNo: '',
    PrincipalAmount: '',
    Intrest: '',
    Totalloan: '',
    DocumentCharge: '',
    Netpayable: '',
    NoOfWeek: '',
    DueAmount: '',
    DueStartFrom: '',
    LoanMature: '',
    Remark: '',
    GuranterName: '',
    Guranteraddress: '',
    GuranterPhone: '',
    txt: [],
  };
  componentDidMount = () => {
    const xyz = this.props.route.params.navParams;
    this.setState({txt: xyz});
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Navheader
            onPress={() => {
              this.props.navigation.goBack('Dashboard');
            }}
            name={'Payment Entry'}
          />
          <View style={styles.scrollview}>
            {/* <Apptext name={'Loan No'} value={'Loan No ' + this.state.txt.id} /> */}
            <Text style={styles.txtentry}>Loan no: {this.state.txt.id}</Text>
            <Text style={styles.txtentry}>
              Customer Name: {this.state.txt.title}
            </Text>
            <Text style={styles.txtentry}>
              Last name: {this.state.txt.lastname}
            </Text>
            <Text style={styles.txtentry}>City: {this.state.txt.city}</Text>
            <Text style={styles.txtentry}>
              Collection Type: {this.state.txt.collectionType}
            </Text>
            <Text style={styles.txtentry}>
              Due amount: {this.state.txt.dueAmount}
            </Text>
            <Text style={[styles.txtentry, {marginBottom: h('2%')}]}>
              Date: 20-sep-2020
            </Text>
            <Appbtn text={'Qr scanner'} />

            {/* <Apptext
              name={'Customer Name'}
              value={'Customer Name: ' + this.state.txt.title}
            /> */}
            {/* <Apptext
              name={'Last Name'}
              value={'Last Name: ' + this.state.txt.lastname}
            /> */}
            {/* <Apptext name={'City'} value={'City: ' + this.state.txt.city} />
            <Apptext
              name={'Collection Type'}
              value={'Collection Type: ' + this.state.txt.collectionType}
            /> */}
            {/* <Apptext
              name={'Due Amount'}
              value={'Due Amount: ' + this.state.txt.dueAmount}
            />
            <Apptext name={'Date'} value={'Date: 20-sep-2020'} /> */}

            {/*  */}

            <Apptext name={'No of Dues'} />
            <Apptext name={'Total Due Amount'} />
            <Apptext name={'Penalty'} />
            <Apptext name={'Add/less'} />
            <Apptext name={'Net Total'} />
            <Apptext name={'Recieve Amount'} />
            <Apptext name={'Remarks'} />

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
    marginBottom: h('3%'),
  },
  txtcollection: {
    color: 'white',
    fontSize: h('2.5%'),
    fontWeight: 'bold',
  },
  gruntartxt: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  txtentry: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
    marginTop: h('2%'),
  },
});
