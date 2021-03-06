/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {PrimaryColor} from '../color';
import {Searchbar, Appbtn, Navheader} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';

export class PendingPaymentlist extends Component {
  state = {
    DATA: [
      {
        id: '1',
        title: 'Ali',
        pending: 'Pending',
      },
      {
        id: '2',
        title: 'Kashif',
      },
      {
        id: '3',
        title: 'Asmat',
        pending: 'Pending',
      },
      {
        id: '4',
        title: 'kamran',
      },
      {
        id: '5',
        title: 'Akush',
        pending: 'Pending',
      },
      {
        id: '6',
        title: 'jain',
      },
    ],
    FilterData: [
      {
        id: '1',
        title: 'Ali',
        pending: 'Pending',
      },

      {
        id: '3',
        title: 'Asmat',
        pending: 'Pending',
      },

      {
        id: '5',
        title: 'Akush',
        pending: 'Pending',
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
  removeByItem = (item) => {
    const data = this.state.FilterData;

    const index = data.indexOf(item);

    if (index > -1) {
      data.splice(index, 1);
    }

    this.setState({FilterData: data});
  };

  renderItem = (item) => (
    <TouchableOpacity
      // onLongPress={() => {
      //   this.removeByItem(item);
      // }}
      onPress={() => {
        if (item.pending === 'Pending') {
          this.props.navigation.navigate('PaymentListDetails', {
            navParams: item,
          });
        }
      }}
      style={styles.FlatContainer}>
      <View style={styles.right}>
        <Text style={styles.Ntxt}>Loan: {item.id}</Text>
      </View>
      <View style={styles.left}>
        <Text style={styles.Ptxt}>{item.pending}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <Navheader
          onPress={() => {
            this.props.navigation.goBack();
          }}
          name={'Pending Payments'}
        />
        <View style={styles.middle}>
          <Searchbar
            name={'Search'}
            txtcolor={PrimaryColor}
            onChangeText={(text) => this.searching(text)}
          />
        </View>
        {/* flatlist */}
        <FlatList
          data={this.state.FilterData}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={(item) => item.id}
        />
        {/* modal */}

        {/* end */}
        <View style={styles.last}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PrimaryColor,
  },
  middle: {
    // backgroundColor: 'yellow',

    alignItems: 'center',
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
  Ptxt: {
    color: PrimaryColor,
    fontWeight: 'bold',
    fontSize: h('2%'),
  },
});
