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
import {Customerlist} from '../screens/adminscreens';
import {CustomerlistModel} from '../screens/adminscreens';
import {Loanlist} from '../screens/adminscreens';
import {LoanDetails} from '../screens/adminscreens';
import {Agents} from '../screens/adminscreens';
import {Paymentlist} from '../screens/adminscreens';
import {PaymentEntry} from '../screens/adminscreens';
import {PendingPaymentlist} from '../screens/adminscreens';
import {PaymentListDetails} from '../screens/adminscreens';
import {EmpDashboard} from '../screens/employe';
import {SplashScreen} from '../screens/splash';
import {Paymentlist2} from '../screens/adminscreens';
import {AddCompany} from '../screens/adminscreens';
import {ExpenseBook} from '../screens/adminscreens';
import {ExpenseList} from '../screens/adminscreens';

export default class Stacknavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="ExpenseList"
            component={ExpenseList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ExpenseBook"
            component={ExpenseBook}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddCompany"
            component={AddCompany}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Paymentlist2"
            component={Paymentlist2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EmpDashboard"
            component={EmpDashboard}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="PendingPaymentlist"
            component={PendingPaymentlist}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PaymentListDetails"
            component={PaymentListDetails}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Paymentlist"
            component={Paymentlist}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PaymentEntry"
            component={PaymentEntry}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Agents"
            component={Agents}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Loanlist"
            component={Loanlist}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoanDetails"
            component={LoanDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Customerlist"
            component={Customerlist}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CustomerlistModel"
            component={CustomerlistModel}
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
