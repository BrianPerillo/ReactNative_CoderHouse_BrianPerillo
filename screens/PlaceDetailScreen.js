import { Image, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React, {useState} from 'react'

import { COLORS } from '../constants';

const PlaceDetailScreen = (props) => {

    console.log("wwwwwwwww");
    console.log(props.route.params);
    ;

    const region = {
        latitude: props.route.params.lat,
        longitude: props.route.params.lng,
        latitudeDelta: 0.0025,
        longitudeDelta: 0.0025,
    }

    const markerCoordinates = {
        latitude:  props.route.params.lat,
        longitude:  props.route.params.lng,
    };
    
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>{props.route.params.title}</Text>
            <Image style={styles.image} source={{ uri: props.route.params.image }} />

            <Text style={styles.label}>Descripción</Text>
            <Text style={styles.description}>{props.route.params.description}</Text>

            <Text style={styles.label}>Ubicación</Text>
            {/* <Image style={styles.mapImage} source={{ uri: props.route.params.location}} /> */}
            <MapView
                initialRegion={region}
                style={styles.map}
            >

        
                <Marker title="Selección" coordinate={markerCoordinates} />
           

            </MapView>

        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 0.9
    },
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
