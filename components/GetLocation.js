import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {keys} from '../constants/Map';

const GetLocation = (props) => {
    
    // const state = useSelector(state => state.places)

    // const dispatch = useDispatch();

    const [isFetching, setIsFetching] = useState(false);
    const [mapPreviewUrl, setMapPreviewUrl] = useState();
  
    // const [pickedUri, setPickedUri] = useState();

    
    //Pido permisos para utilizar la ubicación
    useEffect(() => {
    
        //Al iniciar pedimos permisos para acceder a la ubicación del usuario
        (async () => {
    
          let { status } = await Location.requestForegroundPermissionsAsync()
          if (status !== 'granted') {
            console.log(status);
          }
        })();
      
        
      }, [])

    const getLocationHandler = async () => {
    
        //Al tocar el botón se toma su posición/loaclización/location
        try {
          const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
          });
          console.log(location);
          // setPickedLocation({ //Guardamos los la lat y lng (latuitud y longitud en nuestro estado)
          //   lat: location.coords.latitude,
          //   lng: location.coords.longitude,
          // })//-34.6095595,-58.3972355
          setMapPreviewUrl(
            `https://maps.googleapis.com/maps/api/staticmap?
            center=${location.coords.latitude},${location.coords.longitude}
            &zoom=13
            &size=600x300
            &maptype=roadmap
            &markers=color:blue%7Clabel:S%7C${location.coords.latitude},${location.coords.longitude}
            &key=${keys.API_MAPS_KEY}`
          );

          setIsFetching(true);

          props.onLocation(`https://maps.googleapis.com/maps/api/staticmap?
          center=${location.coords.latitude},${location.coords.longitude}
          &zoom=13
          &size=600x300
          &maptype=roadmap
          &markers=color:blue%7Clabel:S%7C${location.coords.latitude},${location.coords.longitude}
          &key=${keys.API_MAPS_KEY}`);

        } catch(err) {
          console.log("wwwwwwwwwwww");
          console.log({err})
          Alert.alert(
            "Error, no hay permiso para utilizar la ubicación"
            [{ text: 'Ok' }],
          )
        } finally {
          
        }
      };


    return(
        
        <View style={styles.mapContainer}>

        {isFetching ?

           <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} /> 

          : 

          <View>
            <Text style={styles.label}>Ubicación</Text>
            <Button
            title="Obtener Ubicación"
            onPress={getLocationHandler}
            />
          </View>
        }



        </View>
    )

}


const styles = StyleSheet.create({
    mapContainer:{
        flex: 1,
        marginTop:50,
        marginBottom:50,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    mapImage: {
        alignSelf: 'center',
        width:'90%',
        height: 200,
    },
})


export default GetLocation;