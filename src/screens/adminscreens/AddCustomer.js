/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {PrimaryColor} from '../color';
import {Apptext, Appbtn, Navheader} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';

export class AddCustomer extends Component {
  state = {
    firstname: '',
    country: 'S/o',
    lastname: '',
    street: '',
    Village: '',
    postOffice: '',
    city: '',
    district: '',
    Mobile: '',
    phone: '',
    area: '',
    workType: '',
  };
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Navheader
            onPress={() => {
              this.props.navigation.goBack('Dashboard');
            }}
            name={'ADD CUSTOMER'}
          />
          <View style={styles.middle}>
            <Apptext name={'Customer FirstName'} />
            {/* name */}
            <View style={styles.drop}>
              <DropDownPicker
                items={[
                  {
                    label: 'S/o',
                    value: 'S/o',
                  },
                  {
                    label: 'D/o',
                    value: 'D/o',
                  },
                  {
                    label: 'W/o',
                    value: 'W/o',
                  },
                  {
                    label: 'C/o',
                    value: 'C/o',
                  },
                ]}
                defaultValue={this.state.country}
                containerStyle={{height: h('6%'), width: w('20%')}}
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
            <Apptext name={'Customer LastName'} />

            <Apptext name={'Street'} />
            <Apptext name={'Village'} />
            <Apptext name={'Post office'} />
            <Apptext name={'City'} />
            <Apptext name={'district'} />
            <Apptext name={'Mobile'} />
            <Apptext name={'Phone'} />
            <Apptext name={'Area'} />
            <Apptext name={'Work Type'} />
            <Apptext name={'Email'} />
            <Apptext name={'Adhar No'} />
            <Apptext name={'Landmark'} />

            <Apptext name={'Reference Name'} />
            <Apptext name={'Reference Phone'} />
            <Appbtn text={'Add Customer'} />
            {/* name */}
          </View>
        </View>
      </KeyboardAwareScrollView>
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
    height: h('200%'),
    alignItems: 'center',
  },

  Singntxt: {
    fontSize: h('3%'),
    fontWeight: 'bold',
    color: PrimaryColor,
  },

  drop: {
    width: '79%',
    height: h('7%'),
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
