import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

// screens
import {Signup} from '../screens/login';
import {Signin} from '../screens/login';
import {Dashboard} from '../screens/adminscreens';
import {AddCustomer} from '../screens/adminscreens';
import {AddLoan} from '../screens/adminscreens';
import {AddloanModal} from '../screens/adminscreens';

export default class Stacknavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddloanModal"
            component={AddloanModal}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddLoan"
            component={AddLoan}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="AddCustomer"
            component={AddCustomer}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
