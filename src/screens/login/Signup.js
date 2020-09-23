/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {PrimaryColor} from '../color';
import {ApptextInput, Appbtn} from '../../components';

export class Signup extends Component {
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.Singntxt}>Signup</Text>
          </View>
          <View style={styles.middle}>
            <ApptextInput name={'EMAIL'} txtcolor={PrimaryColor} />
            <ApptextInput name={'Phone'} txtcolor={PrimaryColor} />
            <ApptextInput name={'Address'} txtcolor={PrimaryColor} />
            <ApptextInput
              name={'Password'}
              txtcolor={PrimaryColor}
              secureTextEntry={true}
            />
            <ApptextInput
              name={'Confirm Password'}
              txtcolor={PrimaryColor}
              secureTextEntry={true}
            />
            <Appbtn text={'SignUp'} />
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.bottomview}>
              <Text style={styles.SignUptext}>
                Sign-in! if you have an Account
              </Text>
            </TouchableOpacity>
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
  top: {
    // backgroundColor: 'red',
    width: w('100%'),
    height: h('20%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    // backgroundColor: 'yellow',
    width: w('100%'),
    height: h('58%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    // backgroundColor: 'green',
    width: w('100%'),
    height: h('20%'),
    alignItems: 'center',
  },
  Singntxt: {
    fontSize: h('5%'),
    fontWeight: 'bold',
    color: 'white',
  },
  bottomview: {
    // backgroundColor: 'white',
    width: w('60%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: h('7%'),
  },
  SignUptext: {
    color: 'white',
    fontSize: h('2%'),
  },
});
