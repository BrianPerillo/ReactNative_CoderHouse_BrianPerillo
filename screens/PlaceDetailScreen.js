import { Image, StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../constants';
import React from 'react'

const PlaceDetailScreen = (props) => {
    console.log("wwwwwwwww");
    console.log(props);
  
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>{props.route.params.title}</Text>
            <Image style={styles.image} source={{ uri: props.route.params.image }} />

            <Text style={styles.label}>Descripción</Text>
            <Text style={styles.description}>{props.route.params.description}</Text>

            <Text style={styles.label}>Ubicación</Text>
            <Image style={styles.mapImage} source={{ uri: props.route.params.location}} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom:15,
    },
    label: {
        fontSize: 18,
        margin:20,
    },
    title:{
        height: 60,
        alignSelf:'center',
        textAlignVertical:'center',
        color: COLORS.BLUSH,
    },
    description:{
        padding: 25,
        textAlignVertical:'center'
    },
    image: {
        justifyContent:'center',
        alignSelf:'center',
        width: '90%',
        height: '30%',

    },
    mapImage: {
        justifyContent:'center',
        alignSelf:'center',
        width: '80%',
        height: '30%',
    }
})

export default PlaceDetailScreen
