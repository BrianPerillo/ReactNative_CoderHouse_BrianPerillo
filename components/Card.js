import { Button, Image, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';
import React from 'react';

const Card = (item) => {

  return (

    <View style={styles.categoryCard}>
        
        <Image style={{height:90, width:90, margin:10}} source={{uri: item.item.img}}/>
        <View style={{width:'100%', backgroundColor:'orange', padding:10 ,borderBottomLeftRadius:9, borderBottomRightRadius:9, marginBottom:0.04}}>
          <Text>{item.item.name}</Text>
        </View>

    </View>

  )

}

const styles = StyleSheet.create({
  categoryCard:{
    // flexDirection: 'row',
    // width: 150,
    justifyContent:'space-between',
    alignItems:'center',
    // padding: 10,
    backgroundColor:'white',
    elevation:2,
    borderRadius:10
    // marginVertical:10,
  },
  item: {
    flex: 1,
    padding: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  header: {
    fontFamily: 'open-sans-bold',
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontFamily: 'open-sans',
  }
});

export default Card;