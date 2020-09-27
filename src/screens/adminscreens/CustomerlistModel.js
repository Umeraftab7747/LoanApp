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

  // removeByItem = (item) => {
  //   const data = this.state.FilterData;
  //   const index = data.indexOf(item);
  //   if (index > -1) {
  //     data.splice(index, 1);
  //   }
  //   this.setState({FilterData: data});
  // };

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
          <View style={styles.btnContianer}>
            <TouchableOpacity onPress={() => {}} style={styles.appbtn}>
              <Text style={styles.btntxt}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appbtn2}>
              <Text style={styles.btntxt}>Update</Text>
            </TouchableOpacity>
          </View>
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
  btnContianer: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: h('10%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  appbtn: {
    backgroundColor: 'tomato',
    width: '30%',
    height: h('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: h('10%'),
  },
  btntxt: {
    color: 'white',
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
  appbtn2: {
    backgroundColor: 'dodgerblue',
    width: '30%',
    height: h('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: h('10%'),
  },
});
