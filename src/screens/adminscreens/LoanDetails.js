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

export class LoanDetails extends Component {
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
          name={'Loan Details'}
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
            <Text style={styles.htext}>Name: </Text>
            <Text style={styles.ttext}>{this.state.txt.title}</Text>
          </View>

          <View style={styles.views}>
            <Text style={styles.htext}>Loan no: </Text>
            <Text style={styles.ttext}>{this.state.txt.title}</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.htext}>Due date: </Text>
            <Text style={styles.ttext}>{this.state.txt.title}</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.htext}>mature date: </Text>
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
  textdetails: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: h('2%'),
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
