import { FlatList, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';
import PlaceItem from '../components/PlaceItem';
import { loadPlaces } from '../store/places.action';

const PlaceListScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const places = useSelector(state => state.places.places);
    console.log("placesListScreen");
    console.log(places);
    //Botón en el encabezado para redirigir a la pantalla para agregar direcciones
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Nueva Dirección"
                        // iconName="md-add"
                        onPress={() => navigation.push('Nuevo')}
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        dispatch(loadPlaces());
    }, []);

    console.log("renderItem");
    console.log();
    
    const renderItem = data => (
        <PlaceItem
            image={data.item.image}
            address={null}
            title={data.item.title}
            onSelect={() => navigation.push('Detalle', {title:data.item.title, image: data.item.image, description:data.item.description, location: data.item.location, 
                lat: data.item.lat, lng: data.item.lng} )}
        />
    )

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PlaceListScreen
