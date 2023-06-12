import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {navigation: any};

const ProfileScreen = (props: Props) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button onPress={() => props.navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({});
