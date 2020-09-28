/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Modal,
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
  renderItem = (item) => (
    <TouchableOpacity
      // onLongPress={() => {
      //   this.removeByItem(item);
      // }}
      onPress={() => {
        this.setState({modalVisible: true});
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
        <View style={styles.middle}>
          <Searchbar
            name={'Search'}
            txtcolor={PrimaryColor}
            onChangeText={(text) => this.searching(text)}
          />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ExpenseBook');
            }}
            style={styles.btnplus}>
            <Text style={styles.plus}>{'+'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainConatiner}>
          <View style={styles.flatlistContainer}>
            <FlatList
              data={this.state.FilterData}
              renderItem={({item}) => this.renderItem(item)}
              keyExtractor={(item) => item.id}
            />
          </View>
          {/* modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({modalVisible: false});
            }}>
            <View style={styles.ModalViewContainer}>
              <View style={styles.upermodal}>
                <Text
                  style={[
                    styles.report,
                    {fontSize: h('5%'), marginBottom: h('3%')},
                  ]}>
                  Expense Report
                </Text>
                <Text style={styles.modltxtHeadding}>ID: #41231</Text>
                <View style={styles.ModalView}>
                  <Text style={styles.modaltxt}>Expensed</Text>
                  {/* <Text style={styles.modaltxt}>Incomed</Text> */}
                </View>
                <Text style={styles.modaltxt}>Amount: 4192 INR</Text>
              </View>
              <View style={styles.middlemodal}>
                <Text style={styles.modaltxt}>Name: Asmat</Text>
                <Text style={styles.modaltxt}>Note: All notes here</Text>
              </View>
              <View style={styles.Bottommodal}>
                <View style={styles.Bottommodal}>
                  <View style={styles.modalContainerViews}>
                    <TouchableOpacity style={styles.appbtn2}>
                      <Text style={styles.btntxt}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={styles.appbtn}>
                      <Text style={styles.btntxt}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* <TouchableOpacity
                  onPress={() => {
                    this.setState({modalVisible: false}, () => {
                      this.props.navigation.navigate('PaymentEntry', {
                        navParams: this.state.selected,
                      });
                    });
                  }}
                  style={styles.modalbtn}>
                  <Text style={styles.btnmodlatxt}>Add Payment Entry</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.imgContianer}>
                  <Icon
                    reverse
                    name="document-attach-sharp"
                    type="ionicon"
                    color={PrimaryColor}
                    size={25}
                  />
                  <Text style={styles.report}>Download Report</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {/* end modal */}
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
  middle: {
    // backgroundColor: 'yellow',

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
  ModalViewContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  upermodal: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('33%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  middlemodal: {
    // backgroundColor: 'green',
    width: '100%',
    height: h('33%'),
    alignItems: 'center',
  },
  Bottommodal: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: h('10%'),
    alignItems: 'center',
  },
  modltxtHeadding: {
    color: PrimaryColor,
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  ModalView: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    width: '100%',
    height: h('10%'),
    marginTop: h('2%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  modaltxt: {
    color: PrimaryColor,
    fontWeight: '600',
    fontSize: h('2.5%'),
    marginTop: h('1.5%'),
  },
  modalbtn: {
    backgroundColor: PrimaryColor,
    width: '40%',
    height: h('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('12%'),
    marginTop: h('4%'),
  },
  btnmodlatxt: {
    color: 'white',
    fontSize: h('2%'),
  },
  imgContianer: {
    // backgroundColor: 'red',
    width: '60%',
    height: h('8%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: h('5%'),
  },
  report: {
    color: PrimaryColor,
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
  modalContainerViews: {
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
