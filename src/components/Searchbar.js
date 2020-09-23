/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
import {PrimaryColor} from '../screens/color';

export class Searchbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          {...this.props}
          style={styles.txtinput}
          placeholder={this.props.name}
          placeholderTextColor={this.props.txtcolor}
          secureTextEntry={this.props.secureTextEntry}
        />
        <TouchableOpacity style={styles.icon}>
          <Icon
            reverse
            size={15}
            name="search-sharp"
            type="ionicon"
            color={PrimaryColor}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: w('70%'),
    height: h('7%'),
    backgroundColor: 'white',
    borderRadius: h('1%'),
    marginTop: h('1%'),
    flexDirection: 'row',
  },
  icon: {
    // backgroundColor: 'red',
    width: w('10%'),
    height: h('7%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtinput: {
    width: w('60%'),
    height: h('7%'),
    paddingLeft: h('1%'),

    color: '#1d2d50',
  },
});
