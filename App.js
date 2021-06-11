import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import fb from './screens/fb';
import insta from './screens/in';

export default class App extends React.Component {
  render(){
  return <AppContainer/> 
  
}
}

const TabNavigator= createBottomTabNavigator({
  FB : {screen:fb},
  Insta: {screen:insta}
  
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
