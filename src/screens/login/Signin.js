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

export class Signin extends Component {
  state = {
    email: '',
    Password: '',
  };

  validate = () => {
    const {email, Password} = this.state;
    if (email === 'Admin') {
      if (Password === '1234') {
        this.props.navigation.replace('Dashboard');
      }
    } else {
      if (email === 'Emp') {
        if (Password === '123') {
          this.props.navigation.replace('EmpDashboard');
        }
      }
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.Singntxt}>Signin</Text>
          </View>
          <View style={styles.middle}>
            <ApptextInput
              onChangeText={(email) => {
                this.setState({email});
              }}
              name={'EMAIL'}
              txtcolor={PrimaryColor}
            />
            <ApptextInput
              onChangeText={(Password) => {
                this.setState({Password});
              }}
              name={'Password'}
              txtcolor={PrimaryColor}
              secureTextEntry={true}
            />
            <Appbtn
              onPress={() => {
                // this.props.navigation.replace('Dashboard');
                this.validate();
              }}
              text={'Signin'}
            />
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Signup');
              }}
              style={styles.bottomview}>
              <Text style={styles.SignUptext}>
                SignUp! if you dont have Account
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
    height: h('33%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    // backgroundColor: 'yellow',
    width: w('100%'),
    height: h('33%'),
    alignItems: 'center',
  },
  bottom: {
    // backgroundColor: 'green',
    width: w('100%'),
    height: h('33%'),
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
