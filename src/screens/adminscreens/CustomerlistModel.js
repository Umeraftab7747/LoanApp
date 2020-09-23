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

export class CustomerlistModel extends Component {
  state = {
    txt: [],
  };
  componentDidMount = () => {
    const xyz = this.props.route.params.navParams;
    this.setState({txt: xyz});
  };

  render() {
    return (
      <View style={styles.container}>
        <Navheader
          onPress={() => {
            this.props.navigation.goBack('Dashboard');
          }}
          name={'Customer Details'}
        />

        <View style={styles.containerView}>
          <View style={styles.views}>
            <Text style={styles.htext}>Id: </Text>
            <Text style={styles.ttext}>{this.state.txt.id}</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.htext}>Name: </Text>
            <Text style={styles.ttext}>{this.state.txt.title}</Text>
          </View>
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
  containerView: {
    alignItems: 'center',
    width: w('100%'),
    height: h('100%'),
  },
  views: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: '100%',
    height: h('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: h('2%'),
  },
  htext: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  ttext: {
    color: 'white',
    fontSize: h('3%'),
  },
});
