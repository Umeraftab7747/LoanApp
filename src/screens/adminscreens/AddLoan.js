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

export class AddLoan extends Component {
  state = {
    DATA: [
      {
        id: '1',
        title: 'Ali (00001)',
        sonof: 'S/O: Kamran',
        address: 'xyz town punjab',
        phone: 'xx-xx-xxx-x',
      },
      {
        id: '2',
        title: 'Kashif (00002)',
        sonof: 'S/O: Ali',
        address: 'xyz town punjab',
        phone: 'xx-xx-xxx-x',
      },
      {
        id: '3',
        title: 'Asmat (00003)',
        sonof: 'S/O: hussain',
        address: 'xyz town punjab',
        phone: 'xx-xx-xxx-x',
      },
      {
        id: '4',
        title: 'kamran (00004)',
        sonof: 'S/O: Akmal',
        address: 'xyz town punjab',
        phone: 'xx-xx-xxx-x',
      },

      {
        id: '5',
        title: 'Akush (00005)',
        sonof: 'S/O: Patwari',
        address: 'xyz town punjab',
        phone: 'xx-xx-xxx-x',
      },
      {
        id: '6',
        title: 'jain (00006)',
        sonof: 'S/O: Leo',
        address: 'xyz town punjab',
        phone: 'xx-xx-xxx-x',
      },
    ],
    FilterData: [
      {
        id: '1',
        title: 'Ali (00001)',
        sonof: 'S/O: Kamran',
        address: 'xyz town punjab',
        phone: 'xx-xx-xxx-x',
      },
      {
        id: '2',
        title: 'Kashif (00002)',
        sonof: 'S/O: Ali',
        address: 'xyz town punjab',
        phone: 'xx-xx-xxx-x',
      },
      {
        id: '3',
        title: 'Asmat (00003)',
        sonof: 'S/O: hussain',
        address: 'xyz town punjab',
        phone: 'xx-xx-xxx-x',
      },
      {
        id: '4',
        title: 'kamran (00004)',
        sonof: 'S/O: Akmal',
        address: 'xyz town punjab',
        phone: 'xx-xx-xxx-x',
      },

      {
        id: '5',
        title: 'Akush (00005)',
        sonof: 'S/O: Patwari',
        address: 'xyz town punjab',
        phone: 'xx-xx-xxx-x',
      },
      {
        id: '6',
        title: 'jain (00006)',
        sonof: 'S/O: Leo',
        address: 'xyz town punjab',
        phone: 'xx-xx-xxx-x',
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
        this.props.navigation.navigate('AddloanModal', {
          navParams: item,
        });
      }}
      style={styles.FlatContainer}>
      <View style={styles.right}>
        {/* <Text style={styles.ltxt}>Id no: {item.id}</Text> */}
        <Text style={styles.Ntxt}>{item.title}</Text>
        <Text style={styles.Ntxt}>{item.sonof}</Text>
        <Text style={styles.Ntxt}>{item.phone}</Text>
        <Text style={styles.Ntxt}>{item.address}</Text>
      </View>
      <View style={styles.left}></View>
    </TouchableOpacity>
  );
  render() {
    return (
      <View style={styles.container}>
        <Navheader
          onPress={() => {
            this.props.navigation.goBack('Dashboard');
          }}
          name={'Add Loan'}
        />
        <View style={styles.middle}>
          <Searchbar
            name={'Search'}
            txtcolor={PrimaryColor}
            onChangeText={(text) => this.searching(text)}
          />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('AddCustomer');
            }}
            style={styles.btnplus}>
            <Text style={styles.plus}>{'+'}</Text>
          </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
    // fontWeight: 'bold',
    fontSize: h('2.5%'),
  },
  btnplus: {
    backgroundColor: 'white',
    width: w('12%'),
    height: h('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('30%'),
  },
  plus: {
    color: PrimaryColor,
    fontSize: h('2.5%'),
  },
});
