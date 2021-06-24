import {Button,FlatList,Modal,StyleSheet,Text,TextInput,View} from 'react-native';
import React, { useState } from 'react';
import ItemList from './components/ItemList';
import Header from './components/Header';

import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (

    <View>

      <Header title="Encabezado"/>
      
      <View style={styles.screen}>
        <ItemList/>
      </View>
      
    </View>

  );

}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  }
});