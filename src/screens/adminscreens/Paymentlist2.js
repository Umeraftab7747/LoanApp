/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {PrimaryColor} from '../color';

import {Navheader, Searchbar} from '../../components';
import {Icon} from 'react-native-elements';

export class Paymentlist2 extends Component {
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
        dueStart: '20-sep-2019',
      },
      {
        id: '2',
        title: 'Kashif',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'daily',
        dueAmount: '55112',
        dueStart: '20-sep-2019',
      },
      {
        id: '3',
        title: 'Asmat',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'monthly',
        dueAmount: '1200',
        dueStart: '20-sep-2019',
      },
      {
        id: '4',
        title: 'kamran',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'monthly',
        dueAmount: '5555',
        dueStart: '20-sep-2019',
      },
      {
        id: '5',
        title: 'Akush',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'daily',
        dueAmount: '5212',
        dueStart: '20-sep-2019',
      },
      {
        id: '6',
        title: 'jain',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'monthly',
        dueAmount: '4212',
        dueStart: '20-sep-2019',
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
        dueStart: '20-sep-2019',
      },
      {
        id: '2',
        title: 'Kashif',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'daily',
        dueAmount: '55112',
        dueStart: '20-sep-2019',
      },
      {
        id: '3',
        title: 'Asmat',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'monthly',
        dueAmount: '1200',
        dueStart: '20-sep-2019',
      },
      {
        id: '4',
        title: 'kamran',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'monthly',
        dueAmount: '5555',
        dueStart: '20-sep-2019',
      },
      {
        id: '5',
        title: 'Akush',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'daily',
        dueAmount: '5212',
        dueStart: '20-sep-2019',
      },
      {
        id: '6',
        title: 'jain',
        lastname: 'xyz',
        city: 'Abc',
        phone: 'xxx-xxx-xxx',
        collectionType: 'monthly',
        dueAmount: '4212',
        dueStart: '20-sep-2019',
      },
    ],

    selected: '',
    modalVisible: true,
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
        this.setState({selected: item}, () => {
          this.setState({modalVisible: true});
        });
        // this.props.navigation.navigate('PaymentEntry', {
        //   navParams: item,
        // });
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
          name={'Payment List'}
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
                  Report
                </Text>
                <Text style={styles.modltxtHeadding}>
                  Name: {this.state.selected.title}
                </Text>
                <View style={styles.ModalView}>
                  <Text style={styles.modaltxt}>
                    Due Start: {this.state.selected.dueStart}
                  </Text>
                  <Text style={styles.modaltxt}>
                    Due Amount: {this.state.selected.dueAmount}
                  </Text>
                </View>
                <Text style={styles.modaltxt}>Loan mature: 4192 INR</Text>
              </View>
              <View style={styles.middlemodal}>
                <Text style={styles.modaltxt}>BALANCE: 4425inr</Text>
                <Text style={styles.modaltxt}>PENDING: 1000inr</Text>
                <Text style={styles.modaltxt}>RECIEVE AMOUNT: 3425inr</Text>
                <Text style={styles.modaltxt}>PAID: 3425inr</Text>
                <Text style={styles.modaltxt}>Loan Amount: 5425inr</Text>
                <Text style={styles.modaltxt}>Total dues: 6000inr</Text>
              </View>
              <View style={styles.Bottommodal}>
                <View style={styles.modalContainerViews}>
                  <TouchableOpacity style={styles.appbtn2}>
                    <Text style={styles.btntxt}>Update</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}} style={styles.appbtn}>
                    <Text style={styles.btntxt}>Delete</Text>
                  </TouchableOpacity>
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
    height: h('33%'),
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
