import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class DatePicker extends Component {
  state = {
    visibility: false,
    DateDisplay: '',
  };
  handleConfirm = (date) => {
    this.setState({DateDisplay: date});
  };

  OnPressCancel = () => {
    this.setState({visibility: false});
  };
  OnPressOpenButton = () => {
    this.setState({visibility: true});
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={this.OnPressOpenButton}>
          <Text style={styles.btn}>{this.props.title}</Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={this.state.visibility}
          onConfirm={this.handleConfirm}
          onCancel={this.OnPressCancel}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: w('30%'),
    height: h('7%'),
    backgroundColor: 'white',
    borderRadius: h('1%'),
    marginTop: h('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    color: '#124',
    // fontWeight: 'bold',
    fontSize: h('2%'),
  },
});
