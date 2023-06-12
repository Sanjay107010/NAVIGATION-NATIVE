import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Parent from '../../screen/Parent';
import CustomDrawer from '../CustomDrawer';
import BottomNavigator from '../BottomNavigator';

const Drawer = createDrawerNavigator();

type Props = {};

const DrawerNavigation = (props: Props) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Bottom"
        component={BottomNavigator}
        // options={{headerShown: true}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
