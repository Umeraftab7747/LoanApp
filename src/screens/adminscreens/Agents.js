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
import {Icon} from 'react-native-elements';

export class Agents extends Component {
  state = {
    DATA: [
      {
        id: '1',
        title: 'Anush',
        address: 'xyz',
        mobile: 'xxxxxx-xxxx--xxx',
      },
      {
        id: '2',
        title: 'Rahseed',
        address: 'xyz',
        mobile: 'xxxxxx-xxxx--xxx',
      },
      {
        id: '3',
        title: 'Jain',
        address: 'xyz',
        mobile: 'xxxxxx-xxxx--xxx',
      },
    ],
    FilterData: [
      {
        id: '1',
        title: 'Anush',
        address: 'xyz',
        mobile: 'xxxxxx-xxxx--xxx',
      },
      {
        id: '2',
        title: 'Rahseed',
        address: 'xyz',
        mobile: 'xxxxxx-xxxx--xxx',
      },
      {
        id: '3',
        title: 'Jain',
        address: 'xyz',
        mobile: 'xxxxxx-xxxx--xxx',
      },
    ],

    selected: '',
    modalVisible: false,
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
        this.setState({selected: item}, () => {
          this.setState({modalVisible: true});
        });
      }}
      style={styles.FlatContainer}>
      <View style={styles.right}>
        <Text style={styles.ltxt}>Agent no: {item.id}</Text>
        <Text style={styles.Ntxt}>Name: {item.title}</Text>
      </View>
      <View style={styles.left}></View>
    </TouchableOpacity>
  );
  render() {
    return (
      <View style={styles.container}>
        <Navheader
          onPress={() => {
            this.props.navigation.goBack();
          }}
          name={'Agents'}
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.ModalContainerView}>
              <View style={styles.topModal}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({modalVisible: false});
                  }}>
                  <Icon
                    reverse
                    size={18}
                    name="close-sharp"
                    type="ionicon"
                    color={PrimaryColor}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.middleModal}>
                <Text style={styles.txtContinaer}>
                  NAME: {this.state.selected.title}
                </Text>
                <Text style={styles.txtContinaer}>
                  address: {this.state.selected.address}
                </Text>
                <Text style={styles.txtContinaer}>
                  Mobile NO: {this.state.selected.mobile}
                </Text>
              </View>
            </View>
          </View>
        </Modal>
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
  modalContainer: {
    backgroundColor: '#0008',
    alignItems: 'center',
    justifyContent: 'center',
    width: w('100%'),
    height: h('100%'),
  },
  ModalContainerView: {
    backgroundColor: 'white',
    width: w('100%'),
    height: h('80%'),
    borderRadius: h('4%'),
  },
  topModal: {
    // backgroundColor: 'red',
    width: '100%',
    height: '10%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  middleModal: {
    // backgroundColor: 'green',
    width: '100%',
    height: '90%',
    alignItems: 'center',
    paddingTop: h('3%'),
  },
  txtContinaer: {
    color: PrimaryColor,
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
});
