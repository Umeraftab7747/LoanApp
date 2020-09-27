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

export class ExpenseList extends Component {
  state = {
    DATA: [
      {
        id: '14221',
        title: 'Ali',
      },
      {
        id: '242121',
        title: 'Kashif',
      },
      {
        id: '5123',
        title: 'Asmat',
      },
    ],
    FilterData: [
      {
        id: '14221',
        title: 'Ali',
      },
      {
        id: '242121',
        title: 'Kashif',
      },
      {
        id: '5123',
        title: 'Asmat',
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
        this.props.navigation.navigate('ExpenseBook');
      }}
      style={styles.FlatContainer}>
      <View style={styles.right}>
        <Text style={styles.ltxt}>Account </Text>
        <Text style={styles.Ntxt}>#{item.id}</Text>
      </View>
      <View style={styles.left}>
        <Text>Date:25-2-2021</Text>
        <Text>Loss:100$</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <Navheader
          name={'Expense List'}
          onPress={() => {
            this.props.navigation.goBack('Dashboard');
          }}
        />
        <View style={styles.mainConatiner}>
          <Searchbar
            name={'Search'}
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
    width: w('50%'),
    height: h('15%'),
    justifyContent: 'center',
    paddingLeft: h('2%'),
  },
  left: {
    // backgroundColor: 'yellow',
    width: w('45%'),
    height: h('15%'),
    justifyContent: 'center',
    alignItems: 'center',
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
