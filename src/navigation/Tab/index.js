import * as React from 'react';
import { Button, Text, View, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardFlow from '../Stack/DashboardFlow'
import TransactionsFlow from '../Stack/TransactionsFlow'
import AddTransactionFlow from '../Stack/AddTransactionFlow'
import StatisticsFlow from '../Stack/StatisticsFlow'
import ProfileFlow from '../Stack/ProfileFlow'


import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity onPress={onPress}
    style={styles.cutomTabBarButtonContainer}
  >
    <View style={styles.cutomTabBarButtonContainerChild}>
      {children}
    </View>
  </TouchableOpacity>
)

const Tab = createBottomTabNavigator();



export default function App() {
  return (
      <Tab.Navigator
        tabBarOptions={{ showLabel:false, style:styles.tabBarContainer }}
      >
        <Tab.Screen 
          name="Dashboard" 
          component={DashboardFlow} 
          options={{
            tabBarIcon : ({focused}) => {
              return <View style={styles.menuView}>
                <Image resizeMode="contain"
                  source={require('../../images/homeIcon.png')}
                  style={[styles.menuIcon,{ tintColor: focused ? Colors.themeGreen : 'gray' }]}
                />
                <Text style={[styles.menuName,{ color: focused ?  Colors.themeGreen : 'gray', }]}>
                  Home
                </Text>
              </View>
            }
          }}
        />
        <Tab.Screen name="TransactionsFlow" component={TransactionsFlow} 
          options={{
            tabBarIcon : ({focused}) => {
              return <View style={styles.menuView}>
                <Image resizeMode="contain"
                  source={require('../../images/transactionsIcon.png')} 
                  style={[styles.menuIcon,{ tintColor: focused ? Colors.themeGreen : 'gray' }]}
                />
                <Text style={[styles.menuName,{ color: focused ?  Colors.themeGreen : 'gray', }]}>
                  Transactions
                </Text>
              </View>
            }
          }}
        />

        <Tab.Screen name="AddTransactionFlow" component={AddTransactionFlow} 
          options={{
            tabBarIcon:({focused}) => (
              <Image resizeMode="contain"
                  source={require('../../images/plusIcon2.png')}
                  style={{ height:30, width:30, tintColor: 'white' }}
              />
            ),
            tabBarButton:(props) => ( <CustomTabBarButton {...props} /> )
          }}
        />

        <Tab.Screen name="StatisticsFlow" component={StatisticsFlow}
          options={{
            tabBarIcon : ({focused}) => {
              return <View style={styles.menuView}>
                <Image resizeMode="contain"
                  source={require('../../images/statisticsIcon.png')}
                  style={[styles.menuIcon,{ tintColor: focused ? Colors.themeGreen : 'gray' }]}
                />
                <Text style={[styles.menuName,{ color: focused ?  Colors.themeGreen : 'gray', }]}>
                  Statistics
                </Text>
              </View>
            }
          }}
        />
        <Tab.Screen name="ProfileFlow" component={ProfileFlow} 
          options={{
            tabBarIcon : ({focused}) => {
              return <View style={styles.menuView}>
                <Image resizeMode="contain"
                  source={require('../../images/profileIcon.png')}
                  style={[styles.menuIcon,{ tintColor: focused ? Colors.themeGreen : 'gray' }]}
                />
                <Text style={[styles.menuName,{ color: focused ?  Colors.themeGreen : 'gray', }]}>
                  Profile
                </Text>
              </View>
            }
          }}
        />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  menuIcon:{
    height:20,
    width:20,
  },
  menuView:{
    alignItems:'center',
    justifyContent:'center',
    top:Platform.OS == 'ios' ? 15 : 3,
  },
  menuName:{
    fontSize:11, 
    fontFamily:Fonts.PoppinsRegular,
    marginTop:3
  },
  tabBarContainer:{
    position:'absolute',
    bottom:30,
    left:20,
    right:20,
    elevation:0,
    backgroundColor:'#ffffff',
    borderRadius:15,
    height:70,
    shadowColor:Colors.themeGreen,
     shadowOffset:{
       width:0,
       height:10
     },
     shadowOpacity:0.25,
     shadowRadius:3.5,
     elevation:5
  },
  cutomTabBarButtonContainer:{
    top:Platform.OS == 'android' ? -25 : -10,
    justifyContent:'center',
    alignItems:'center',
    // shadowColor:Colors.themeGreen,
    //  shadowOffset:{
    //    width:0,
    //    height:10
    //  },
    //  shadowOpacity:0.25,
    //  shadowRadius:3.5,
    //  elevation:5
  },
  cutomTabBarButtonContainerChild:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:Colors.themeGreen,
  }
}) 

