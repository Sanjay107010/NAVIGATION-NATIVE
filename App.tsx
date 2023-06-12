import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import StackNavigation from './src/Navigation1/StackNavigation';
import DrawerNavigation from './src/Navigation1/Drawer/DrawerNavigation';

type Props = {};

const App = (props: Props) => {
  // return (
  //   <View>
  //     <Text>Hello</Text>
  //   </View>
  // );
  return <StackNavigation />;
};

export default App;

const styles = StyleSheet.create({});
