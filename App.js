import  React,{Component} from 'react'
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

import HomeScreen from "./Screens/HomeScreen"
import DietScreen from "./Screens/DietScreen"
import LowerScreen from "./Screens/LowerScreen"
import ExerciseScreen from "./Screens/ExerciseScreen"
import UpperScreen from "./Screens/UpperScreen"
import CardioScreen from "./Screens/CardioScreen"
import SportsScreen from "./Screens/SportsScreen"

export default class App extends Component{
  render(){
  return (
    <View>
    <AppContainer/>
    </View>
  );}
}

var AppNavigator = createSwitchNavigator({
  HomeScreen : HomeScreen,
  DietScreen : DietScreen,
  LowerScreen : LowerScreen,
  ExerciseScreen : ExerciseScreen,
  UpperScreen : UpperScreen,
  CardioScreen : CardioScreen,
  SportsScreen : SportsScreen
})

const AppContainer = createAppContainer(AppNavigator)