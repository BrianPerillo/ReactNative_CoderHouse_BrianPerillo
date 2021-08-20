import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useState } from 'react'

import { COLORS } from '../constants'
import GetLocation from '../components/GetLocation';
import ImageSelector from '../components/ImageSelector';
import LocationPicker from '../components/LocationPicker';
import { addPlace } from '../store/places.action';
import { keys } from '../constants/Map';
import { useDispatch } from 'react-redux';

const NewPlaceScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedLocation, setSelectedLocation] = useState();
    const [selectedImage, setSelectedImage] = useState('');

    const onHandlerTitle = (text) => {
        setTitle(text);
    }

    const onHandlerDescription = (text) => {
        setDescription(text);
    }

    const onHandlerLocationPicked = useCallback(location => {
        setSelectedLocation(location);
    }, [setSelectedLocation]);
    
    const onHandlerImage = (path) => {
        setSelectedImage(path);
    }

    //Ejecuto dispatch addPlace para guardar la dirección, (Foto y título), luego redirijo (navigation.goBack()) a la pantalla de listado de direcciones
    const onHandlerSave = () => {
        // console.log("selectedLocation");
        // console.log(selectedLocation.lat + ' ' + selectedLocation.lng);
        // console.log("selectedLocation");
        // return
        const lat = selectedLocation.lat;
        const lng = selectedLocation.lng;
        const selectedLocationUri =
            `https://maps.googleapis.com/maps/api/staticmap?
            center=${selectedLocation.lat},${selectedLocation.lng}
            &zoom=13
            &size=600x300
            &maptype=roadmap
            &markers=color:blue%7Clabel:S%7C${selectedLocation.lat},${selectedLocation.lng}
            &key=${keys.API_MAPS_KEY}`
        
        dispatch(addPlace(title, description, selectedLocationUri, selectedImage, lat, lng)); //location es la uri que hay que pasarle a un Comp Image para ver la imagen del mapa
        navigation.goBack();
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                 {/* Título */}
                <Text style={styles.label}>Titulo</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onHandlerTitle}
                    value={title}
                />

                {/*Image Selector: Componente en el que se visualizará la foto tomada */}
                <ImageSelector onImage={onHandlerImage} />

                {/* Ubicación */}

                {/* <GetLocation onLocation={onHandlerLocation}/> */}
                
                <LocationPicker
                    navigation={navigation}
                    route={route}
                    onLocationPicked={onHandlerLocationPicked}
                />

                {/* Descripción */}
                <View style={styles.descriptionArea}>
                    <Text style={styles.label}>Descripción</Text>
                    <TextInput
                        style={styles.description}
                        onChangeText={onHandlerDescription}
                        value={description}
                        multiline={true}
                        numberOfLines={7}
                    />
                </View>

                <View style={styles.footer}>
                    <Button
                        title="Grabar Dirección"
                        color={COLORS.MAROON}
                        onPress={onHandlerSave}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
    descriptionArea: {
        marginTop: 10
    },
    description:{
        marginTop:10,
        borderColor:'gray',
        borderWidth: 0.5
    },
    footer: {
        marginTop: 50,
    }
})

export default NewPlaceScreen
