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
import {PrimaryColor} from '../screens/color';
import {Icon} from 'react-native-elements';

export class Navheader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity {...this.props} style={styles.right}>
          <Icon
            // reverse
            name="arrow-back-sharp"
            type="ionicon"
            color="#517fa4"
            size={35}
          />
        </TouchableOpacity>
        <View style={styles.middle}>
          <Text style={styles.txt}>{this.props.name}</Text>
        </View>
        <View style={styles.left}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: w('100%'),
    height: h('7%'),
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  right: {
    // backgroundColor: 'red',
    width: w('20%'),
    height: h('7%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    // backgroundColor: 'green',
    width: w('60%'),
    height: h('7%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    // backgroundColor: 'red',
    width: w('20%'),
    height: h('7%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: PrimaryColor,
    fontSize: h('2.5%'),
    fontWeight: 'bold',
  },
});
