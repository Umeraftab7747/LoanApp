/* eslint-disable radix */
/* eslint-disable prettier/prettier */
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

export class AddloanModal extends Component {
  state = {
    Loancollection: 'Daily',
    LoanNo: '',
    PrincipalAmount: '',
    Intrest: '',
    Totalloan: '',
    DocumentCharge: '',
    Netpayable: '',
    NoOfWeek: '',
    DueAmount: '',
    DueStartFrom: '',
    LoanMature: '7 days',
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

  // Totalloan = (text) => {
  //   const {Intrest, PrincipalAmount, Totalloan} = this.state;
  //   const total = Intrest + PrincipalAmount;
  //   this.setState({Totalloan: total});
  //   console.warn(Totalloan);
  // };

  render() {
    var f1 = this.state.Intrest;
    var f2 = this.state.PrincipalAmount;
    const result = f1 && f2 ? f2 + f1 : null;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Navheader
            onPress={() => {
              this.props.navigation.goBack('Dashboard');
            }}
            name={'Add Loan'}
          />
          <View style={styles.scrollview}>
            <Text style={styles.txtname}>{this.state.txt.title}</Text>
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
                    Loancollection: item.value,
                  })
                }
              />
            </View>
            {/* end */}
            <Apptext name={'Loan No'} />
            <Apptext
              name={'Principal Amount'}
              onChangeText={(text) => {
                this.setState({PrincipalAmount: parseInt(text)});
              }}
            />
            <Apptext
              name={'Intrest'}
              onChangeText={(text) => {
                this.setState({Intrest: parseInt(text)});
              }}
            />
            <Text style={styles.total}>Total: {result}</Text>
            {/* <Apptext name={'Total Loan'} value={result} /> */}
            <Apptext name={'Document Charge'} />
            <Apptext name={'Net payable'} />
            {this.state.Loancollection === 'Daily' ? (
              <Apptext name={'No of days'} />
            ) : null}
            {this.state.Loancollection === 'Weekly' ? (
              <Apptext name={'No of Weeks'} />
            ) : null}
            {this.state.Loancollection === 'Monthly' ? (
              <Apptext name={'No of Months'} />
            ) : null}
            <Apptext name={'due Amount'} />
            <View style={styles.drop}>
              <Text style={styles.txtcollection}>Due start from</Text>
              <DatePicker title={'Calander'} />
            </View>
            {/* <View style={styles.drop}>
              <Text style={styles.txtcollection}>Loan mature</Text>
              <DatePicker title={'Calander'} />
            </View> */}
            <View>
              <Text style={styles.LoanMature}>
                Loan Mature: {this.state.LoanMature}
              </Text>
            </View>
            <Apptext name={'Remark'} />
            <Text style={styles.gruntartxt}>Gurantar</Text>
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
    height: '190%',
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
  total: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  LoanMature: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: h('3%'),
    marginTop: h('2%'),
    marginBottom: h('2%'),
  },
  txtname: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
    marginTop: h('2%'),
  },
});
