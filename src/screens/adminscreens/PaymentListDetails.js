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

import {PrimaryColor} from '../color';
import {Navheader} from '../../components';

export class PaymentListDetails extends Component {
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
          name={'Pending Payment'}
        />

        <View style={styles.containerView}>
          <View style={styles.views}>
            <Text style={styles.htext}>Loan no: </Text>
            <Text style={styles.ttext}>{this.state.txt.id}</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.htext}>Customer name: </Text>
            <Text style={styles.ttext}>{this.state.txt.title}</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.htext}>Total Amount: </Text>
            <Text style={styles.ttext}>1242inr</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.htext}>Recieved Amount: </Text>
            <Text style={styles.ttext}>1000inr</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.htext}>Balance: </Text>
            <Text style={styles.ttext}>1000inr</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.htext}>Due amount: </Text>
            <Text style={styles.ttext}>8000inr</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.htext}>Total Dues: </Text>
            <Text style={styles.ttext}>12000inr</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.htext}>Pending Dues: </Text>
            <Text style={styles.ttext}>11000inr</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.htext}>Last Paid Date: </Text>
            <Text style={styles.ttext}>20-sep-2020</Text>
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
