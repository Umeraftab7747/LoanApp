/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {PrimaryColor} from '../color';
import {ApptextInput, Appbtn, Navheader, Searchbar} from '../../components';
import {Icon} from 'react-native-elements';

export class Paymentlist extends Component {
  state = {
    DATA: [
      {
        id: '1',
        title: 'Ali',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'Weekly',
        dueAmount: '4442',
      },
      {
        id: '2',
        title: 'Kashif',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'daily',
        dueAmount: '55112',
      },
      {
        id: '3',
        title: 'Asmat',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'monthly',
        dueAmount: '1200',
      },
      {
        id: '4',
        title: 'kamran',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'monthly',
        dueAmount: '5555',
      },
      {
        id: '5',
        title: 'Akush',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'daily',
        dueAmount: '5212',
      },
      {
        id: '6',
        title: 'jain',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'monthly',
        dueAmount: '4212',
      },
    ],
    FilterData: [
      {
        id: '1',
        title: 'Ali',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'Weekly',
        dueAmount: '4442',
      },
      {
        id: '2',
        title: 'Kashif',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'daily',
        dueAmount: '55112',
      },
      {
        id: '3',
        title: 'Asmat',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'monthly',
        dueAmount: '1200',
      },
      {
        id: '4',
        title: 'kamran',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'monthly',
        dueAmount: '5555',
      },
      {
        id: '5',
        title: 'Akush',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'daily',
        dueAmount: '5212',
      },
      {
        id: '6',
        title: 'jain',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'monthly',
        dueAmount: '4212',
      },
    ],

    selected: '',
  };

  searching = (text) => {
    const newData = this.state.DATA.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`;

      const searchText = text.toUpperCase();

      return itemData.indexOf(searchText) > -1;
    });
    this.setState({FilterData: newData});
  };
  renderItem = (item) => (
    <TouchableOpacity
      // onLongPress={() => {
      //   this.removeByItem(item);
      // }}
      onPress={() => {
        this.props.navigation.navigate('PaymentEntry', {
          navParams: item,
        });
      }}
      style={styles.FlatContainer}>
      <View style={styles.right}>
        <Text style={styles.ltxt}>Loan no: {item.id}</Text>
        <Text style={styles.Ntxt}>Name: {item.title}</Text>
      </View>
      <View style={styles.left}></View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <Navheader
          name={'Payment Entry'}
          onPress={() => {
            this.props.navigation.goBack('Dashboard');
          }}
        />
        <View style={styles.mainConatiner}>
          <Searchbar
            name={'Search Loan list'}
            txtcolor={PrimaryColor}
            onChangeText={(text) => this.searching(text)}
          />
          <View style={styles.flatlistContainer}>
            <FlatList
              data={this.state.FilterData}
              renderItem={({item}) => this.renderItem(item)}
              keyExtractor={(item) => item.id}
            />
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
  mainConatiner: {
    // backgroundColor: 'red',
    width: w('100%'),
    height: h('100%'),
    alignItems: 'center',
  },
  flatlistContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('81%'),
  },
  FlatContainer: {
    backgroundColor: 'white',
    width: w('95%'),
    height: h('15%'),
    margin: h('1%'),
    borderRadius: h('2%'),
    flexDirection: 'row',
    marginBottom: h('1%'),
  },
  right: {
    // backgroundColor: 'red',
    width: w('70%'),
    height: h('15%'),
    justifyContent: 'center',
    paddingLeft: h('2%'),
  },
  left: {
    // backgroundColor: 'yellow',
    width: w('25%'),
    height: h('15%'),
  },
  ltxt: {
    color: 'black',
    // fontWeight: 'bold',
    fontSize: h('2%'),
  },
  Ntxt: {
    color: PrimaryColor,
    fontWeight: 'bold',
    fontSize: h('3%'),
  },
});
